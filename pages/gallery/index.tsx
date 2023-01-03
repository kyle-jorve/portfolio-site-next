import React, { useEffect, useCallback, useState, useContext, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { projectCategories, GalleryItemType } from "../../hooks/data/gallery-data";
import useGlobalData from "../../hooks/data/global-data";
import useGalleryData from "../../hooks/data/gallery-data";
import SiteContext from "../../context/global";
import GalleryItem from "../../components/gallery/GalleryItem";
import styles from "../../styles/components/Gallery.module.css";

export default function Gallery() {
    const globalData = useGlobalData();
    const galleryData = useGalleryData();
    const categoryNames = projectCategories.map((cat) => cat.name);
    const siteContext = useContext(SiteContext);
    const galleryGrid = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [filter, setFilter] = useState<typeof categoryNames>([]);
    const [galleryItems, setGalleryItems] = useState(galleryData.items);
    const [reveal, setReveal] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
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

    function toggleFilter(event: React.MouseEvent) {
        const target = event.target as HTMLButtonElement;
        const category = target.dataset.cat as typeof categoryNames[number];
        let filteredItems: GalleryItemType[] = [];

        target.classList.toggle(styles["gallery__filter--active"]);
        galleryGrid.current.classList.add(styles["gallery__grid--hide"]);

        setTimeout(() => {
            setFilter((prev) => {
                let newFilter = prev.slice();

                if (prev.some((f) => f === category)) {
                    newFilter.splice(
                        newFilter.findIndex((f) => f === category),
                        1,
                    );
                } else {
                    newFilter.push(category);
                }

                filteredItems = newFilter.length
                    ? galleryData.items.filter((item) =>
                          item.categories?.some((cat) => newFilter.some((f) => f === cat.name)),
                      )
                    : galleryData.items;

                setGalleryItems(filteredItems);

                return newFilter;
            });

            galleryGrid.current.classList.remove(styles["gallery__grid--hide"]);
        }, siteContext.transitionDuration);
    }

    return (
        <Fragment>
            <Head>
                <title key="title">Gallery | Kyle Jorve | Illustration and Design</title>
            </Head>

            <section className={`section ${styles.gallery}`}>
                <div className="title-row">
                    <h1 className="underline">{galleryData.title}</h1>

                    <div className={styles["gallery__filters-row"]} aria-label="Filters">
                        <div className={styles["gallery__filters"]}>
                            {projectCategories.map((cat) => {
                                return (
                                    <button
                                        key={cat.name}
                                        className={styles["gallery__filter"]}
                                        data-cat={cat.name}
                                        onClick={toggleFilter}
                                        aria-label={`Filter by ${cat.label} illustrations`}
                                    >
                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles["gallery__grid"]} ref={galleryGrid}>
                    {galleryItems.map((item, index) => {
                        const isNew = item.name === galleryData.items[0].name;

                        return (
                            <GalleryItem
                                key={index}
                                isNew={isNew}
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
