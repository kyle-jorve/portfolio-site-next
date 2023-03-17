import { CommerceTilesProps } from "../../types/gallery-types";
import { socialMedia } from "../../data/global-data";
import CustomLink from "../layout/CustomLink";
import styles from "../../styles/components/CommerceTiles.module.css";

export default function CommerceTiles({
	className = "",
	...otherProps
}: CommerceTilesProps) {
	const classes = [styles["tiles"], ...className.trim().split(" ")]
		.filter((c) => c)
		.join(" ");
	const tiles = Object.entries(socialMedia).filter(
		([_, value]) => value.type === "commerce",
	);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<div className={styles["tiles__inner"]}>
				{tiles.map(([key, value]) => {
					return (
						<CustomLink
							key={key}
							className={`${styles["tile"]} ${
								styles[`tile--${key}`]
							}`}
							to={value.url}
						>
							{!!value.icon && value.icon}

							<span className={styles["tile__title"]}>
								{value.label}
							</span>
						</CustomLink>
					);
				})}
			</div>
		</div>
	);
}
