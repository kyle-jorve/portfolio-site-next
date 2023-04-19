import { useContext } from "react";
import SiteContext from "../../../context/global";
import Logo from "./Logo";
import { HeaderProps } from "../../../types/global-types";
import HeaderNavigation from "../navigation/HeaderNavigation";
import styles from "../../../styles/layout/Header.module.css";

export default function Header({ className = "", ...otherProps }: HeaderProps) {
	const context = useContext(SiteContext);
	const classes = [
		styles.header,
		context.visited && styles["header--show"],
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");

	return (
		<header
			className={classes}
			{...otherProps}
		>
			<div className={styles["header__inner"]}>
				<Logo />
				<HeaderNavigation />
			</div>
		</header>
	);
}
