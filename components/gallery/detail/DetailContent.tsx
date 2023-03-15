import { DetailContentProps } from "../../../types/gallery-types";
import CustomLink from "../../layout/link/CustomLink";
import styles from "../../../styles/components/Showcase.module.css";

export default function DetailContent({
	title,
	content,
	year,
	purchaseLink = undefined,
	downloadLink = undefined,
	className = "",
	...otherProps
}: DetailContentProps) {
	const classes = [
		"content-box",
		styles["showcase__content"],
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<h1 className={`underline small ${styles["showcase__title"]}`}>
				{title}
				<small>{year}</small>
			</h1>

			{content}

			{(!!purchaseLink || !!downloadLink) && (
				<div className={`button-row ${styles["showcase__button-row"]}`}>
					{!!purchaseLink && (
						<CustomLink
							className="button button--primary button--shop"
							to={purchaseLink}
						>
							Buy Print
						</CustomLink>
					)}

					{!!downloadLink && (
						<CustomLink
							className="button button--primary button--save"
							to={downloadLink}
						>
							Buy Digital
						</CustomLink>
					)}
				</div>
			)}
		</div>
	);
}
