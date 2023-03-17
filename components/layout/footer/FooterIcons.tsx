import { FooterIconProps } from "../../../types/global-types";
import { socialMedia } from "../../../data/global-data";
import { SocialMediaType } from "../../../types/global-types";
import CustomLink from "../CustomLink";
import styles from "../../../styles/layout/Social.module.css";

export default function FooterIcons({
	className = "",
	...otherProps
}: FooterIconProps) {
	function printIcon([key, value]: [string, SocialMediaType]) {
		const classes = [
			styles["social__icon"],
			styles[`social__icon--${key}`],
			styles[`social__icon--${value.type}`],
			...className.trim().split(" "),
		]
			.filter((c) => c?.length)
			.join(" ");

		return (
			<CustomLink
				key={key}
				className={classes}
				to={value.url}
				target="_blank"
				rel="noreferrer"
				aria-label={`link to Kyle's ${value.label}`}
			>
				{value.icon}
			</CustomLink>
		);
	}

	return (
		<div
			className={styles.social}
			{...otherProps}
		>
			<div className={styles["social__icons"]}>
				{Object.entries(socialMedia)
					.filter(([_, value]) => value.type === "standard")
					.map((entry) => printIcon(entry))}
			</div>

			<div className={styles["social__icons"]}>
				{Object.entries(socialMedia)
					.filter(([_, value]) => value.type === "commerce")
					.map((entry) => {
						return printIcon(entry);
					})}
			</div>
		</div>
	);
}
