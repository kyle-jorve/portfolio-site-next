import { GalleryItemType } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/useThumbnailConfig";

type LinkTooltipProps = {
	galleryItem: GalleryItemType;
}

export default function LinkTooltip(props: LinkTooltipProps) {
	const imgSrc = useThumbnailConfig({
		thumbKey: props.galleryItem.thumbnailKey.path
	}).mobile.url;

	return (
		<span className="tooltip" aria-hidden="true">
			<img
				className="tooltip__img"
				alt=""
				src={imgSrc}
				style={{
					objectPosition: `center ${props.galleryItem.orientation}`
				}}
			/>

			<span className="tooltip__title">{props.galleryItem.title}</span>
		</span>
	)
}