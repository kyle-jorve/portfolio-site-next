import CustomLink from "../link/CustomLink";
import styles from "../../../styles/layout/Header.module.css";

export default function Logo() {
	return (
		<CustomLink className={styles["header__logo-cont"]} to="/" aria-label="go to home page">
			<img
				className={styles["header__logo"]}
				src="/images/icons-logos/logo-circle.svg"
				alt="The Art of Kyle Jorve logo"
				loading="eager"
			/>
		</CustomLink>
	);
}
