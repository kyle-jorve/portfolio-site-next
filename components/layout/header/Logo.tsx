import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteContext from "../../../context/global";
import styles from "../../../styles/layout/Header.module.css";

export default function Logo() {
    const router = useRouter();
    const siteContext = useContext(SiteContext);

    function logoClickHandler(event: React.MouseEvent) {
        if (siteContext.desktop) {
            event.preventDefault();

            siteContext.toggleLoader();

            setTimeout(() => {
                router.push("/");

                siteContext.closeNav();

                siteContext.toggleLoader(false);
            }, siteContext.longTransitionDuration);
        } else if (siteContext.navOpen) {
            siteContext.closeNav();
        }
    }

    return (
        <Link className={styles["header__logo-cont"]} href="/" onClick={logoClickHandler} aria-label="go to home page">
            <img
                className={styles["header__logo"]}
                src="/icons-logos/logo-circle.svg"
                alt="The Art of Kyle Jorve logo"
                loading="eager"
            />
        </Link>
    );
}
