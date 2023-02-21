import { forwardRef } from "react";
import { nav } from "../../../data/global-data";
import NavItem from "./NavItem";
import ParentNavItem from "./ParentNavItem";
import styles from "../../../styles/layout/Nav.module.css";

const MobileNavigation = forwardRef<HTMLElement>(
	function MobileNavigation(props, ref) {
		const navItems = nav.filter((item) => item.showInMobileNav);

		return (
			<nav
				className={styles["mobile-nav"]}
				ref={ref}
			>
				{navItems.map((item) => {
					if ('childItems' in item) {
						return (
							<ParentNavItem
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
							className={styles[`mobile-nav__item--${item.pageID}`]}
							isMobileNav={true}
						>
							{item.pageName}
						</NavItem>
					);
				})}
			</nav>
		);
	}
);

export default MobileNavigation;
