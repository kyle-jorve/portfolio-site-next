import { videoGallery } from "../../data/gallery-data";
import styles from "../../styles/components/VideoGallery.module.css";

export default function VideoGallery() {
	const guid = Date.now();

	return (
		<section className={`section ${styles["video-gallery"]}`}>
			<div className="wrapper wrapper--wide">
				<h2
					className={`underline ${styles["video-gallery__title"]}`}
				>
					Video Gallery
				</h2>

				<div className={styles["video-gallery__grid"]}>
					{videoGallery.items}
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
		</section>
	);
}
