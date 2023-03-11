import { FooterIconProps } from "../../../types/global-types";
import { socialIcons } from "../../../data/global-data";
import { SocialIconType } from "../../../types/global-types";
import CustomLink from "../link/CustomLink";
import styles from "../../../styles/layout/Social.module.css";

export default function FooterIcons({
	className = "",
	...otherProps
}: FooterIconProps) {
	function printIcon(icon: SocialIconType) {
		const classes = [
			styles["social__icon"],
			styles[`social__icon--${icon.name}`],
			styles[`social__icon--${icon.type}`],
			...className.trim().split(" "),
		]
			.filter((c) => c?.length)
			.join(" ");

		return (
			<CustomLink
				key={icon.name}
				className={classes}
				to={icon.url}
				target="_blank"
				rel="noreferrer"
				aria-label={`link to Kyle's ${icon.label}`}
			>
				{icon.icon}
			</CustomLink>
		);
	}

	return (
		<div
			className={styles.social}
			{...otherProps}
		>
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
