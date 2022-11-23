import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../../context/global";
import Logo from "./Logo";
import NavButton from "../navigation/NavButton";
import styles from "../../../styles/layout/Header.module.css";

export default function Header() {
    const router = useRouter();
    const isHomePage = router.pathname === "/";
    const siteContext = useContext(SiteContext);
    let classes = [styles.header, !!isHomePage && styles["header--home"]].filter((c) => c);

    useEffect(() => {
        if (siteContext.loadStatus !== "done" && !siteContext.visited && window.scrollY < 10) {
            classes.push(styles["header--hidden"]);
        }
    }, [siteContext.loadStatus, siteContext.visited]);

    return (
        <header className={classes.join(" ")}>
            <Logo />

            {!siteContext.mobile && <NavButton />}
        </header>
    );
}
