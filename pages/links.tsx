import { Fragment, useContext, useEffect } from "react";
import Head from "next/head";
import SiteContext from "../context/global";
import { SocialMediaType } from "../types/global-types";
import { socialMedia } from "../data/global-data";
import CustomLink from "../components/layout/CustomLink";
import styles from "../styles/components/Links.module.css";

export default function Links() {
	const siteContext = useContext(SiteContext);
	const socialLinks = Object.entries(socialMedia).filter(
		([_, value]) => value.type === "standard",
	);
	const commerceLinks = Object.entries(socialMedia).filter(
		([_, value]) => value.type === "commerce",
	);

	function printLink(key: string, value: SocialMediaType) {
		const classes = [
			styles["links__link"],
			styles[`links__link--${key}`],
			"button",
			"button--primary",
		]
			.filter((c) => c)
			.join(" ");

		return (
			<li
				key={key}
				className={styles["links__list-item"]}
			>
				<CustomLink
					key={key}
					className={classes}
					to={value.url}
					target="_blank"
				>
					{value.icon}
					{value.label}
				</CustomLink>
			</li>
		);
	}

	useEffect(() => {
		siteContext.setHideNavigationElements(true);
	}, []);

	return (
		<>
			<Head>
				<title key="title">
					Links | Kyle Jorve | Illustration and Design
				</title>
			</Head>

			<section className={`swoops swoops--left ${styles.links}`}>
				<div className={styles["links__content"]}>
					<header className={styles["links__header"]}>
						<img
							className={styles["links__logo"]}
							src="/images/icons-logos/logo-circle.svg"
							alt="The Art of Kyle Jorve logo"
							loading="lazy"
						/>
						<h1 className={styles["links__title"]}>Links</h1>
					</header>

					<h2 className={styles["links__heading"]}>Shop</h2>
					<ul className={styles["links__list"]}>
						{commerceLinks.map(([key, value]) => {
							return printLink(key, value);
						})}
					</ul>

					<h2 className={styles["links__heading"]}>Explore</h2>
					<ul className={styles["links__list"]}>
						{printLink("website", {
							url: "https://kylejorve.com/",
							type: "standard",
							label: "Website",
						})}
						{socialLinks.map(([key, value]) => {
							return printLink(key, value);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}
