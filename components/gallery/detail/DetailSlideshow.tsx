import { useRef, useEffect } from "react";
import { DetailSlideshowProps } from "../../../types/gallery-types";
import Button from "../../layout/Button";
import DetailSlide from "./DetailSlide";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import styles from "../../../styles/components/Showcase.module.css";

export default function DetailSlideshow({
	galleryItem,
	className = "",
	...otherProps
}: DetailSlideshowProps) {
	const glideRef = useRef<HTMLDivElement>(null);
	const classes = [
		"glide",
		styles["showcase__slider"],
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		const sliderOptions: Partial<Glide.Options> = {
			gap: 12,
			animationTimingFunc: "ease",
		};
		const slider = new Glide(glideRef.current!, sliderOptions);
		const bullets = Array.from(
			document.querySelectorAll("[data-showcase-slider-dot]"),
		);

		slider.on("run.before", () => {
			bullets[slider.index].classList.remove("slider-dot--active");
		});

		slider.on("run", () => {
			bullets[slider.index].classList.add("slider-dot--active");
		});

		slider.mount();

		return () => {
			slider.destroy();
		};
	}, []);

	return (
		<div
			className={classes}
			ref={glideRef}
			{...otherProps}
		>
			{galleryItem.detailKeys.length > 1 && (
				<div
					className={`glide__arrows ${styles["showcase__arrows"]}`}
					data-glide-el="controls"
				>
					<Button
						className={`${styles["showcase__arrow"]} glide__arrow glide__arrow--left arrow-button arrow-button--left`}
						aria-label="move slideshow left"
						data-glide-dir="<"
					></Button>

					<Button
						className={`${styles["showcase__arrow"]} glide__arrow glide__arrow--right arrow-button arrow-button--right`}
						aria-label="move slideshow right"
						data-glide-dir=">"
					></Button>
				</div>
			)}

			<div
				className={`${styles["showcase__track"]} glide__track`}
				data-glide-el="track"
			>
				<div className={`${styles["showcase__slides"]} glide__slides`}>
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

			<div
				className={`${styles["showcase__bullets"]} slider-dots glide__bullets`}
				data-glide-el="conrols[nav]"
			>
				{galleryItem.detailKeys.map((_, index) => {
					return (
						<Button
							key={`${galleryItem.name}-bullet-${index}`}
							data-showcase-slider-dot
							className={`slider-dot${
								index === 0 ? " slider-dot--active" : ""
							} glide_bullet`}
							aria-label={`go to slide ${index + 1}`}
							data-glide-dir={`=${index}`}
						></Button>
					);
				})}
			</div>
		</div>
	);
}
