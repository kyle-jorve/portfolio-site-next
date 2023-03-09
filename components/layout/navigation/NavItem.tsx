import { NavItemProps } from "../../../types/global-types";
import { useRouter } from "next/router";
import CustomLink from "../link/CustomLink";
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
	const linkIsExternal = url.includes("http");
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

	if (linkIsExternal) {
		return (
			<a
				className={classes}
				href={url}
				target="_blank"
				rel="noreferrer"
				onClick={onClick}
				{...otherProps}
			>
				{children}
			</a>
		);
	}

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
