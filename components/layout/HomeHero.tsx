import { useRef, useEffect, useContext } from "react";
import SiteContext from "../../context/global";
import { HomeHeroProps } from "../../types/global-types";
import { heroImage } from "../../data/home-data";
import CustomLink from "./CustomLink";
import Button from "./Button";
import styles from "../../styles/layout/Hero.module.css";

export default function HomeHero({
	className = "",
	...otherProps
}: HomeHeroProps) {
	const context = useContext(SiteContext);
	const contentRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const classes = [...className.trim().split(" "), "section", styles.hero]
		.filter((c) => c?.length)
		.join(" ");

	useEffect(() => {
		function scrollHandler() {
			const content = contentRef.current as HTMLDivElement;
			const image = imageRef.current as HTMLDivElement;
			const contentOffset = {
				top: content.getBoundingClientRect().top,
				bottom: content.getBoundingClientRect().bottom,
				height: content.offsetHeight,
			};
			const imageOffset = {
				top: image.getBoundingClientRect().top,
				bottom: image.getBoundingClientRect().bottom,
				height: image.offsetHeight,
			};

			if (contentOffset.bottom <= 0 && imageOffset.bottom <= 0) return;

			if (context.mobile) {
				[content, image].forEach((el) => (el.style.transform = ""));
				return;
			}

			content.style.transform = `translateY(${window.scrollY * 0.2}px)`;
			image.style.transform = `translateY(${window.scrollY * 0.125}px)`;
		}

		["resize", "orientationchange"].forEach((ev) =>
			window.addEventListener(ev, scrollHandler),
		);
		window.addEventListener("scroll", scrollHandler);

		return () => {
			["resize", "orientationchange"].forEach((ev) =>
				window.removeEventListener(ev, scrollHandler),
			);
			window.removeEventListener("scroll", scrollHandler);
		};
	}, [context.mobile]);

	function scrollIconClickHandler() {
		const featuredWorkSection = document.querySelector("#featured-work");

		if (!featuredWorkSection) return;

		featuredWorkSection.scrollIntoView({
			behavior: "smooth",
		});
	}

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<div className={styles["hero__inner"]}>
				<div
					className={styles["hero__content-col"]}
					ref={contentRef}
				>
					<h1 className={styles["hero__title"]}>
						<span className={styles["hero__title-1"]}>
							Kyle
							<br />
							Jorve
						</span>
						<small className={styles["hero__title-2"]}>
							<span className={styles["hero__title-2-inner"]}>
								Illustration
								<br />& Design
							</span>
						</small>
					</h1>

					<CustomLink
						className="button button--primary button--large button--arrow"
						to="/gallery/"
					>
						View Gallery
					</CustomLink>
				</div>

				<div
					className={styles["hero__img-col"]}
					ref={imageRef}
				>
					<picture>
						{heroImage.sources.map((src, index) => {
							return (
								<source
									key={`hero-image-source-${index}`}
									srcSet={src.url}
									media={`(min-width: ${src.minScreenWidth}px)`}
								/>
							);
						})}

						<img
							className={styles["hero__img"]}
							src={heroImage.mobileSource}
							alt={heroImage.alt}
							width={heroImage.width}
							height={heroImage.height}
						/>
					</picture>
				</div>
			</div>

			<Button
				className={styles.scroll}
				aria-label="scroll to Featured Work"
				onClick={scrollIconClickHandler}
			>
				<span className={styles["scroll__ball"]}></span>
			</Button>
		</section>
	);
}
