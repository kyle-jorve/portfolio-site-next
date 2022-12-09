import { useEffect, useCallback, useState, useContext, Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useGlobalData from "../../hooks/data/global-data";
import useGalleryData from "../../hooks/data/gallery-data";
import SiteContext from "../../context/global";
import GalleryItem from "../../components/gallery/GalleryItem";
import styles from "../../styles/components/Gallery.module.css";

export default function Gallery() {
    const siteContext = useContext(SiteContext);
    const [reveal, setReveal] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
    const globalData = useGlobalData();
    const galleryData = useGalleryData();
    const router = useRouter();
    const commerceLinks = globalData.socialIcons.commerce;
    const page = globalData.nav.find((p) => p.url === router.pathname);
    const totalDelay =
        (galleryData.items.length - 1 + (commerceLinks.length - 1)) * siteContext.transitionDelay +
        siteContext.transitionDuration;

    const transitionItems = useCallback(() => {
        setReveal(true);

        setTimeout(() => {
            setAnimationDone(true);
        }, totalDelay);
    }, [totalDelay]);

    useEffect(() => {
        if (siteContext.loadStatus === "done") {
            transitionItems();
        }
    }, [transitionItems, siteContext.loadStatus]);

    return (
        <Fragment>
            <Head>
                <title key="title">Gallery | Kyle Jorve | Illustration and Design</title>
            </Head>
            <section className={`section ${styles.gallery}`}>
                <h1 className="underline">{galleryData.title}</h1>

                <div className={styles["gallery__grid"]}>
                    {galleryData.items.map((item, index) => {
                        return (
                            <GalleryItem
                                key={index}
                                isNew={index === 0}
                                name={item.name}
                                title={item.title}
                                thumbnailKey={item.thumbnailKey}
                                orientation={item.orientation}
                                fromPage={page ? page.pageID : null}
                                fromSection={null}
                                style={{
                                    transitionDelay: !animationDone ? `${index * siteContext.transitionDelay}ms` : "",
                                }}
                                className={!reveal ? styles["gallery__item--animated"] : ""}
                                attributes={{
                                    tabIndex: siteContext.navOpen ? -1 : undefined,
                                }}
                            />
                        );
                    })}

                    {commerceLinks.map((item, index) => {
                        return (
                            <article
                                key={index}
                                className={`${styles["gallery__item"]} ${styles["gallery__item--card"]} ${
                                    styles[`gallery__item--${item.name}`]
                                }${!reveal ? ` ${styles["gallery__item--animated"]}` : ""}`}
                                style={{
                                    transitionDelay: !animationDone
                                        ? `${(index + galleryData.items.length) * siteContext.transitionDelay}ms`
                                        : "",
                                }}
                                tabIndex={siteContext.navOpen ? -1 : undefined}
                            >
                                <a
                                    className={styles["gallery__item-link"]}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3 className={styles["gallery__card-title"]}>
                                        {!!item.icon && item.icon}
                                        {item.label}
                                    </h3>
                                </a>
                            </article>
                        );
                    })}
                </div>
            </section>
        </Fragment>
    );
}
