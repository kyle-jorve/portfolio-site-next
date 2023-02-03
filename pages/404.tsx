import { useContext, useEffect } from "react";
import SiteContext from "../context/global";
import CustomLink from "../components/layout/link/CustomLink";
import styles from "../styles/layout/Hero.module.css";

export default function Custom404() {
    const siteContext = useContext(SiteContext);

    useEffect(() => {
        siteContext.setPageNotFound(true);

        return () => {
            siteContext.setPageNotFound(false);
        };
    });

    return (
        <section className={`section ${styles.hero} ${styles["hero--short"]} ${styles["hero--content"]}`}>
            <div className="wrapper wrapper--content">
                <h1 className="underline underline--center">Page Not Found</h1>

                <p>
                    I&apos;m not sure how you ended up here, but click
                    <CustomLink
                        to="/"
                        attributes={{
                            tabIndex: siteContext.navOpen ? -1 : undefined,
                        }}
                    >
                        here
                    </CustomLink>
                    to return to safe ground.
                </p>
            </div>
        </section>
    );
}
