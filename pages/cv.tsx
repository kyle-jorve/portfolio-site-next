import { Fragment, useEffect, useContext } from "react";
import Head from "next/head";
import SiteContext from "../context/global";
import useCVData from "../hooks/data/cv-data";
import Bio from "../components/cv/Bio";
import Resume from "../components/cv/Resume";

export default function CV() {
    const siteContext = useContext(SiteContext);
    const cvData = useCVData();

    useEffect(() => {
        document.querySelector("body")?.classList.add("light");

        return () => document.querySelector("body")?.classList.remove("light");
    });

    useEffect(() => {
        if (siteContext.toSection) {
            const section = document.querySelector(`#${siteContext.toSection}`);

            siteContext.setToSection(null);

            if (!section) return;

            section.scrollIntoView();
        }
    }, [siteContext.toSection]);

    return (
        <Fragment>
            <Head>
                <title key="title">Curriculum Vitae | Kyle Jorve | Illustration and Design</title>
            </Head>
            <Bio heroImg={cvData.heroImg} bio={cvData.bio} />
            <Resume resume={cvData.resume} />
        </Fragment>
    );
}
