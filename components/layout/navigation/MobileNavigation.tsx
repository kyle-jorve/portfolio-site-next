import { useEffect, useState } from "react";
import { nav } from "../../../data/global-data";
import { MobileNavigationProps } from "../../../types/global-types";
import NavItem from "./NavItem";
import ParentNavItem from "./ParentNavItem";
import styles from "../../../styles/layout/Nav.module.css";

export default function MobileNavigation({
	className = "",
	...otherProps
}: MobileNavigationProps) {
	const [navInvisible, setNavInvisible] = useState(true);
	const [navHidden, setNavHidden] = useState(false);
	const navItems = nav.filter((item) => item.showInMobileNav);
	const classes = [
		styles["mobile-nav"],
		navHidden && styles["mobile-nav--hide"],
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		setNavInvisible(false);
	}, []);

	useEffect(() => {
		let scrollPos = window.scrollY;

		function scrollHandler() {
			const curScrollPos = window.scrollY;

			if (curScrollPos < scrollPos && navHidden) {
				setNavHidden(false);
			} else if (curScrollPos > scrollPos && !navHidden) {
				setNavHidden(true);
			}

			scrollPos = window.scrollY;
		}

		window.addEventListener("scroll", scrollHandler);

		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, [navHidden]);

	return (
		<nav
			className={classes}
			style={
				navInvisible
					? {
							opacity: 0,
					  }
					: undefined
			}
			{...otherProps}
		>
			<div className={styles["mobile-nav__inner"]}>
				{navItems.map((item) => {
					if ("childItems" in item) {
						return (
							<ParentNavItem
								className={
									styles[`mobile-nav__expand--${item.id}`]
								}
								key={item.id}
								id={item.id}
								label={item.label}
								childItems={item.childItems}
								isMobileNav={true}
							/>
						);
					}

					return (
						<NavItem
							key={item.pageID}
							url={item.url}
							className={
								styles[`mobile-nav__item--${item.pageID}`]
							}
							isMobileNav={true}
						>
							{item.pageName}
						</NavItem>
					);
				})}
			</div>
		</nav>
	);
}
