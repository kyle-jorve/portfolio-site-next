import { Fragment, useEffect, useContext } from "react";
import SiteContext from "../context/global";
import useCVData from "../hooks/data/cv-data";
import Bio from "../components/cv/Bio";
import Resume from "../components/cv/Resume";

export default function CV() {
    const siteContext = useContext(SiteContext);
    const cvData = useCVData();

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
            <Bio heroImg={cvData.heroImg} bio={cvData.bio} />
            <Resume resume={cvData.resume} />
        </Fragment>
    );
}
