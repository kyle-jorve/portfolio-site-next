import { NavItemProps } from "../../../types/global-types";
import { useRouter } from "next/router";
import CustomLink from "../CustomLink";
import styles from "../../../styles/layout/Nav.module.css";

export default function NavItem({
	url,
	children,
	onClick = () => {},
	isMobileNav = false,
	className = "",
	...otherProps
}: NavItemProps) {
	const router = useRouter();
	const classes = [
		isMobileNav ? styles["mobile-nav__item"] : styles["nav__item"],
		router.pathname === url &&
			(isMobileNav
				? styles["mobile-nav__item--current"]
				: styles["nav__item--current"]),
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");

	return (
		<CustomLink
			className={classes}
			to={url}
			onClick={onClick}
			{...otherProps}
		>
			{children}
		</CustomLink>
	);
}
