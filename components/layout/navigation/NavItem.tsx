import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteContext from "../../../context/global";
import styles from "../../../styles/layout/Nav.module.css";

type NavItemProps = {
    onClick?: React.MouseEventHandler;
    url: string;
    totalDelay?: number;
    isMobile?: boolean;
    className?: string;
    isMainNav?: boolean;
    index: number;
    attributes?: {
        tabIndex: number | undefined;
    };
    style?: {
        [prop: string]: string;
    };
} & React.PropsWithChildren;

let timeout: ReturnType<typeof setTimeout>;

export default function NavItem(props: NavItemProps) {
    const router = useRouter();
    const isCurrent = props.url === router.pathname;
    const [navItemsAnimationDone, setNavItemsAnimationDone] = useState(false);
    const siteContext = useContext(SiteContext);
    const onClick = props.onClick || (() => {});
    const url = new URL(
        props.url.includes("http") ? props.url : `${window.location.protocol}//${window.location.host}${props.url}`,
    );
    const curHost = window.location.host;
    const externalLink = curHost !== url.host;
    const totalDelay = props.totalDelay;
    let classes = [!props.isMobile && styles["nav__a"], props.className].filter((c) => c);

    function navLinkClickHandler(event: React.MouseEvent) {
        if (!siteContext.desktop) {
            onClick(event);

            return;
        }

        event.preventDefault();

        siteContext.toggleLoader();

        setTimeout(() => {
            router.push(props.url);

            onClick(event);

            siteContext.toggleLoader(false);
        }, siteContext.longTransitionDuration);
    }

    useEffect(() => {
        if (siteContext.navOpen) {
            timeout = setTimeout(() => {
                setNavItemsAnimationDone(true);
            }, totalDelay);
        } else {
            setNavItemsAnimationDone(false);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [siteContext.navOpen, totalDelay]);

    return externalLink ? (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.join(" ")}
            style={{
                transitionDelay:
                    props.isMainNav && !navItemsAnimationDone && siteContext.desktop ? `${props.index * 100}ms` : "",
            }}
            {...props.attributes}
        >
            {props.children}
        </a>
    ) : (
        <Link
            onClick={navLinkClickHandler}
            href={props.url}
            className={isCurrent ? [...classes, styles["nav__a--current"]].join(" ") : classes.join(" ")}
            style={{
                transitionDelay:
                    props.isMainNav && !navItemsAnimationDone && siteContext.desktop
                        ? `${props.index * siteContext.transitionDelay}ms`
                        : "",
            }}
            {...props.attributes}
        >
            {props.children}
        </Link>
    );
}
