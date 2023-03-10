import { useContext } from "react";
// import { useRouter } from "next/router";
import { CustomLinkProps } from "../../../types/global-types";
import Link from "next/link";
import LinkTooltip from "./LinkTooltip";
import { items as galleryItems } from "../../../data/gallery-data";
import SiteContext from "../../../context/global";

export default function CustomLink({
	to,
	children,
	onClick = () => {},
	useTooltip = false,
	className = "",
	tabIndex = undefined,
	target = "_self",
	...otherProps
}: CustomLinkProps) {
	// const router = useRouter();
	const siteContext = useContext(SiteContext);
	const destinationIsDetailPage =
		to.includes("/gallery/") && to.length > 9;
	const itemID =
		destinationIsDetailPage &&
		to.split("/gallery/")[1].replace(/\//g, "");
	const galleryItem =
		destinationIsDetailPage &&
		galleryItems.find((item) => item.name === itemID);
	const hasTooltip =
		destinationIsDetailPage && !!galleryItem && !!useTooltip;
	const classes = [
		hasTooltip && "has-tooltip",
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");
	const linkIsExternal = to.includes("http") || target !== "_self";

	// function linkClickHandler(event: React.MouseEvent) {
	// 	if (siteContext.mobile) {
	// 		onClick(event);

	// 		return;
	// 	}

	// 	event.preventDefault();

	// 	onClick(event);

	// 	siteContext.toggleLoader();

	// 	setTimeout(() => {
	// 		router.push(to);
	// 	}, siteContext.longTransitionDuration);
	// }

	return linkIsExternal ? (
		<a
			className={classes}
			href={to}
			tabIndex={
				siteContext.lightboxStatus === "open" ? -1 : undefined
			}
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
			// onClick={linkClickHandler}
			tabIndex={
				siteContext.lightboxStatus === "open" ? -1 : undefined
			}
			rel={linkIsExternal ? "noreferrer" : undefined}
			target={linkIsExternal ? "_blank" : undefined}
			{...otherProps}
		>
			{children}
			{hasTooltip && <LinkTooltip galleryItem={galleryItem} />}
		</Link>
	);
}
