import FooterIcons from "./FooterIcons";
import styles from "../../../styles/layout/Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
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
