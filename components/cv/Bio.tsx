import { useRef, useEffect } from "react";
import { detectIntersection } from "../../utils/utils";
import { bio } from "../../data/cv-data";
import { BioProps } from "../../types/cv-types";
import CustomLink from "../layout/CustomLink";
import styles from "../../styles/components/Bio.module.css";

export default function Bio({
	useH1 = false,
	showButton = true,
	className = "",
	...otherProps
}: BioProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const classes = [
		...className.trim().split(" "),
		"section",
		"hide-until-intersected",
		"swoops",
		"swoops--left",
		styles.bio,
	]
		.filter((c) => c?.length)
		.join(" ");
	const Heading = (useH1 ? "h1" : "h2") as React.ElementType;

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
			ref={sectionRef}
			{...otherProps}
		>
			<div className={`wrapper wrapper--wide ${styles["bio__row"]}`}>
				<div
					className={`fancy-image ${styles["bio__image"]} ${styles["bio__image--mobile"]}`}
					aria-hidden="true"
				>
					<img
						src={bio.img.mobileSource}
						alt=""
						width={640}
						height={640}
						loading="lazy"
					/>
				</div>

				<div className={`content-box ${styles["bio__content"]}`}>
					<Heading className="underline small">{bio.title}</Heading>

					{bio.content}

					{showButton && (
						<div className={styles["bio__button-row"]}>
							<CustomLink
								className="button button--primary button--arrow"
								to="/cv#resume"
							>
								See R&eacute;sum&eacute;
							</CustomLink>
						</div>
					)}
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
								bio.img.sources[bio.img.sources.length - 1].url
							}
							alt={bio.img.alt}
							width={bio.img.width}
							height={bio.img.height}
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
