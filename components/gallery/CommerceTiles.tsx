import { CommerceTilesProps } from "../../types/gallery-types";
import { socialIcons } from "../../data/global-data";
import CustomLink from "../layout/link/CustomLink";
import styles from "../../styles/components/CommerceTiles.module.css";

export default function CommerceTiles({
	className = "",
	...otherProps
}: CommerceTilesProps) {
	const classes = [styles["tiles"], ...className.trim().split(" ")]
		.filter((c) => c)
		.join(" ");
	const tiles = socialIcons.filter(
		(icon) => icon.type === "commerce",
	);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<div className={styles["tiles__inner"]}>
				{tiles.map((tile) => {
					return (
						<CustomLink
							key={tile.name}
							className={`${styles["tile"]} ${
								styles[`tile--${tile.name}`]
							}`}
							to={tile.url}
						>
							{!!tile.icon && tile.icon}

							<span className={styles["tile__title"]}>
								{tile.label}
							</span>
						</CustomLink>
					);
				})}
			</div>
		</div>
	);
}
