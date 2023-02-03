import { useContext } from "react";
import SiteContext from "../../../context/global";
import LoaderInner from "./LoaderInner";
import styles from "../../../styles/layout/Loader.module.css";

export default function Loader() {
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
            <LoaderInner />
        </div>
    );
}
