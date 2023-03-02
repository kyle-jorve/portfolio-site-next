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
			type: "carousel",
			perView: 3,
			gap: 24,
			animationTimingFunc: "ease",
			peek: 254,
			breakpoints: {
				1023: {
					perView: 2,
					gap: 20,
					peek: 100,
				},
				639: {
					perView: 1,
					gap: 20,
					peek: 44,
				},
			},
		};
		const slider = new Glide(glideRef.current!, sliderOptions);

		slider.mount();
	}, []);

	return (
		<section
			className={`section ${styles.featured}`}
			id="featured-work"
		>
			<h2 className={`underline ${styles["featured__title"]}`}>
				Featured Work
			</h2>

			<div
				className={`glide ${styles["featured__slider-cont"]}`}
				ref={glideRef}
			>
				<div
					className={`glide__arrows ${styles["featured__arrows"]}`}
					data-glide-el="controls"
				>
					<button
						className="glide__arrow glide__arrow--left arrow-button arrow-button--left"
						aria-label="move slideshow left"
						data-glide-dir="<"
					></button>

					<button
						className="glide__arrow glide__arrow--left arrow-button arrow-button--right"
						data-glide-dir=">"
						aria-label="move slideshow right"
					></button>
				</div>

				<div
					className="glide__track"
					data-glide-el="track"
				>
					<div
						className={`glide__slides ${styles["featured__slider"]}`}
					>
						{featuredItems.map((item) => {
							return (
								<FeaturedItem
									key={item.name}
									name={item.name}
									title={item.title}
									year={item.year}
									thumbKey={item.thumbnailKey.path}
									alt={item.thumbnailKey.alt}
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
