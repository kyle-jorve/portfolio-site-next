import { useContext, forwardRef } from "react";
import SiteContext from "../../../context/global";
import getGlobalData from "../../../data/global-data";
import NavItem from "./NavItem";
import MobileNavParentItem from "./MobileNavParentItem";
import NavButton from "./NavButton";
import styles from "../../../styles/layout/Nav.module.css";

const MobileNavigation = forwardRef<HTMLElement>((props, ref) => {
    const globalData = getGlobalData();
    const navItems = globalData.nav.filter((item) => item.showInMobileNav);
    const siteContext = useContext(SiteContext);

    return (
        <nav
            className={`${styles["mobile-nav"]}${siteContext.navOpen ? ` ${styles["mobile-nav--hide"]}` : ""}`}
            ref={ref}
        >
            {navItems.map((item, index) => {
                if (item.children) {
                    return (
                        <MobileNavParentItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            index={index}
                            navItems={item.children}
                            attributes={{
                                tabIndex: siteContext.navOpen ? -1 : undefined,
                            }}
                        />
                    );
                }

                return (
                    <NavItem
                        key={item.pageID}
                        index={index}
                        url={item.url!}
                        isMobile={true}
                        className={`${styles[`mobile-nav__item--${item.pageID!}`]} ${styles["mobile-nav__item"]}`}
                        attributes={{
                            tabIndex: siteContext.navOpen ? -1 : undefined,
                        }}
                    >
                        <span className={styles["mobile-nav__label"]}>{item.pageName!}</span>
                    </NavItem>
                );
            })}

            <NavButton />
        </nav>
    );
});

MobileNavigation.displayName = "MobileNavigation";

export default MobileNavigation;
