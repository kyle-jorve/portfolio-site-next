import { Fragment } from "react";
import { useRouter } from "next/router";
import { GalleryItemType } from "../../types/gallery-types";
import { items as galleryItems } from "../../data/gallery-data";
import { NeighborType } from "../../types/gallery-types";
import Head from "next/head";
import Custom404 from "../404";
import Button from "../../components/layout/Button";
import DetailSlideshow from "../../components/gallery/detail/DetailSlideshow";
import DetailContent from "../../components/gallery/detail/DetailContent";
import Neighbors from "../../components/gallery/detail/Neighbors";
import styles from "../../styles/components/Showcase.module.css";

export default function GalleryDetail() {
	const router = useRouter();
	const itemID = router.query.itemID;
	const galleryItem = galleryItems.find((item) => item.name === itemID);
	let prevItem: GalleryItemType | undefined;
	let nextItem: GalleryItemType | undefined;
	let neighbors: {
		prev?: NeighborType;
		next?: NeighborType;
	};

	if (!galleryItem) {
		return <Custom404 />;
	}

	prevItem =
		galleryItems[
			galleryItems.findIndex((item) => item.name === galleryItem.name) - 1
		];
	nextItem =
		galleryItems[
			galleryItems.findIndex((item) => item.name === galleryItem.name) + 1
		];

	neighbors = {
		prev: !!prevItem
			? {
					name: prevItem.name,
					title: prevItem.title,
					thumb: prevItem.thumb,
			  }
			: undefined,
		next: !!nextItem
			? {
					name: nextItem.name,
					title: nextItem.title,
					thumb: nextItem.thumb,
			  }
			: undefined,
	};

	return (
		<Fragment>
			<Head>
				<title key="title">
					{galleryItem.title} by Kyle Jorve | Illustration and Design
				</title>
				<meta
					property="og:image"
					content={`https://kylejorve.com${galleryItem.thumb.path}-640.jpg`}
					key="meta-image"
				/>
			</Head>

			<section
				className={`section swoops swoops--left ${styles.showcase}`}
			>
				<div className={styles["showcase__inner"]}>
					<Button
						className="button button--white-border button--back button--mid"
						onClick={() => router.back()}
					>
						Back
					</Button>

					<div className={styles["showcase__grid"]}>
						<DetailSlideshow galleryItem={galleryItem} />

						<div className={styles["showcase__content-col"]}>
							<DetailContent
								title={galleryItem.title}
								content={galleryItem.content}
								year={galleryItem.year}
								purchaseLink={galleryItem.purchaseLink}
								downloadLink={galleryItem.downloadLink}
							/>

							<Neighbors {...neighbors} />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}
