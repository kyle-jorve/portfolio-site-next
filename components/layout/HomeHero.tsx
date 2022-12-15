import { useContext } from "react";
import Image from "next/image";
import SiteContext from "../../context/global";
import styles from "../../styles/layout/Hero.module.css";

type HomeHeroProps = {
    imagePath: string;
};

export default function HomeHero(props: HomeHeroProps) {
    const siteContext = useContext(SiteContext);
    const classes = [
        "section",
        styles.hero,
        siteContext.loadStatus === "done" && styles["hero--animate"],
        siteContext.visited && styles["hero--static"],
    ].filter((c) => c);

    function scrollIconClickHandler() {
        const featuredWorkSection = document.querySelector("#featured-work");

        if (!featuredWorkSection) return;

        featuredWorkSection.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <section className={classes.join(" ")}>
            <img
                className={styles["hero__logo"]}
                src="/images/icons-logos/logo-circle.svg"
                alt=""
                loading="eager"
                aria-hidden="true"
            />

            <h1 className={styles["hero__title"]}>
                <span className={styles["hero__title-1"]}>Kyle Jorve</span>
                <small className={styles["hero__title-2"]}>Illustration and Design</small>
            </h1>

            <button
                className={styles["scroll"]}
                aria-label="scroll to Featured Work"
                onClick={scrollIconClickHandler}
                tabIndex={siteContext.navOpen ? -1 : undefined}
            >
                <span className={styles["scroll__track"]}>
                    <span className={styles["scroll__ball"]}></span>
                </span>
            </button>

            <div className={styles["hero__bg"]} aria-hidden="true">
                <div className={styles["hero__img-frame"]}>
                    <Image
                        className={styles["hero__bg-img"]}
                        src={`https://kylejorve.com${props.imagePath}`}
                        alt=""
                        fill
                        loading="eager"
                        priority
                        sizes="(min-width: 1920px) 1920px, 100vw"
                    />
                </div>

                <Image
                    className={`${styles["hero__bg-img"]} ${styles["hero__bg-img--blur"]}`}
                    src={`https://kylejorve.com${props.imagePath}`}
                    alt=""
                    loading="eager"
                    priority
                    fill
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
