import { useState, useContext, useRef } from "react";
import NavItem from "./NavItem";
import SiteContext from "../../../context/global";
import styles from "../../../styles/layout/Nav.module.css";

type MainNavParentItemProps = {
    onClick: React.MouseEventHandler;
    label: string;
    id: string;
    totalDelay: number;
    index: number;
    navItems: {
        pageID: string;
        pageName: string;
        url: string;
    }[];
    attributes?: {
        tabIndex?: number | undefined;
    };
    style?: {
        [prop: string]: string;
    };
};

export default function MainNavParentItem(props: MainNavParentItemProps) {
    const siteContext = useContext(SiteContext);
    const childrenRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);

    function toggleChildren() {
        setExpanded((prev) => {
            const children = Array.from(childrenRef.current!.children).map((child) => child as HTMLElement);
            const height =
                children
                    .map((child) => child.offsetHeight)
                    .reduce((prev, cur) => {
                        return prev + cur;
                    }, 0) + 32;

            // if already expanded...
            if (prev) {
                childrenRef.current!.style.height = "";
            }
            // if not yet expanded...
            else {
                childrenRef.current!.style.height = `${height}px`;
            }

            return !prev;
        });
    }

    return (
        <div className={`${styles["nav__parent"]}${expanded ? ` ${styles["nav__parent--active"]}` : ""}`}>
            <button
                className={`${styles["nav__item"]} ${styles["nav__item--parent"]}`}
                aria-label={`${expanded ? "close" : "expand"} ${props.label} menu`}
                aria-controls={props.id}
                aria-expanded={expanded}
                {...props.attributes}
                onClick={toggleChildren}
            >
                {props.label}
            </button>

            <div className={styles["nav__children"]} aria-hidden={!expanded} id={props.id} ref={childrenRef}>
                {props.navItems.map((item) => {
                    return (
                        <NavItem
                            key={item.pageID}
                            url={item.url}
                            totalDelay={props.totalDelay}
                            className={styles["nav__item--child"]}
                            index={props.index}
                            attributes={{ tabIndex: siteContext.navOpen || !expanded ? -1 : undefined }}
                        >
                            {item.pageName}
                        </NavItem>
                    );
                })}
            </div>
        </div>
    );
}
