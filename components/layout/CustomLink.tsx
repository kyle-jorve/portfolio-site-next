import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SiteContext from "../../context/global";

type CustomLinkProps = {
    onClick?: React.MouseEventHandler;
    to: string;
    className?: string;
    attributes?: {
        tabIndex?: number | undefined;
    };
} & React.PropsWithChildren;

export default function CustomLink(props: CustomLinkProps) {
    const onClick = props.onClick || (() => {});
    const router = useRouter();
    const siteContext = useContext(SiteContext);

    function linkClickHandler(event: React.MouseEvent) {
        const isDetailRoute = props.to.includes("/gallery/") && props.to.length > 9;

        if (!siteContext.desktop) {
            onClick(event);

            return;
        }

        event.preventDefault();

        onClick(event);

        siteContext.toggleLoader();

        setTimeout(() => {
            router.push(props.to);

            siteContext.toggleLoader(false, !!isDetailRoute);
        }, siteContext.longTransitionDuration);
    }

    return (
        <Link className={props.className} href={props.to} onClick={linkClickHandler} {...props.attributes}>
            {props.children}
        </Link>
    );
}
