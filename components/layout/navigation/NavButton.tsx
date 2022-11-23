import { useContext } from "react";
import SiteContext from "../../../context/global";
import styles from "../../../styles/layout/Nav.module.css";

export default function NavButton() {
    const siteContext = useContext(SiteContext);
    const classes = [styles["nav__button"], siteContext.navOpen && styles["nav__button--active"]].filter((c) => c);

    return (
        <button
            ref={siteContext.navButtonRef}
            onClick={siteContext.navToggleHandler}
            className={classes.join(" ")}
            aria-controls="main-navigation"
            aria-label="toggle main navigation"
            aria-expanded={siteContext.navOpen}
        >
            <div className={styles["nav__button-blocks"]} aria-hidden="true">
                <span className={styles["nav__button-block"]}></span>
                <span className={`${styles["nav__button-block"]} ${styles["nav__button-block--disapparate"]}`}></span>
                <span className={styles["nav__button-block"]}></span>

                <span className={`${styles["nav__button-block"]} ${styles["nav__button-block--disapparate"]}`}></span>
                <span className={styles["nav__button-block"]}></span>
                <span className={`${styles["nav__button-block"]} ${styles["nav__button-block--disapparate"]}`}></span>

                <span className={styles["nav__button-block"]}></span>
                <span className={`${styles["nav__button-block"]} ${styles["nav__button-block--disapparate"]}`}></span>
                <span className={styles["nav__button-block"]}></span>
            </div>
        </button>
    );
}
