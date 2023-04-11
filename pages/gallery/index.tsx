import { Fragment, useState } from "react";
import Head from "next/head";
import { transitions } from "../../data/global-data";
import { categoryNames, GalleryItemType } from "../../types/gallery-types";
import { items as galleryItems } from "../../data/gallery-data";
import GalleryGrid from "../../components/gallery/grid/GalleryGrid";
import VideoGallery from "../../components/gallery/video-gallery/VideoGallery";
import CommerceTiles from "../../components/gallery/CommerceTiles";
import GalleryFilters from "../../components/gallery/grid/GalleryFilters";
import styles from "../../styles/components/Gallery.module.css";

let timeout: ReturnType<typeof setTimeout>;

export default function GalleryPage() {
	const [activeFilters, setActiveFilters] = useState<typeof categoryNames>(
		[],
	);
	const [gridHidden, setGridHidden] = useState(false);
	const [items, setGalleryItems] = useState<GalleryItemType[]>(
		galleryItems.map((item, index) => {
			const isNew = index === 0;

			return {
				...item,
				isNew,
			};
		}),
	);

	function toggleFilter(event: React.MouseEvent) {
		const target = event.currentTarget as HTMLButtonElement;
		const category = target.dataset.cat as typeof categoryNames[number];
		let newFilters: typeof categoryNames;

		setActiveFilters((prev) => {
			newFilters = prev.slice();

			if (prev.some((f) => f === category)) {
				newFilters.splice(
					newFilters.findIndex((f) => f === category),
					1,
				);
			} else {
				newFilters.push(category);
			}

			resetGallery(newFilters);

			return newFilters;
		});
	}

	function clearFilters() {
		setActiveFilters([]);
		resetGallery();
	}

	function resetGallery(filters: typeof categoryNames = []) {
		const filteredItems = (
			filters.length
				? galleryItems.filter((item) =>
						item.categories?.some((cat) =>
							filters.some((f) => f === cat.name),
						),
				  )
				: galleryItems
		).map((item) => {
			const isNew = item.name === galleryItems[0].name;

			return {
				...item,
				isNew,
			};
		});

		setGridHidden(true);

		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			setGalleryItems(filteredItems);

			setGridHidden(false);
		}, transitions.short);
	}

	return (
		<Fragment>
			<Head>
				<title key="title">
					Gallery | Kyle Jorve | Illustration and Design
				</title>
			</Head>

			<section className={`swoops swoops--left ${styles.gallery}`}>
				<div className={styles["gallery__title-row"]}>
					<h1 className={`underline ${styles["gallery__title"]}`}>
						Gallery
					</h1>

					<GalleryFilters
						activeFilters={activeFilters}
						onFilterClick={toggleFilter}
						onClearFilters={clearFilters}
					/>
				</div>

				<GalleryGrid
					items={items}
					className={
						gridHidden ? styles["gallery__grid--hide"] : undefined
					}
				/>

				<CommerceTiles />
			</section>

			<VideoGallery />
		</Fragment>
	);
}
