import { useEffect, useRef, useState } from "react";
import { FeaturedWorkProps } from "../../../types/gallery-types";
import { detectIntersection } from "../../../utils/utils";
import { items as galleryItems } from "../../../data/gallery-data";
import { slideshowLimit } from "../../../data/home-data";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import FeaturedItem from "./FeaturedItem";
import CustomLink from "../../layout/CustomLink";
import Button from "../../layout/Button";
import "swiper/css";
import styles from "../../../styles/components/FeaturedWork.module.css";

export default function FeaturedWork({
	className = "",
	id = "featured-work",
	...otherProps
}: FeaturedWorkProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const sliderRef = useRef<SwiperType>();
	const [activeIndex, setActiveIndex] = useState(0);
	const featuredItems = galleryItems
		.filter((item) => item.featured)
		.slice(0, slideshowLimit);
	const classes = [
		...className.trim().split(" "),
		"section",
		"hide-until-intersected",
		"swoops",
		"swoops--right",
		styles.featured,
	]
		.filter((c) => c?.length)
		.join(" ");

	useEffect(() => {
		const section = sectionRef.current as HTMLElement;
		const io = detectIntersection(section);

		return () => {
			io.disconnect();
		};
	}, []);

	return (
		<section
			className={classes}
			id={id}
			ref={sectionRef}
			{...otherProps}
		>
			<div className={styles["featured__inner"]}>
				<h2
					className={`${styles["featured__title"]} underline underline--center`}
				>
					Featured Work
				</h2>

				<div className={styles["featured__slider"]}>
					<div className={styles["featured__arrows"]}>
						<Button
							className={`${styles["featured__arrow"]} arrow-button arrow-button--left`}
							aria-label="move slideshow left"
							onClick={() => sliderRef.current?.slidePrev()}
						></Button>

						<Button
							className={`${styles["featured__arrow"]} arrow-button arrow-button--right`}
							aria-label="move slideshow right"
							onClick={() => sliderRef.current?.slideNext()}
						></Button>
					</div>

					<Swiper
						slidesPerView={4.66}
						centeredSlides={false}
						spaceBetween={24}
						rewind={true}
						slideActiveClass={styles["featured__slide--active"]}
						wrapperClass={styles["featured__track"]}
						modules={[A11y]}
						onBeforeInit={(swiper) => (sliderRef.current = swiper)}
						onActiveIndexChange={(swiper) =>
							setActiveIndex(swiper.realIndex)
						}
						breakpoints={{
							640: {
								slidesPerView: 2.66,
								centeredSlides: true,
							},
							1024: {
								slidesPerView: 3.66,
								spaceBetween: 24,
								centeredSlides: false,
							},
							1440: {
								slidesPerView: 3.66,
								spaceBetween: 24,
								centeredSlides: false,
							},
							2176: {
								slidesPerView: 4.66,
								spaceBetween: 24,
								centeredSlides: false,
							},
						}}
					>
						{featuredItems.map((item) => {
							return (
								<SwiperSlide
									key={item.name}
									className={styles["featured__slide"]}
								>
									<FeaturedItem
										name={item.name}
										title={item.title}
										year={item.year}
										thumb={item.thumb}
										isNew={
											galleryItems.findIndex(
												(gi) => gi.name === item.name,
											) === 0
										}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>

					<div
						className={`${styles["featured__bullets"]} slider-dots`}
					>
						{featuredItems.map((item, index) => {
							return (
								<Button
									key={item.name}
									className={`slider-dot${
										index === activeIndex
											? ` slider-dot--active`
											: ""
									}`}
									aria-label={`go to slide ${index + 1}`}
									onClick={() => {
										sliderRef.current?.slideTo(index);
										setActiveIndex(index);
									}}
								></Button>
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
