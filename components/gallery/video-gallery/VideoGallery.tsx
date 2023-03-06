import { videoGallery } from "../../../data/gallery-data";
import VideoGalleryItem from "./VideoGalleryItem";
import Script from "next/script";
import styles from "../../../styles/components/VideoGallery.module.css";

export default function VideoGallery() {
	return (
		<section className={`section ${styles["video-gallery"]}`}>
			<div
				className={`${styles["video-gallery__inner"]} wrapper wrapper--wide`}
			>
				<h2
					className={`underline underline--center ${styles["video-gallery__title"]}`}
				>
					Video Gallery
				</h2>

				<div className={styles["video-gallery__grid"]}>
					{videoGallery.items.slice(0, 6).map((item) => {
						return (
							<VideoGalleryItem
								key={item.name}
								{...item}
							/>
						);
					})}
				</div>

				<div className={styles["video-gallery__button-row"]}>
					<a
						className="button button--primary button--arrow"
						href={videoGallery.url}
						target="_blank"
						rel="noreferrer"
					>
						See More
					</a>
				</div>
			</div>

			{videoGallery.items.map((item) => {
				return (
					<Script
						key={item.name}
						type="text/template"
						id={`vid-${item.name}`}
					>
						{item.video}
					</Script>
				);
			})}
		</section>
	);
}
