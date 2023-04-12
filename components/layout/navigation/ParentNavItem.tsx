import { useState, useEffect, useRef } from "react";
import { ParentNavItemProps } from "../../../types/global-types";
import NavItem from "./NavItem";
import Button from "../Button";
import styles from "../../../styles/layout/Nav.module.css";

export default function ParentNavItem({
	id,
	label,
	childItems,
	isMobileNav = false,
	navHidden = false,
	className = "",
}: ParentNavItemProps) {
	const [expanded, setExpanded] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const rootClasses = [
		isMobileNav ? styles["mobile-nav__parent"] : styles["nav__parent"],
		expanded &&
			!navHidden &&
			(isMobileNav
				? styles["mobile-nav__parent--expanded"]
				: styles["nav__parent--expanded"]),
	]
		.filter((c) => c)
		.join(" ");
	const buttonClasses = [
		...className.trim().split(" "),
		isMobileNav ? styles["mobile-nav__expand"] : styles["nav__expand"],
		expanded &&
			!navHidden &&
			(isMobileNav
				? styles["mobile-nav__expand--open"]
				: styles["nav__expand--open"]),
	]
		.filter((c) => c)
		.join(" ");
	const dropdownClasses = [
		isMobileNav ? styles["mobile-nav__dropdown"] : styles["nav__dropdown"],
		expanded &&
			!navHidden &&
			(isMobileNav
				? styles["mobile-nav__dropdown--open"]
				: styles["nav__dropdown--open"]),
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		function documentClickHandler(event: MouseEvent) {
			const target = event.target as HTMLElement;
			const targetIsNavItem =
				target === rootRef.current ||
				target.closest("[data-parent-root]") === rootRef.current;

			if (!expanded || targetIsNavItem) return;

			setExpanded(false);
		}

		if (navHidden && expanded) setExpanded(false);

		document.addEventListener("click", documentClickHandler);

		return () => {
			document.removeEventListener("click", documentClickHandler);
		};
	}, [expanded, navHidden]);

	return (
		<div
			className={rootClasses}
			ref={rootRef}
			data-parent-root
		>
			<Button
				className={buttonClasses}
				aria-label={`toggle ${label} menu`}
				aria-controls={id}
				aria-expanded={expanded}
				onClick={() => setExpanded((prev) => !prev)}
			>
				{label}
			</Button>

			<div
				className={dropdownClasses}
				aria-hidden={!expanded}
			>
				{childItems.map((ci) => {
					const classes = [
						isMobileNav
							? styles["mobile-nav__child"]
							: styles["nav__item--child"],
						isMobileNav
							? styles[`mobile-nav__child--${ci.pageID}`]
							: styles[`nav__item--${ci.pageID}`],
					]
						.filter((c) => c)
						.join(" ");

					return (
						<NavItem
							className={classes}
							key={ci.pageID}
							url={ci.url}
							onClick={() => setExpanded(false)}
							tabIndex={expanded ? undefined : -1}
						>
							{ci.pageName}
						</NavItem>
					);
				})}
			</div>
		</div>
	);
}
