import Logo from "./Logo";
import { HeaderProps } from "../../../types/global-types";
import HeaderNavigation from "../navigation/HeaderNavigation";
import styles from "../../../styles/layout/Header.module.css";

export default function Header({
	className = "",
	...otherProps
}: HeaderProps) {
	const classes = [...className.trim().split(" "), styles.header]
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
