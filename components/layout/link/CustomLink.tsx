import { useContext } from "react";
import { useRouter } from "next/router";
import { CustomLinkProps } from "../../../types/global-types";
import Link from "next/link";
import LinkTooltip from "./LinkTooltip";
import { items as galleryItems } from "../../../data/gallery-data";
import SiteContext from "../../../context/global";

export default function CustomLink(props: CustomLinkProps) {
	const onClick = props.onClick || (() => { });
	const router = useRouter();
	const siteContext = useContext(SiteContext);
	const destinationIsDetailPage = props.to.includes('/gallery/') && props.to.length > 9;
	const itemID = destinationIsDetailPage && props.to.split('/gallery/')[1].replace(/\//g, '');
	const galleryItem = destinationIsDetailPage && galleryItems.find(item => item.name === itemID);
	const hasTooltip = destinationIsDetailPage && !!galleryItem && !!props.useTooltip;
	const classes = [
		hasTooltip && 'has-tooltip',
		props.className,
	].filter(c => c).join(' ');

	function linkClickHandler(event: React.MouseEvent) {
		if (!siteContext.desktop) {
			onClick(event);

			return;
		}

		event.preventDefault();

		onClick(event);

		siteContext.toggleLoader();

		setTimeout(() => {
			router.push(props.to);
		}, siteContext.longTransitionDuration);
	}

	return (
		<Link className={classes} href={props.to} onClick={linkClickHandler} {...props.attributes}>
			{props.children}
			{hasTooltip && <LinkTooltip galleryItem={galleryItem} />}
		</Link>
	);
}
