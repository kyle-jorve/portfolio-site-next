import { useContext } from "react";
import Image from "next/image";
import CustomLink from "../layout/CustomLink";
import SiteContext from "../../context/global";
import { HomeBioType } from "../../hooks/data/home-data";
import styles from "../../styles/components/CV.module.css";

type HomeBioProps = {
    url: string;
    title: string;
    content: JSX.Element;
} & HomeBioType;

export default function HomeBio(props: HomeBioProps) {
    const siteContext = useContext(SiteContext);

    return (
        <section className={`section ${styles["bio-home"]}`} id="bio">
            <div className="wrapper wrapper--wide">
                <article className={styles["bio-home__content"]}>
                    <div className={styles["bio__img-cont"]} aria-hidden="true">
                        <img
                            className={styles["bio__img"]}
                            src={props.img.squarePath}
                            alt=""
                            loading="lazy"
                            width="640"
                            height="640"
                        />
                    </div>

                    <div className={styles["bio-home__box"]}>
                        <h2 className={`underline underline--center ${styles["bio-home__title"]}`}>{props.title}</h2>

                        {props.content}

                        <div className={`${styles["bio-home__button-cont"]}`}>
                            <CustomLink
                                className="button button--primary"
                                to={props.url}
                                onClick={() => siteContext.setToSection("resume")}
                                attributes={{
                                    tabIndex: siteContext.navOpen ? -1 : undefined,
                                }}
                            >
                                See R&eacute;sum&eacute;
                            </CustomLink>
                        </div>
                    </div>

                    <div className={styles["bio-home__img-cont"]}>
                        <Image
                            className={styles["bio-home__img"]}
                            src={`https://kylejorve.com${props.img.path}`}
                            alt={props.img.alt}
                            width={props.img.width}
                            height={props.img.height}
                            sizes="(min-width: 1664px) 1100px, 100vw"
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}
