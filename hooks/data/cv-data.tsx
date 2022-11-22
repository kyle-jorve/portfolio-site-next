import { Fragment } from "react";
import styles from "../../styles/components/CV.module.css";

export type HeroImgType = {
    url: string;
    alt: string;
};

export type BioType = {
    title: string;
    content: JSX.Element;
};

export type ResumeType = {
    docUrl: string;
    items: {
        heading: string;
        content: JSX.Element;
    }[];
};

function useCVData() {
    return {
        get heroImg(): HeroImgType {
            return {
                url: "/images/portrait/portrait-square-640.jpg",
                alt: "A photograph of Kyle Jorve smiling at the camera, a blurred scene of lush plant life behind him",
            };
        },
        get bio(): BioType {
            return {
                title: "About the Artist",
                content: (
                    <Fragment>
                        <p className="large-text">
                            Illustrator and designer Kyle Jorve has always been drawn to stories of fantasy and science
                            fiction.
                        </p>
                        <p>
                            Today, he expresses his love for these genres by dreaming up new worlds and illustrating the
                            characters that populate them.
                        </p>
                        <p>
                            As a teenager, Jorve discovered the medium of digital painting online and quickly fell in
                            love. He taught himself to draw and paint digitally, and soon began to create original
                            characters and build stories around them.
                        </p>
                        <p>
                            Currently, Jorve works as a front end developer for a Tucson-based digital marketing
                            company. In his free time he writes and illustrates his fictional worlds into life.
                        </p>
                    </Fragment>
                ),
            };
        },
        get resume(): ResumeType {
            return {
                docUrl: "/documents/resume_kyle-jorve.pdf",
                items: [
                    {
                        heading: "Experience",
                        content: (
                            <div className={styles["resume__sub-items"]}>
                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2021-Present</span>
                                        <strong className={styles["resume__sub-item-role"]}>Front End Developer</strong>
                                        <span className={styles["resume__sub-item-company"]}>Simpleview</span>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>
                                            Build front end components for a variety of websites in the tourism
                                            industry.
                                        </p>
                                        <p>
                                            Write performant, sustainable code and undergo regular peer review and
                                            scrutiny.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2015-2021</span>
                                        <strong className={styles["resume__sub-item-role"]}>
                                            Graphic and Web Designer, Illustrator
                                        </strong>
                                        <span className={styles["resume__sub-item-company"]}>
                                            Simply Bits / Desert Lab Studio
                                        </span>
                                    </h4>

                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>
                                            Created print, web, and electronic marketing materials for Simply
                                            Bits/Desert Lab Studio, its clients, and its various software products.
                                        </p>
                                        <p>
                                            Did front end development and implementation of web designs in a variety of
                                            code languages, including JavaScript, CSS, SCSS, HTML, CSHTML, and more.
                                        </p>
                                        <p>
                                            Created custom graphic and illustration work for a large variety of purposes
                                            including, but not limited to, marketing, web design, advertising, and
                                            product development.
                                        </p>
                                        <p>
                                            Worked for many clients of differing types, such as charity organizations,
                                            family-owned and small businesses, ecommerce businesses, and software
                                            companies, to meet a variety of design needs and challenges, including web
                                            design, graphic design, packaging design, and illustration.
                                        </p>
                                        <p>
                                            Attended trade shows to promote and sell Simply Bits&apos;/Desert Lab
                                            Studio&apos;s software products.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2015</span>
                                        <strong className={styles["resume__sub-item-role"]}>Writer, Illustrator</strong>
                                        <span className={styles["resume__sub-item-company"]}>
                                            New Nebula Comic Anthology
                                        </span>
                                    </h4>

                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>
                                            Wrote and illustrated an original story titled &quot;Ivory and Sinew&quot;
                                            for the comic book anthology New Nebula Volume 1.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2013-2015</span>
                                        <strong className={styles["resume__sub-item-role"]}>Designer</strong>
                                        <span className={styles["resume__sub-item-company"]}>Zarpara Vineyard</span>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>
                                            Created print marketing materials for Zarpara Vineyard. Did custom
                                            illustration work and graphic design.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2013</span>
                                        <strong className={styles["resume__sub-item-role"]}>Intern</strong>
                                        <span className={styles["resume__sub-item-company"]}>
                                            University of Arizona Digital Print Studio
                                        </span>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>
                                            Was responsible for printing in multiple formats and assisting customers in
                                            the digital print studio. Worked with a team to manage a steady flow of
                                            customers. Edited files to ensure optimum print quality. Helped maintain the
                                            functionality of large format printers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        heading: "Group and Juried Exhibitions",
                        content: (
                            <div className={styles["resume__sub-items"]}>
                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2016</span>
                                        <strong>Mesa Community College Alumni Exhibition</strong>
                                    </h4>

                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Exhibited three works of digital painting.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2013</span>
                                        <strong>University of Arizona Annual VisCom Show</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Exhibited in the Lionel Rombach Gallery in Tucson, Arizona.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2012</span>
                                        <strong>University of Arizona Annual VisCom Show</strong>
                                    </h4>

                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Exhibited in the Lionel Rombach Gallery in Tucson, Arizona.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2012</span>
                                        <strong>Student Art Exhibition in Orvieto, Italy</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>
                                            Exhibited book and sequential art in the Fondazione Centro Studi in Orvieto,
                                            Italy.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2011</span>
                                        <strong>Figure Illustration Exhibition</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Exhibited in the 5th on 6th Gallery in Tucson, Arizona.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2009</span>
                                        <strong>Mesa Community College Student Art Show</strong>
                                    </h4>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2008</span>
                                        <strong>Mesa Community College Student Art Show</strong>
                                    </h4>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2008</span>
                                        <strong>&quot;Go Figure&quot; Juried Exhibition</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Exhibited in the Brio Fine Arts Center in Scottsdale, Arizona.</p>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        heading: "Awards",
                        content: (
                            <div className={styles["resume__sub-items"]}>
                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2013</span>
                                        <strong>Silver for Color Illustration</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>University of Arizona Student VisCom show.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2012</span>
                                        <strong>Bronze for Character Design</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>University of Arizona Student VisCom show.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2012</span>
                                        <strong>Gold for Black and White Illustration</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>University of Arizona Student VisCom show.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2010</span>
                                        <strong>Best of Mesa Arts and Cultural Festival</strong>
                                    </h4>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2009</span>
                                        <strong>Wacom Award for Digital Art</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Mesa Community College Student Art Show</p>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        heading: "Special Skills",
                        content: (
                            <Fragment>
                                <h4 className={styles["resume__sub-item-title"]}>
                                    Illustration, Design, Front End Development
                                </h4>
                                <div className={styles["resume__sub-item-content"]}>
                                    <ul className={styles["resume__list"]}>
                                        <li>
                                            <strong>Languages and Frameworks:</strong> React, Umbraco, HTML, JavaScript,
                                            jQuery, CSS, SCSS
                                        </li>
                                        <li>
                                            <strong>Software:</strong> Adobe CC, ProCreate
                                        </li>
                                    </ul>
                                </div>
                            </Fragment>
                        ),
                    },
                    {
                        heading: "Education",
                        content: (
                            <div className={styles["resume__sub-items"]}>
                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2013</span>
                                        <strong>Bachelors of Fine Arts, Emphasis in Visual Communication</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>University of Arizona—graduated Summa Cum Laude.</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2012</span>
                                        <strong>Studied Abroad in Orvieto, Italy</strong>
                                    </h4>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2009</span>
                                        <strong>Associates of Arts</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Mesa Community College</p>
                                    </div>
                                </div>

                                <div className={styles["resume__sub-item"]}>
                                    <h4 className={styles["resume__sub-item-title"]}>
                                        <span className={styles["resume__sub-item-year"]}>2009</span>
                                        <strong>Associates of Fine Arts</strong>
                                    </h4>
                                    <div className={styles["resume__sub-item-content"]}>
                                        <p>Mesa Community College</p>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        heading: "Public Collections",
                        content: (
                            <Fragment>
                                <h4 className={styles["resume__sub-item-title"]}>
                                    Mesa Community College Life Sciences Building
                                </h4>
                                <div className={styles["resume__sub-item-content"]}>
                                    <p>Anatomy drawing on permanent display.</p>
                                </div>
                            </Fragment>
                        ),
                    },
                ],
            };
        },
    };
}

export default useCVData;
