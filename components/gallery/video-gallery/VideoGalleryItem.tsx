import { VideoGalleryItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/thumbnail-config";
import styles from "../../../styles/components/VideoGallery.module.css";

export default function VideoGalleryItem(props: VideoGalleryItemProps) {
	const thumb = useThumbnailConfig({
		thumbKey: props.poster.path,
		isVideo: true,
	});

	return (
		<button
			className={styles["video-gallery__item"]}
			data-vid={props.name}
		>
			<img
				className={styles["video-gallery__image"]}
				src={thumb.mobile.url}
				alt={props.poster.alt}
				style={{
					objectPosition: `center ${props.poster.orientation}`,
				}}
				loading="lazy"
			/>
		</button>
	);
}
