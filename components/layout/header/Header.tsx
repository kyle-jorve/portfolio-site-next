import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../../context/global";
import Logo from "./Logo";
import styles from "../../../styles/layout/Header.module.css";
import HeaderNavigation from "../navigation/HeaderNavigation";

export default function Header() {
	const router = useRouter();
	const isHomePage = router.pathname === "/";
	const classesArr = [
		styles.header,
		isHomePage && styles["header--home"],
		isHomePage && styles["header--hidden"],
	].filter((c) => c);
	const [classes, setClasses] = useState(classesArr);
	const siteContext = useContext(SiteContext);

	useEffect(() => {
		if (siteContext.loadStatus === "done" || siteContext.visited || window.scrollY >= 10) {
			setClasses((prev) => {
				let prevClasses = prev.slice();

				if (!isHomePage) return prevClasses;

				prevClasses = [styles.header, styles["header--home"]];

				return prevClasses;
			});
		}
	}, [siteContext.loadStatus, siteContext.visited, isHomePage]);

	return (
		<header className={classes.join(" ")}>
			<Logo />
			<HeaderNavigation />
		</header>
	);
}
