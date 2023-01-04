import React, { useState, useContext, useRef, useEffect, Fragment } from "react";
import Head from "next/head";
import { categoryNames, GalleryItemType } from "../../hooks/data/gallery-data";
import useGlobalData from "../../hooks/data/global-data";
import useGalleryData from "../../hooks/data/gallery-data";
import SiteContext from "../../context/global";
import GalleryFilters from "../../components/gallery/GalleryFilters";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import styles from "../../styles/components/Gallery.module.css";
import filterStyles from "../../styles/components/Filters.module.css";

let timeout: ReturnType<typeof setTimeout>;

export default function GalleryPage() {
    const globalData = useGlobalData();
    const galleryData = useGalleryData();
    const siteContext = useContext(SiteContext);
    const galleryGrid = useRef() as React.MutableRefObject<HTMLElement>;
    const [filtersShown, setFiltersShown] = useState(false);
    const [filters, setFilters] = useState<typeof categoryNames>([]);
    const [galleryItems, setGalleryItems] = useState(galleryData.items);
    const commerceLinks = globalData.socialIcons.commerce;

    useEffect(() => {
        function closeFilters(event: MouseEvent) {
            const target = event.target as HTMLElement;
            const targetIsFilters =
                target.classList.contains(filterStyles["filters__button"]) ||
                target.classList.contains(filterStyles["filters__tooltip"]) ||
                !!target.closest(`.${filterStyles["filters__button"]}`) ||
                !!target.closest(`.${filterStyles["filters__tooltip"]}`);

            if (filtersShown && !targetIsFilters) setFiltersShown(false);
        }

        document.addEventListener("click", closeFilters);

        return () => {
            document.removeEventListener("click", closeFilters);
        };
    }, [filtersShown]);

    function toggleFilter(event: React.MouseEvent) {
        const target = event.target as HTMLButtonElement;
        const category = target.dataset.cat as typeof categoryNames[number];
        let filteredItems: GalleryItemType[];

        setFilters((prev) => {
            let newFilters = prev.slice();

            if (prev.some((f) => f === category)) {
                newFilters.splice(
                    newFilters.findIndex((f) => f === category),
                    1,
                );
            } else {
                newFilters.push(category);
            }

            filteredItems = newFilters.length
                ? galleryData.items.filter((item) =>
                      item.categories?.some((cat) => newFilters.some((f) => f === cat.name)),
                  )
                : galleryData.items;

            resetGallery(filteredItems);

            return newFilters;
        });
    }

    function clearFilters() {
        setFilters([]);
        resetGallery(galleryData.items);
        setFiltersShown(false);
    }

    function resetGallery(filteredItems: GalleryItemType[]) {
        galleryGrid.current.classList.add(styles["gallery--hide"]);

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            setGalleryItems(filteredItems);

            galleryGrid.current.classList.remove(styles["gallery--hide"]);
        }, siteContext.transitionDuration);
    }

    return (
        <Fragment>
            <Head>
                <title key="title">Gallery | Kyle Jorve | Illustration and Design</title>
            </Head>

            <section className={`section ${styles.gallery}`} ref={galleryGrid}>
                <div className="title-row">
                    <h1 className="underline">{galleryData.title}</h1>

                    <GalleryFilters
                        active={filtersShown}
                        filters={filters}
                        onFilterClick={toggleFilter}
                        onClearFilters={clearFilters}
                        onToggleFilters={() => setFiltersShown((prev) => !prev)}
                    />
                </div>

                <GalleryGrid items={galleryItems} commerceLinks={commerceLinks} />
            </section>
        </Fragment>
    );
}
