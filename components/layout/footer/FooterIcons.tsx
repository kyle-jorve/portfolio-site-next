import { FooterIconProps } from "../../../types/global-types";
import { socialMedia } from "../../../data/global-data";
import { SocialMediaType } from "../../../types/global-types";
import CustomLink from "../CustomLink";
import styles from "../../../styles/layout/Social.module.css";

export default function FooterIcons({
	className = "",
	...otherProps
}: FooterIconProps) {
	function printIcon(icon: SocialMediaType) {
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
				{socialMedia
					.filter((soc) => soc.type === "standard")
					.map((soc) => {
						return printIcon(soc);
					})}
			</div>

			<div className={styles["social__icons"]}>
				{socialMedia
					.filter((soc) => soc.type === "commerce")
					.map((soc) => {
						return printIcon(soc);
					})}
			</div>
		</div>
	);
}
