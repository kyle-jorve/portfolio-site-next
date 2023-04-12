import { useContext, useEffect } from "react";
import SiteContext from "../context/global";
import CustomLink from "../components/layout/CustomLink";
import styles from "../styles/layout/Hero.module.css";

export default function Custom404() {
	const siteContext = useContext(SiteContext);

	return (
		<section
			className={`section ${styles.hero} ${styles["hero--content"]}`}
		>
			<div
				className={`wrapper wrapper--content ${styles["hero__content"]}`}
			>
				<h1
					className={`underline underline--center ${styles["hero__title"]}`}
				>
					Page Not Found
				</h1>

				<p className="large-text">
					I&apos;m not sure how you ended up here, but click{" "}
					<CustomLink to="/">here</CustomLink> to return to safe
					ground.
				</p>
			</div>
		</section>
	);
}
