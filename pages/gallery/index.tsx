import React, { useState, useContext, useRef, Fragment } from "react";
import Head from "next/head";
import { categoryNames, GalleryItemType } from "../../hooks/data/gallery-data";
import useGlobalData from "../../hooks/data/global-data";
import useGalleryData from "../../hooks/data/gallery-data";
import SiteContext from "../../context/global";
import FilterModal from "../../components/gallery/FilterModal";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import styles from "../../styles/components/Gallery.module.css";

export default function GalleryPage() {
    const globalData = useGlobalData();
    const galleryData = useGalleryData();
    const siteContext = useContext(SiteContext);
    const galleryGrid = useRef() as React.MutableRefObject<HTMLElement>;
    const [modalActive, setModalActive] = useState(false);
    const [filter, setFilter] = useState<typeof categoryNames>([]);
    const [galleryItems, setGalleryItems] = useState(galleryData.items);
    const commerceLinks = globalData.socialIcons.commerce;

    function toggleFilter(event: React.MouseEvent) {
        const target = event.target as HTMLButtonElement;
        const category = target.dataset.cat as typeof categoryNames[number];

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

            return newFilter;
        });
    }

    function clearFilters() {
        setFilter([]);
        resetGallery(galleryData.items);
        setModalActive(false);
    }

    function applyFilters() {
        const filteredItems = filter.length
            ? galleryData.items.filter((item) => item.categories?.some((cat) => filter.some((f) => f === cat.name)))
            : galleryData.items;

        resetGallery(filteredItems);
        setModalActive(false);
    }

    function resetGallery(filteredItems: GalleryItemType[]) {
        galleryGrid.current.classList.add(styles["gallery--hide"]);

        setTimeout(() => {
            setGalleryItems(filteredItems);

            galleryGrid.current.classList.remove(styles["gallery--hide"]);
        }, siteContext.transitionDuration);
    }

    return (
        <Fragment>
            <Head>
                <title key="title">Gallery | Kyle Jorve | Illustration and Design</title>
            </Head>

            <FilterModal
                active={modalActive}
                filters={filter}
                onFilterClick={toggleFilter}
                onClearFilters={clearFilters}
                onApplyFilters={applyFilters}
                onClose={() => setModalActive(false)}
            />

            <section className={`section ${styles.gallery}`} ref={galleryGrid}>
                <div className="title-row">
                    <h1 className="underline">{galleryData.title}</h1>

                    <button
                        className={`${styles["gallery__filter-button"]}${
                            modalActive ? ` ${styles["gallery__filter-button--active"]}` : ""
                        }`}
                        aria-label="Filter gallery"
                        aria-controls="filter-modal"
                        aria-expanded={modalActive}
                        onClick={() => setModalActive(true)}
                    >
                        Filters
                    </button>
                </div>

                <GalleryGrid items={galleryItems} commerceLinks={commerceLinks} />
            </section>
        </Fragment>
    );
}
