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
	className = "",
}: ParentNavItemProps) {
	const [expanded, setExpanded] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const rootClasses = isMobileNav
		? styles["mobile-nav__parent"]
		: styles["nav__parent"];
	const buttonClasses = [
		...className.trim().split(" "),
		isMobileNav
			? styles["mobile-nav__expand"]
			: styles["nav__expand"],
		expanded &&
			(isMobileNav
				? styles["mobile-nav__expand--open"]
				: styles["nav__expand--open"]),
	]
		.filter((c) => c)
		.join(" ");
	const dropdownClasses = [
		isMobileNav
			? styles["mobile-nav__dropdown"]
			: styles["nav__dropdown"],
		expanded &&
			(isMobileNav
				? styles["mobile-nav__dropdown--open"]
				: styles["nav__dropdown--open"]),
	]
		.filter((c) => c)
		.join(" ");
	const navItemClasses = isMobileNav
		? styles["mobile-nav__child"]
		: styles["nav__item--child"];

	useEffect(() => {
		function dismissDropdown(event: MouseEvent) {
			const target = event.target as HTMLElement;
			const targetIsNavItem =
				target === rootRef.current ||
				!!target.closest("[data-parent-root]");

			if (!expanded || targetIsNavItem) return;

			setExpanded(false);
		}

		document.addEventListener("click", dismissDropdown);

		return () => {
			document.removeEventListener("click", dismissDropdown);
		};
	}, [expanded]);

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
					return (
						<NavItem
							className={navItemClasses}
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
