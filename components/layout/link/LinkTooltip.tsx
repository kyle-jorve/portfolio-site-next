import { GalleryItemType } from "../../../data/gallery-data";
import useThumbnailConfig from "../../../hooks/thumbnail-config";

type LinkTooltipProps = {
	galleryItem: GalleryItemType;
}

export default function LinkTooltip(props: LinkTooltipProps) {
	const imgSrc = useThumbnailConfig({
		thumbnailKey: props.galleryItem.thumbnailKey
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