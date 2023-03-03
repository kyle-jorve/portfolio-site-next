import { useEffect, useRef } from "react";
import { items as galleryItems } from "../../../data/gallery-data";
import { slideshowLimit } from "../../../data/home-data";
import Glide from "@glidejs/glide";
import FeaturedItem from "./FeaturedItem";
import CustomLink from "../../layout/link/CustomLink";
import "@glidejs/glide/dist/css/glide.core.min.css";
import styles from "../../../styles/components/FeaturedWork.module.css";

export default function FeaturedWork() {
	const glideRef = useRef<HTMLDivElement>(null);
	const featuredItems = galleryItems
		.filter((item) => item.featured)
		.slice(0, slideshowLimit);

	useEffect(() => {
		const sliderOptions: Partial<Glide.Options> = {
			perView: 3,
			gap: 8,
			animationTimingFunc: "ease",
			peek: 254,
			breakpoints: {
				1023: {
					perView: 2,
					gap: 6,
					peek: 100,
				},
				639: {
					perView: 1,
					gap: 6,
					peek: 44,
				},
			},
		};
		const slider = new Glide(glideRef.current!, sliderOptions);
		const slides = Array.from(
			document.querySelectorAll("[data-featured-slide]"),
		);

		slider.on("run.before", () => {
			slides[slider.index].classList.remove(
				styles["featured__slide--active"],
			);
		});

		slider.on("run", () => {
			slides[slider.index].classList.add(
				styles["featured__slide--active"],
			);
		});

		slider.mount();
	}, []);

	return (
		<section
			className="section"
			id="featured-work"
		>
			<h2 className="underline underline--center">
				Featured Work
			</h2>

			<div
				className={`glide ${styles.featured}`}
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
									thumbKey={item.thumbnailKey.path}
									orientation={item.orientation}
									alt={item.thumbnailKey.alt}
									isNew={
										galleryItems.findIndex(
											(gi) =>
												gi.name === item.name,
										) === 0
									}
								/>
							);
						})}
					</div>
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
		</section>
	);
}
