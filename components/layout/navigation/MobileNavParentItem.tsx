import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import SiteContext from "../../../context/global";
import styles from "../../../styles/layout/Nav.module.css";

type ParentNavItemProps = {
    id: string;
    label: string;
    index: number;
    navItems: {
        pageID: string;
        pageName: string;
        url: string;
    }[];
    attributes?: {
        tabIndex?: number | undefined;
    };
};

export default function MobileNavParentItem(props: ParentNavItemProps) {
    const siteContext = useContext(SiteContext);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        function closeChildren(event: MouseEvent) {
            const target = event.target as HTMLElement;
            const targetIsNavChildren =
                target.classList.contains(styles["mobile-nav__parent"]) ||
                !!target.closest(`.${styles["mobile-nav__parent"]}`);

            if (targetIsNavChildren) return;

            setExpanded(false);
        }

        document.addEventListener("click", closeChildren);

        return () => {
            document.removeEventListener("click", closeChildren);
        };
    }, []);

    return (
        <div className={`${styles["mobile-nav__parent"]}${expanded ? ` ${styles["mobile-nav__parent--active"]}` : ""}`}>
            <button
                className={`${styles["mobile-nav__item"]} ${styles["mobile-nav__parent-button"]} ${
                    styles[`mobile-nav__item--${props.id}`]
                }`}
                aria-label={`reveal ${props.label} children`}
                aria-controls={props.id}
                aria-expanded={expanded}
                onClick={() => setExpanded((prev) => !prev)}
                {...props.attributes}
            >
                <span className={styles["mobile-nav__label"]}>{props.label}</span>
            </button>

            <div className={styles["mobile-nav__children"]} aria-hidden={!expanded} id={props.id}>
                {props.navItems.map((item) => {
                    const externalLink = item.url.includes("http");
                    const classes = [styles["mobile-nav__child"], styles[`mobile-nav__child--${item.pageID}`]];
                    const tabIndex = siteContext.navOpen || !expanded ? -1 : undefined;

                    return externalLink ? (
                        <a
                            key={item.pageID}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.join(" ")}
                            tabIndex={tabIndex}
                            onClick={() => setExpanded(false)}
                        >
                            {item.pageName}
                        </a>
                    ) : (
                        <Link
                            key={item.pageID}
                            href={item.url}
                            className={classes.join(" ")}
                            tabIndex={tabIndex}
                            onClick={() => setExpanded(false)}
                        >
                            {item.pageName}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
