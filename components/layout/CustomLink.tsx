import { useContext } from "react";
import { CustomLinkProps } from "../../types/global-types";
import { transitions } from "../../data/global-data";
import { useRouter } from "next/router";
import Link from "next/link";
import SiteContext from "../../context/global";

export default function CustomLink({
	to,
	children,
	onClick = () => {},
	className = "",
	tabIndex = undefined,
	target = "_self",
	...otherProps
}: CustomLinkProps) {
	const router = useRouter();
	const siteContext = useContext(SiteContext);
	const classes = className.trim().split(" ").join(" ");
	const linkIsExternal =
		to.includes("http") || target !== "_self" || !!otherProps.download;

	function pageTransition(event: React.MouseEvent) {
		const target = event.currentTarget as HTMLAnchorElement;
		const url = new URL(target.href);

		if (url.pathname === router.pathname) return;

		event.preventDefault();

		siteContext.setLoadStatus("page-out");

		setTimeout(() => {
			router.push(target.href);
		}, transitions.short);

		onClick(event);
	}

	return linkIsExternal ? (
		<a
			className={classes}
			href={to}
			tabIndex={siteContext.lightboxStatus === "open" ? -1 : undefined}
			rel="noreferrer"
			target="_blank"
			{...otherProps}
		>
			{children}
		</a>
	) : (
		<Link
			className={classes}
			href={to}
			tabIndex={siteContext.lightboxStatus === "open" ? -1 : undefined}
			rel={linkIsExternal ? "noreferrer" : undefined}
			target={linkIsExternal ? "_blank" : undefined}
			onClick={pageTransition}
			{...otherProps}
		>
			{children}
		</Link>
	);
}
