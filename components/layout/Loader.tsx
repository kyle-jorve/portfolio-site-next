import { useContext } from "react";
import SiteContext from "../../context/global";
import styles from "../../styles/layout/Loader.module.css";

function Loader() {
    const siteContext = useContext(SiteContext);
    const classes = [
        styles.loader,
        siteContext.loadStatus === "in"
            ? styles["loader--slide-in"]
            : siteContext.loadStatus === "out" || siteContext.loadStatus === "done"
            ? styles["loader--slide-out"]
            : "",
    ].filter((c) => c);

    return (
        <div
            className={classes.join(" ")}
            aria-hidden="true"
            style={{
                animationDuration: `${siteContext.longTransitionDuration}ms`,
            }}
        >
            <span className={styles["loader__track"]}>
                <span className={styles["loader__bar"]}></span>
            </span>
        </div>
    );
}

export default Loader;
