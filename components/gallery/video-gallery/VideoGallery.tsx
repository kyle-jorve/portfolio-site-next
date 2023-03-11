import { useContext } from "react";
import SiteContext from "../../../context/global";
import { VideoGalleryProps } from "../../../types/gallery-types";
import { videoGallery } from "../../../data/gallery-data";
import VideoGalleryItem from "./VideoGalleryItem";
import CustomLink from "../../layout/link/CustomLink";
import styles from "../../../styles/components/VideoGallery.module.css";

export default function VideoGallery({
	className = "",
	...otherProps
}: VideoGalleryProps) {
	const context = useContext(SiteContext);
	const classes = [
		...className.trim().split(" "),
		"section",
		"swoops",
		"swoops--right",
		styles["video-gallery"],
	]
		.filter((c) => c?.length)
		.join(" ");

	return (
		<section
			className={classes}
			{...otherProps}
		>
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
					<CustomLink
						className="button button--primary button--arrow"
						to={videoGallery.url}
						target="_blank"
						rel="noreferrer"
						tabIndex={
							context.lightboxStatus === "open"
								? -1
								: undefined
						}
					>
						See More
					</CustomLink>
				</div>
			</div>
		</section>
	);
}
