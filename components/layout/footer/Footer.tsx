import { FooterProps } from "../../../types/global-types";
import FooterIcons from "./FooterIcons";
import styles from "../../../styles/layout/Footer.module.css";

export default function Footer({
	className = "",
	...otherProps
}: FooterProps) {
	const classes = [styles.footer, ...className.trim().split(" ")]
		.filter((c) => c)
		.join(" ");

	return (
		<footer
			className={classes}
			{...otherProps}
		>
			<div className={styles["footer__inner"]}>
				<FooterIcons />

				<p className={styles["footer__copyright"]}>
					&copy; Copyright 2018-{new Date().getFullYear()}{" "}
					Kyle Jorve. All rights reserved.
					<br />
					Website designed and built by Kyle Jorve.
				</p>
			</div>
		</footer>
	);
}
