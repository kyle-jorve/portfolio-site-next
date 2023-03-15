import { NeighborProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/useThumbnailConfig";
import CustomLink from "../../layout/link/CustomLink";
import styles from "../../../styles/components/Showcase.module.css";

export default function Neighbor({
	name,
	title,
	thumb,
	direction,
	className = "",
	...otherProps
}: NeighborProps) {
	const classes = [
		styles.neighbor,
		direction === "prev"
			? styles["neighbor--prev"]
			: styles["neighbor--next"],
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");
	const imgSources = useThumbnailConfig({
		thumbKey: thumb.path,
		isDetail: true,
	});

	function truncateTitle(title: string) {
		const titleArr = title.split(" ");
		const maxLength = 22;
		let truncTitle = "";

		for (let i = 0; i < titleArr.length; i++) {
			const word = titleArr[i];
			const isLastWord = i === titleArr.length - 1;

			if (truncTitle.length + word.length <= maxLength) {
				truncTitle += `${word}${isLastWord ? "" : " "}`;
			} else {
				truncTitle = truncTitle.trim();

				if (truncTitle.length < title.length) {
					truncTitle += "...";
				}

				break;
			}
		}

		return truncTitle;
	}

	return (
		<article
			className={classes}
			{...otherProps}
		>
			<CustomLink to={`/gallery/${name}`}>
				<span
					className={`arrow-button arrow-button--${direction} arrow-button--white-border`}
					aria-hidden="true"
				></span>

				<h2 className={styles["neighbor__title"]}>
					<span className={styles["neighbor__light-title"]}>
						{direction}
					</span>
					{truncateTitle(title)}
				</h2>

				<img
					className={styles["neighbor__image"]}
					src={imgSources.mobile.url}
					alt={thumb.alt}
					style={
						thumb.orientation
							? {
									objectPosition: `center ${thumb.orientation}`,
							  }
							: undefined
					}
				/>
			</CustomLink>
		</article>
	);
}
