import { FeaturedItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/thumbnail-config";
import CustomLink from "../../layout/link/CustomLink";
import styles from "../../../styles/components/FeaturedWork.module.css";

export default function FeaturedItem({
	name,
	title,
	year,
	thumb,
	isNew = false,
	className = "",
	...otherProps
}: FeaturedItemProps) {
	const classes = [
		styles["featured__slide"],
		"glide__slide",
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");
	const imgConfig = useThumbnailConfig({
		thumbKey: thumb.path,
		isFeatured: true,
	});

	return (
		<article
			className={classes}
			data-featured-slide
			{...otherProps}
		>
			<div className={styles["featured__slide-inner"]}>
				{isNew ? (
					<span className={styles["featured__new-badge"]}>
						New
					</span>
				) : (
					""
				)}

				<CustomLink
					to={`/gallery/${name}/`}
					className={styles["featured__link"]}
				>
					<h3 className={styles["featured__slide-title"]}>
						{title}
						<small>{year}</small>
					</h3>

					<img
						className={styles["featured__image"]}
						style={{
							objectPosition: `center ${
								thumb.orientation || "center"
							}`,
						}}
						src={imgConfig.mobile.url}
						alt={thumb.alt || ""}
						width="332"
						height="218"
					/>
				</CustomLink>
			</div>
		</article>
	);
}
