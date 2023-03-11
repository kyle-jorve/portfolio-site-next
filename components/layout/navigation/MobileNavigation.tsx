import { nav } from "../../../data/global-data";
import { MobileNavigationProps } from "../../../types/global-types";
import NavItem from "./NavItem";
import ParentNavItem from "./ParentNavItem";
import styles from "../../../styles/layout/Nav.module.css";

export default function MobileNavigation({
	className = "",
	...otherProps
}: MobileNavigationProps) {
	const navItems = nav.filter((item) => item.showInMobileNav);
	const classes = [
		...className.trim().split(" "),
		styles["mobile-nav"],
	]
		.filter((c) => c?.length)
		.join(" ");

	return (
		<nav
			className={classes}
			{...otherProps}
		>
			<div className={styles["mobile-nav__inner"]}>
				{navItems.map((item) => {
					if ("childItems" in item) {
						return (
							<ParentNavItem
								className={
									styles[
										`mobile-nav__expand--${item.id}`
									]
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
								styles[
									`mobile-nav__item--${item.pageID}`
								]
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
