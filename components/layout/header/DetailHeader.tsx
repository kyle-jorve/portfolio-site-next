import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SiteContext from "../../../context/global";
import Logo from "./Logo";
import styles from "../../../styles/layout/Header.module.css";

export default function DetailHeader() {
    const siteContext = useContext(SiteContext);

    return (
        <header className={styles.header}>
            <Logo />

            <button
                className="close-button"
                aria-label={`return to ${siteContext.fromPage} page`}
                onClick={siteContext.returnToOriginPage}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </header>
    );
}
