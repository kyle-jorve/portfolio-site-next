import { GalleryGridProps } from "../../../types/gallery-types";
import { items as galleryItems } from "../../../data/gallery-data";
import styles from "../../../styles/components/Gallery.module.css";

export default function GalleryGrid({
	className = "",
	...otheProps
}: GalleryGridProps) {
	const classes = [
		...className.trim().split(" "),
		styles["gallery__grid"],
	]
		.filter((c) => c)
		.join(" ");

	return (
		<div
			className={classes}
			{...otheProps}
		></div>
	);
}
