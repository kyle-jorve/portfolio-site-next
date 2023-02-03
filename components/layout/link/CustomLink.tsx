import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkTooltip from "./LinkTooltip";
import getGalleryData from "../../../data/gallery-data";
import SiteContext from "../../../context/global";

type CustomLinkProps = {
    onClick?: React.MouseEventHandler;
    to: string;
	useTooltip?: boolean;
    className?: string;
    attributes?: {
        tabIndex?: number | undefined;
    };
} & React.PropsWithChildren;

export default function CustomLink(props: CustomLinkProps) {
    const onClick = props.onClick || (() => {});
    const router = useRouter();
    const siteContext = useContext(SiteContext);
	const destinationIsDetailPage = props.to.includes('/gallery/') && props.to.length > 9;
	const itemID = destinationIsDetailPage && props.to.split('/gallery/')[1].replace(/\//g, '');
	const galleryItem = destinationIsDetailPage && getGalleryData().items.find(item => item.name === itemID);
	const classes = [
		destinationIsDetailPage && !!props.useTooltip && 'has-tooltip',
		props.className,
	].filter(c => c);

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
        <Link className={classes.join(' ')} href={props.to} onClick={linkClickHandler} {...props.attributes}>
            {props.children}
			{destinationIsDetailPage && !!galleryItem && !!props.useTooltip && <LinkTooltip galleryItem={galleryItem} />}
        </Link>
    );
}
