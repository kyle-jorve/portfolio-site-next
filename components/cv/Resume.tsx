import { useContext } from "react";
import SiteContext from "../../context/global";
import CVItem from "./CVItem";
import { ResumeType } from "../../hooks/data/cv-data";
import styles from "../../styles/components/CV.module.css";

type ResumeProps = {
    resume: ResumeType;
};

function Resume(props: ResumeProps) {
    const siteContext = useContext(SiteContext);
    const resume = props.resume.docUrl;

    return (
        <section className={`section ${styles.resume}`} id="resume">
            <div className="wrapper wrapper--content">
                <div className={styles["resume__title-row"]}>
                    <h2 className={`underline underline--center ${styles["resume__title"]}`}>R&eacute;sum&eacute;</h2>

                    <div className={styles["resume__button-cont"]}>
                        <a
                            className="button button--primary button--download"
                            href={resume}
                            download
                            tabIndex={siteContext.navOpen ? -1 : undefined}
                        >
                            Download
                        </a>
                    </div>
                </div>

                {props.resume.items.map((item, index) => {
                    return (
                        <CVItem
                            key={index}
                            title={item.heading}
                            content={item.content}
                            showHR={index + 1 < props.resume.items.length}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Resume;
