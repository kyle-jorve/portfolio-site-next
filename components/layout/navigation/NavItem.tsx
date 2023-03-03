import { NavItemProps } from "../../../types/global-types";
import { useRouter } from "next/router";
import CustomLink from "../link/CustomLink";
import styles from "../../../styles/layout/Nav.module.css";

export default function NavItem(props: NavItemProps) {
	const router = useRouter();
	const onClick = props.onClick || (() => {});
	const linkIsExternal = props.url.includes("http");
	const classes = [
		props.isMobileNav
			? styles["mobile-nav__item"]
			: styles["nav__item"],
		router.pathname === props.url &&
			(props.isMobileNav
				? styles["mobile-nav__item--current"]
				: styles["nav__item--current"]),
		props.className,
	]
		.filter((c) => c)
		.join(" ");

	if (linkIsExternal) {
		return (
			<a
				className={classes}
				href={props.url}
				target="_blank"
				rel="noreferrer"
				onClick={onClick}
				{...props.attributes}
			>
				{props.children}
			</a>
		);
	}

	return (
		<CustomLink
			className={classes}
			to={props.url}
			onClick={onClick}
			{...props.attributes}
		>
			{props.children}
		</CustomLink>
	);
}
