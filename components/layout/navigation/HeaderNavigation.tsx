import { useContext, Fragment } from "react";
import SiteContext from "../../../context/global";
import { nav, headerCTA } from "../../../data/global-data";
import NavItem from "./NavItem";
import ParentNavItem from "./ParentNavItem";
import styles from "../../../styles/layout/Nav.module.css";

export default function HeaderNavigation() {
	const siteContext = useContext(SiteContext);
	const navItems = nav.filter((item) =>
		"showInMainNav" in item ? item.showInMainNav : true,
	);

	return (
		<nav className={styles.nav}>
			{!siteContext.mobile && (
				<Fragment>
					{navItems.map((item) => {
						if ("childItems" in item) {
							return (
								<ParentNavItem
									key={item.id}
									id={item.id}
									label={item.label}
									childItems={item.childItems}
								/>
							);
						}

						return (
							<NavItem
								key={item.pageID}
								url={item.url}
							>
								{item.pageName}
							</NavItem>
						);
					})}
				</Fragment>
			)}

			<a
				className={`${styles["nav__cta"]} button button--secondary button--add`}
				href={headerCTA.url}
				target="_blank"
				rel="noreferrer"
			>
				{headerCTA.pageName}
			</a>
		</nav>
	);
}
