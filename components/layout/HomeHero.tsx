import { HomeHeroProps } from "../../types/global-types";
import { heroImage } from "../../data/home-data";
import CustomLink from "./link/CustomLink";
import Button from "./Button";
import styles from "../../styles/layout/Hero.module.css";

export default function HomeHero({
	className = "",
	...otherProps
}: HomeHeroProps) {
	const classes = [
		...className.trim().split(" "),
		"section",
		styles.hero,
	]
		.filter((c) => c)
		.join(" ");

	function scrollIconClickHandler() {
		const featuredWorkSection =
			document.querySelector("#featured-work");

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
				<div className={styles["hero__content-col"]}>
					<h1 className={styles["hero__title"]}>
						<span className={styles["hero__title-1"]}>
							Kyle
							<br />
							Jorve
						</span>
						<small className={styles["hero__title-2"]}>
							<span
								className={
									styles["hero__title-2-inner"]
								}
							>
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

				<div className={styles["hero__img-col"]}>
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
