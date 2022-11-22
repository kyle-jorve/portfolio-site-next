import { useContext } from "react";
import SiteContext from "../../../context/global";
import Logo from "./Logo";
import styles from "../../../styles/layout/Header.module.css";

function DetailHeader() {
    const siteContext = useContext(SiteContext);

    return (
        <header className={styles.header}>
            <Logo />

            <button
                className="close-button"
                aria-label={`return to ${siteContext.fromPage} page`}
                onClick={siteContext.returnToOriginPage}
            ></button>
        </header>
    );
}

export default DetailHeader;
