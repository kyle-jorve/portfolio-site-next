import { Fragment } from "react";
import Head from "next/head";
import GalleryGrid from "../../components/gallery/grid/GalleryGrid";
import styles from "../../styles/components/Gallery.module.css";

export default function GalleryPage() {
	return (
		<Fragment>
			<Head>
				<title key="title">
					Gallery | Kyle Jorve | Illustration and Design
				</title>
			</Head>

			<section
				className={`swoops swoops--left ${styles.gallery}`}
			>
				<div className={styles["gallery__title-row"]}>
					<h1 className="underline">Gallery</h1>
				</div>

				<GalleryGrid />
			</section>
		</Fragment>
	);
}
