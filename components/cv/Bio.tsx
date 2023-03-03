import { bio } from "../../data/cv-data";
import styles from "../../styles/components/Bio.module.css";

export default function Bio() {
	return (
		<section className={`section ${styles.bio}`}>
			<div
				className={`wrapper wrapper--wide ${styles["bio__row"]}`}
			>
				<div
					className={`fancy-image ${styles["bio__image"]} ${styles["bio__image--mobile"]}`}
					aria-hidden="true"
				>
					<img
						src={bio.img.mobileSource}
						alt=""
						width={640}
						height={640}
					/>
				</div>

				<div
					className={`content-box ${styles["bio__content"]}`}
				>
					<h2 className={`underline ${styles["bio__title"]}`}>
						{bio.title}
					</h2>

					{bio.content}
				</div>

				<div className={`fancy-image ${styles["bio__image"]}`}>
					<picture>
						{bio.img.sources.map((src, index) => {
							return (
								<source
									key={`bio-img-source-${index}`}
									srcSet={src.url}
									media={`(min-width: ${src.minScreenWidth}px)`}
								/>
							);
						})}

						<img
							src={
								bio.img.sources[
									bio.img.sources.length - 1
								].url
							}
							alt={bio.img.alt}
							width={bio.img.width}
							height={bio.img.height}
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
