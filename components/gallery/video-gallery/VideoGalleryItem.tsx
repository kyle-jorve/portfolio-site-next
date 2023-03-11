import { useContext } from "react";
import SiteContext from "../../../context/global";
import { VideoGalleryItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/useThumbnailConfig";
import Button from "../../layout/Button";
import styles from "../../../styles/components/VideoGallery.module.css";

export default function VideoGalleryItem({
	name,
	title,
	poster,
	video,
	className = "",
	...otherProps
}: VideoGalleryItemProps) {
	const context = useContext(SiteContext);
	const thumb = useThumbnailConfig({
		thumbKey: poster.path,
		isVideo: true,
	});
	const classes = [
		styles["video-gallery__item"],
		...className.trim().split(" "),
	]
		.filter((c) => c?.length)
		.join(" ");

	function handleVideoOpen() {
		context.openLightbox(video);
	}

	return (
		<Button
			className={classes}
			aria-label={`open ${title} video`}
			onClick={handleVideoOpen}
			tabIndex={
				context.lightboxStatus === "open" ? -1 : undefined
			}
			{...otherProps}
		>
			<span
				className={styles["video-gallery__play-button"]}
				aria-hidden={true}
			></span>

			<img
				className={styles["video-gallery__image"]}
				src={thumb.mobile.url}
				alt={poster.alt}
				style={{
					objectPosition: `center ${poster.orientation}`,
				}}
				loading="lazy"
			/>
		</Button>
	);
}
