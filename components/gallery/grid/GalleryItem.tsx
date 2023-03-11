import { GalleryItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/useThumbnailConfig";
import CustomLink from "../../layout/link/CustomLink";
import NewBadge from "../NewBadge";
import styles from "../../../styles/components/Gallery.module.css";

export default function GalleryItem({
	name,
	title,
	year,
	thumb,
	isNew = false,
	className = "",
	...otherProps
}: GalleryItemProps) {
	const classes = [
		styles["gallery__item"],
		...className.trim().split(" "),
	]
		.filter((c) => c?.length)
		.join(" ");
	const imgConfig = useThumbnailConfig({
		thumbKey: thumb.path,
		isNew,
	});

	return (
		<article
			className={classes}
			{...otherProps}
		>
			{isNew && <NewBadge />}

			<CustomLink
				className={styles["gallery__item-link"]}
				to={`/gallery/${name}`}
			>
				<h2 className={styles["gallery__item-title"]}>
					{title}
					<small>{year}</small>
				</h2>

				<picture>
					{!!imgConfig.sources?.length &&
						imgConfig.sources.map((src, index) => {
							return (
								<source
									key={`${name}-source-${index}`}
									srcSet={src.url}
									media={`(min-width: ${src.minScreenWidth}px)`}
								/>
							);
						})}

					<img
						className={styles["gallery__item-image"]}
						src={imgConfig.mobile.url}
						alt={thumb.alt}
						style={
							!!thumb.orientation
								? {
										objectPosition: `center ${thumb.orientation}`,
								  }
								: undefined
						}
					/>
				</picture>
			</CustomLink>
		</article>
	);
}
