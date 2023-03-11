import { LogoProps } from "../../../types/global-types";
import CustomLink from "../link/CustomLink";
import styles from "../../../styles/layout/Header.module.css";

export default function Logo({
	className = "",
	...otherProps
}: LogoProps) {
	const classes = [
		...className.trim().split(" "),
		styles["header__logo-cont"],
	]
		.filter((c) => c?.length)
		.join(" ");

	return (
		<CustomLink
			className={classes}
			to="/"
			aria-label="go to home page"
			{...otherProps}
		>
			<img
				className={styles["header__logo"]}
				src="/images/icons-logos/logo-circle.svg"
				alt="The Art of Kyle Jorve logo"
				loading="eager"
			/>
		</CustomLink>
	);
}
