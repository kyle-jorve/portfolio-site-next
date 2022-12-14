import { Fragment, useEffect, useContext } from "react";
import SiteContext from "../context/global";
import FeaturedWork from "../components/gallery/FeaturedWork";
import HomeHero from "../components/layout/HomeHero";
import HomeBio from "../components/cv/HomeBio";
import useGlobalData from "../hooks/data/global-data";
import useHomeData from "../hooks/data/home-data";
import useCVData from "../hooks/data/cv-data";
import useGalleryData from "../hooks/data/gallery-data";

let timeout: ReturnType<typeof setTimeout>;

export default function Home() {
    const homeData = useHomeData();
    const globalData = useGlobalData();
    const galleryData = useGalleryData();
    const featuredItems = galleryData.items
        .filter((item) => item.featured)
        .slice(0, homeData.gallery.itemsLimit)
        .map((item) => {
            return {
                ...item,
                index: galleryData.items.findIndex((i) => i.name === item.name),
            };
        });
    const siteContext = useContext(SiteContext);
    const cvData = useCVData();

    useEffect(() => {
        if (timeout) clearTimeout(timeout);

        if (siteContext.fromSection) {
            const section = document.querySelector(`#${siteContext.fromSection}`);

            if (!section) return;

            section.scrollIntoView();
        }

        timeout = setTimeout(() => {
            siteContext.setVisited(true);
        }, 3000); // total time for hero to animate in
    }, [siteContext.fromSection]);

    return (
        <Fragment>
            <HomeHero imagePath={homeData.intro.heroImagePath} />

            <FeaturedWork featuredItems={featuredItems} />

            <HomeBio
                img={homeData.bio.img}
                title={cvData.bio.title}
                content={cvData.bio.content}
                url={globalData.nav.find((item) => item.pageID === "cv")!.url}
            />
        </Fragment>
    );
}
