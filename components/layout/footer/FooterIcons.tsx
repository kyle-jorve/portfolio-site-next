import { socialIcons } from "../../../data/global-data";
import { SocialIconType } from "../../../types/global-types";
import styles from "../../../styles/layout/Social.module.css";

export default function FooterIcons() {
	function printIcon(icon: SocialIconType) {
		const classes = [
			styles["social__icon"],
			styles[`social__icon--${icon.name}`],
			styles[`social__icon--${icon.type}`],
		]
			.filter((c) => c)
			.join(" ");

		return (
			<a
				key={icon.name}
				className={classes}
				href={icon.url}
				target="_blank"
				rel="noreferrer"
				aria-label={`link to Kyle's ${icon.label}`}
			>
				{icon.icon}
			</a>
		);
	}

	return (
		<div className={styles.social}>
			<div className={styles["social__icons"]}>
				{socialIcons
					.filter((icon) => icon.type === "standard")
					.map((icon) => {
						return printIcon(icon);
					})}
			</div>

			<div className={styles["social__icons"]}>
				{socialIcons
					.filter((icon) => icon.type === "commerce")
					.map((icon) => {
						return printIcon(icon);
					})}
			</div>
		</div>
	);
}
