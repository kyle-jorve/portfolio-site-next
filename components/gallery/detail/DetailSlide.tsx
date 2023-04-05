import { DetailSlideProps } from "../../../types/gallery-types";
import useDetailImageConfig from "../../../hooks/uesDetailImageConfig";
import styles from "../../../styles/components/Showcase.module.css";

export default function DetailSlide({
	image,
	name,
	className = "",
	...otherProps
}: DetailSlideProps) {
	const classes = [
		styles["showcase__slide"],
		"glide__slide",
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");
	const imgSources = useDetailImageConfig(image.path);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{!!image.path && (
				<picture>
					{imgSources?.sources.map((src, index) => {
						return (
							<source
								key={`${name}-source-${index}`}
								srcSet={src.url}
								media={`(min-width: ${src.minScreenWidth}px)`}
							/>
						);
					})}

					<img
						className={styles["showcase__image"]}
						src={imgSources?.mobile.url}
						alt={image.alt}
						width={image.width}
						height={image.height}
						loading="eager"
						fetchpriority="high"
					/>
				</picture>
			)}

			{!!image.source && image.source}
		</div>
	);
}
