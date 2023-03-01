import Logo from "./Logo";
import styles from "../../../styles/layout/Header.module.css";
import HeaderNavigation from "../navigation/HeaderNavigation";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles["header__inner"]}>
				<Logo />
				<HeaderNavigation />
			</div>
		</header>
	);
}
