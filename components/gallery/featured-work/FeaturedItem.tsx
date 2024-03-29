import { useState, useEffect } from "react";
import { FeaturedItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/useThumbnailConfig";
import CustomLink from "../../layout/CustomLink";
import NewBadge from "../NewBadge";
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
	const [imageLoaded, setImageLoaded] = useState(false);
	const classes = [
		"has-load-indicator",
		imageLoaded && "loaded",
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

	// if for whatever reason the load event fails to trigger
	useEffect(() => {
		setTimeout(() => {
			setImageLoaded(true);
		}, 1000);
	}, []);

	return (
		<article
			className={classes}
			data-featured-slide
			{...otherProps}
		>
			<span
				className="load-indicator"
				aria-hidden="true"
			></span>

			<div className={styles["featured__slide-inner"]}>
				{isNew && <NewBadge />}

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
						loading="lazy"
						onLoad={() => setImageLoaded(true)}
					/>
				</CustomLink>
			</div>
		</article>
	);
}
