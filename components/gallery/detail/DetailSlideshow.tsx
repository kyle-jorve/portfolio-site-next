import { useRef } from "react";
import { DetailSlideshowProps } from "../../../types/gallery-types";
import Button from "../../layout/Button";
import DetailSlide from "./DetailSlide";
import styles from "../../../styles/components/Showcase.module.css";

export default function DetailSlideshow({
	galleryItem,
	className = "",
	...otherProps
}: DetailSlideshowProps) {
	const classes = [styles["showcase__slider"], ...className.trim().split(" ")]
		.filter((c) => c)
		.join(" ");

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{galleryItem.detailKeys.length > 1 && (
				<div className={`${styles["showcase__arrows"]}`}>
					<Button
						className={`${styles["showcase__arrow"]} arrow-button arrow-button--left`}
						aria-label="move slideshow left"
					></Button>

					<Button
						className={`${styles["showcase__arrow"]} arrow-button arrow-button--right`}
						aria-label="move slideshow right"
					></Button>
				</div>
			)}

			<div
				className={`${styles["showcase__track"]}`}
				data-glide-el="track"
			>
				<div className={`${styles["showcase__slides"]}`}>
					{galleryItem.detailKeys.map((key, index) => {
						return (
							<DetailSlide
								key={`${galleryItem.name}-slide-${index}`}
								image={key}
								name={galleryItem.name}
							/>
						);
					})}
				</div>
			</div>

			{galleryItem.detailKeys.length > 1 && (
				<div className={`${styles["showcase__bullets"]}`}>
					{galleryItem.detailKeys.map((_, index) => {
						return (
							<Button
								key={`${galleryItem.name}-bullet-${index}`}
								data-showcase-slider-dot
								className={`slider-dot${
									index === 0 ? " slider-dot--active" : ""
								}`}
								aria-label={`go to slide ${index + 1}`}
							></Button>
						);
					})}
				</div>
			)}
		</div>
	);
}
