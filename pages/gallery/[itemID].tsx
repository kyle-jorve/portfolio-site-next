import { Fragment } from "react";
import { useRouter } from "next/router";
import { items as galleryItems } from "../../data/gallery-data";
import Head from "next/head";
import Custom404 from "../404";
import Button from "../../components/layout/Button";
import styles from "../../styles/components/Showcase.module.css";

export default function GalleryDetail() {
	const router = useRouter();
	const itemID = router.query.itemID;
	const galleryItem = galleryItems.find((item) => item.name === itemID);

	if (!galleryItem) {
		return <Custom404 />;
	}

	return (
		<Fragment>
			<Head>
				<title key="title">{galleryItem.title} by Kyle Jorve | Illustration and Design</title>
				<meta
					property="og:image"
					content={`https://kylejorve.com${galleryItem.thumb.path}-640.jpg`}
					key="meta-image"
				/>
			</Head>

			<section className={`section swoops swoops--left ${styles.showcase}`}>
				<Button
					className="button button--white-border button--back button--small"
					onClick={() => history.back()}
				>
					Back
				</Button>

				<div className="showcase__grid"></div>
			</section>
		</Fragment>
	);
}
