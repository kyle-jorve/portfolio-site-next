import { BioType, HeroImgType } from "../../data/cv-data";
import styles from "../../styles/components/CV.module.css";

type BioProps = {
    heroImg: HeroImgType;
    bio: BioType;
};

export default function Bio(props: BioProps) {
    return (
        <div className={styles.bio}>
            <div className={styles["bio__hero"]} aria-hidden="true">
                <img className={styles["bio__bg"]} src={props.heroImg.url} alt="" loading="eager" />
            </div>

            <section className={`section ${styles["bio__content"]}`}>
                <div className="wrapper wrapper--narrow">
                    <div className={styles["bio__img-cont"]}>
                        <img
                            className={styles["bio__img"]}
                            src={props.heroImg.url}
                            alt={props.heroImg.alt}
                            loading="eager"
                            width="400"
                            height="400"
                        />
                    </div>

                    <h1 className={`underline underline--center ${styles["bio__title"]}`}>{props.bio.title}</h1>

                    {props.bio.content}
                </div>
            </section>

            <img
                className="logo-icon"
                src="/images/icons-logos/logo-circle-icon.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
            />
        </div>
    );
}
