import { useContext } from "react";
import { useRouter } from "next/router";
// import { useMatch } from 'react-router-dom';
import useGlobalData from "../../../hooks/data/global-data";
import SiteContext from "../../../context/global";
import FooterIcons from "./FooterIcons";
import Copyright from "./Copyright";
import styles from "../../../styles/layout/Footer.module.css";

function Footer() {
    const siteContext = useContext(SiteContext);
    const router = useRouter();
    // const isCVPage = useMatch("/cv");
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
            <FooterIcons socialIcons={socialIcons} />

            <Copyright />
        </footer>
    );
}

export default Footer;
