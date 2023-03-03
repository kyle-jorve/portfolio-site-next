import { FeaturedItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/thumbnail-config";
import CustomLink from "../../layout/link/CustomLink";
import styles from "../../../styles/components/FeaturedWork.module.css";

export default function FeaturedItem(props: FeaturedItemProps) {
	const classes = [
		styles["featured__slide"],
		"glide__slide",
		props.className,
	]
		.filter((c) => c)
		.join(" ");
	const imgConfig = useThumbnailConfig({
		thumbKey: props.thumbKey,
		isFeatured: true,
	});

	return (
		<article
			className={classes}
			data-featured-slide
		>
			{props.isNew ? (
				<span className={styles["featured__new-badge"]}>
					New
				</span>
			) : (
				""
			)}

			<CustomLink
				to={`/gallery/${props.name}/`}
				className={styles["featured__link"]}
			>
				<h3 className={styles["featured__slide-title"]}>
					{props.title}
					<small>{props.year}</small>
				</h3>

				<img
					className={styles["featured__image"]}
					style={{
						objectPosition: props.orientation,
					}}
					src={imgConfig.mobile.url}
					alt={props.alt || ""}
					width="332"
					height="218"
				/>
			</CustomLink>
		</article>
	);
}
