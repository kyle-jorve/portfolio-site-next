import { useEffect, useRef } from "react";
import { FeaturedWorkProps } from "../../../types/gallery-types";
import { items as galleryItems } from "../../../data/gallery-data";
import { slideshowLimit } from "../../../data/home-data";
import Glide from "@glidejs/glide";
import FeaturedItem from "./FeaturedItem";
import CustomLink from "../../layout/link/CustomLink";
import "@glidejs/glide/dist/css/glide.core.min.css";
import styles from "../../../styles/components/FeaturedWork.module.css";

export default function FeaturedWork({
	className = "",
	id = "featured-work",
	...otherProps
}: FeaturedWorkProps) {
	const glideRef = useRef<HTMLDivElement>(null);
	const featuredItems = galleryItems
		.filter((item) => item.featured)
		.slice(0, slideshowLimit);
	const classes = [
		...className.trim().split(" "),
		"section",
		"swoops",
		"swoops--left",
		styles.featured,
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		const sliderOptions: Partial<Glide.Options> = {
			perView: 4,
			gap: 24,
			peek: {
				before: 200,
				after: 310,
			},
			animationTimingFunc: "ease",
			breakpoints: {
				2175: {
					perView: 3,
					gap: 24,
					peek: {
						before: 200,
						after: 310,
					},
				},
				1439: {
					perView: 3,
					gap: 24,
					peek: {
						before: 40,
						after: 60,
					},
				},
				1023: {
					perView: 2,
					gap: 0,
					peek: 60,
				},
				639: {
					perView: 1,
					gap: 0,
					peek: 44,
				},
			},
		};
		const slider = new Glide(glideRef.current!, sliderOptions);
		const slides = Array.from(
			document.querySelectorAll("[data-featured-slide]"),
		);
		const bullets = Array.from(
			document.querySelectorAll("[data-featured-slider-dot]"),
		);

		slider.on("run.before", () => {
			slides[slider.index].classList.remove(
				styles["featured__slide--active"],
			);

			bullets[slider.index].classList.remove(
				"slider-dot--active",
			);
		});

		slider.on("run", () => {
			slides[slider.index].classList.add(
				styles["featured__slide--active"],
			);

			bullets[slider.index].classList.add("slider-dot--active");
		});

		slider.mount();
	}, []);

	return (
		<section
			className={classes}
			id={id}
			{...otherProps}
		>
			<div className={styles["featured__inner"]}>
				<h2
					className={`${styles["featured__title"]} underline underline--center`}
				>
					Featured Work
				</h2>

				<div
					className={`glide ${styles["featured__slider"]}`}
					ref={glideRef}
				>
					<div
						className={`glide__arrows ${styles["featured__arrows"]}`}
						data-glide-el="controls"
					>
						<button
							className={`${styles["featured__arrow"]} glide__arrow glide__arrow--left arrow-button arrow-button--left`}
							aria-label="move slideshow left"
							data-glide-dir="<"
						></button>

						<button
							className={`${styles["featured__arrow"]} glide__arrow glide__arrow--left arrow-button arrow-button--right`}
							data-glide-dir=">"
							aria-label="move slideshow right"
						></button>
					</div>

					<div
						className={`${styles["featured__track"]} glide__track`}
						data-glide-el="track"
					>
						<div
							className={`${styles["featured__slides"]} glide__slides`}
						>
							{featuredItems.map((item, index) => {
								return (
									<FeaturedItem
										className={
											index === 0
												? styles[
														"featured__slide--active"
												  ]
												: undefined
										}
										key={item.name}
										name={item.name}
										title={item.title}
										year={item.year}
										thumb={item.thumb}
										isNew={
											galleryItems.findIndex(
												(gi) =>
													gi.name ===
													item.name,
											) === 0
										}
									/>
								);
							})}
						</div>
					</div>

					<div
						className={`${styles["featured__bullets"]} slider-dots glide__bullets`}
						data-glide-el="controls[nav]"
					>
						{featuredItems.map((item, index) => {
							return (
								<button
									key={item.name}
									data-featured-slider-dot
									className={`slider-dot${
										index === 0
											? ` slider-dot--active`
											: ""
									} glide__bullet`}
									aria-label={`go to slide ${
										index + 1
									}`}
									data-glide-dir={`=${index}`}
								></button>
							);
						})}
					</div>
				</div>

				<div className={styles["featured__button-row"]}>
					<CustomLink
						to="/gallery/"
						className="button button--primary button--arrow"
					>
						View Gallery
					</CustomLink>
				</div>
			</div>
		</section>
	);
}
