import { useContext } from "react";
import { useRouter } from "next/router";
import useGlobalData from "../../../hooks/data/global-data";
import SiteContext from "../../../context/global";
import FooterIcons from "./FooterIcons";
import Copyright from "./Copyright";
import styles from "../../../styles/layout/Footer.module.css";

export default function Footer() {
    const siteContext = useContext(SiteContext);
    const router = useRouter();
    const isAdminPage = router.pathname.includes("/admin");
    const isCVPage = router.pathname === "/cv";
    const globalData = useGlobalData();
    const socialIcons = {
        standard: globalData.socialIcons.standard,
        commerce: globalData.socialIcons.commerce,
    };

    return (
        <footer
            className={`${styles.footer}${!!isCVPage ? ` ${styles["footer--light"]}` : ""}`}
            aria-hidden={siteContext.navOpen}
        >
            {!isAdminPage && <FooterIcons socialIcons={socialIcons} />}

            <Copyright />
        </footer>
    );
}
