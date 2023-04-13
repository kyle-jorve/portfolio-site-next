import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
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
	const router = useRouter();
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
			gap: 0,
			animationTimingFunc: "ease",
		};
		const slider = new Glide(glideRef.current!, sliderOptions);
		const slides = Array.from(
			document.querySelectorAll("[data-detail-slide]"),
		);
		const bullets = Array.from(
			document.querySelectorAll("[data-showcase-slider-dot]"),
		);

		slider.on("run.before", () => {
			slides[slider.index].classList.remove(
				styles["showcase__slide--active"],
			);

			if (bullets.length) {
				bullets[slider.index].classList.remove("slider-dot--active");
			}
		});

		slider.on("run", () => {
			slides[slider.index].classList.add(
				styles["showcase__slide--active"],
			);

			if (bullets.length) {
				bullets[slider.index].classList.add("slider-dot--active");
			}
		});

		slider.mount();

		return () => {
			slider.destroy();
		};
	}, [router.query.itemID, router.pathname]);

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
								className={
									index === 0
										? styles["showcase__slide--active"]
										: ""
								}
								key={`${galleryItem.name}-slide-${index}`}
								image={key}
								name={galleryItem.name}
							/>
						);
					})}
				</div>
			</div>

			{galleryItem.detailKeys.length > 1 && (
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
			)}
		</div>
	);
}
