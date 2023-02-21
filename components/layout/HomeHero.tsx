import { heroImage } from "../../data/home-data";
import CustomLink from "./link/CustomLink";
import styles from "../../styles/layout/Hero.module.css";

export default function HomeHero() {
	function scrollIconClickHandler() {
		const featuredWorkSection = document.querySelector("#featured-work");

		if (!featuredWorkSection) return;

		featuredWorkSection.scrollIntoView({
			behavior: "smooth",
		});
	}

	return (
		<section className={styles.hero}>
			<div className={styles['hero__inner']}>
				<div className={styles['hero__content-col']}>
					<h1 className={styles["hero__title"]}>
						<span className={styles["hero__title-1"]}>Kyle Jorve</span>
						<small className={styles["hero__title-2"]}>Illustration & Design</small>
					</h1>

					<CustomLink className="button button--primary button--large button--arrow" to="/gallery/"></CustomLink>
				</div>

				<div className={styles['hero__img-col']}>
					<picture>
						{
							heroImage.sources.map((src, index) => {
								return (
									<source
										key={`hero-image-source-${index}`}
										srcSet={src.url}
										media={`(min-width: ${src.minScreenWidth}px)`}
									/>
								);
							})
						}

						<img
							className={styles['hero__img']}
							src={heroImage.mobileSource}
							alt={heroImage.alt}
							width={heroImage.width}
							height={heroImage.height}
						/>
					</picture>
				</div>
			</div>

			<button
				className={styles["scroll"]}
				aria-label="scroll to Featured Work"
				onClick={scrollIconClickHandler}
			>
				<span className={styles["scroll__track"]}>
					<span className={styles["scroll__ball"]}></span>
				</span>
			</button>
		</section>
	);
}
