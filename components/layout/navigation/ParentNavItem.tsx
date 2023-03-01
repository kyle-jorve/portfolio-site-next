import { useState, useEffect, useRef } from "react";
import { ParentNavItemProps } from "../../../types/global-types";
import NavItem from "./NavItem";
import styles from "../../../styles/layout/Nav.module.css";

export default function ParentNavItem(props: ParentNavItemProps) {
	const [expanded, setExpanded] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const rootClasses = props.isMobileNav
		? styles["mobile-nav__parent"]
		: styles["nav__parent"];
	const buttonClasses = [
		props.className,
		props.isMobileNav
			? styles["mobile-nav__expand"]
			: styles["nav__expand"],
	]
		.filter((c) => c)
		.join(" ");
	const dropdownClasses = [
		props.isMobileNav
			? styles["mobile-nav__dropdown"]
			: styles["nav__dropdown"],
		expanded &&
			(props.isMobileNav
				? styles["mobile-nav__dropdown--open"]
				: styles["nav__dropdown--open"]),
	]
		.filter((c) => c)
		.join(" ");
	const navItemClasses = props.isMobileNav
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
			<button
				className={buttonClasses}
				aria-label={`toggle ${props.label} menu`}
				aria-controls={props.id}
				aria-expanded={expanded}
				onClick={() => setExpanded((prev) => !prev)}
			>
				{props.label}
			</button>

			<div
				className={dropdownClasses}
				aria-hidden={!expanded}
			>
				{props.childItems.map((ci) => {
					return (
						<NavItem
							className={navItemClasses}
							key={ci.pageID}
							url={ci.url}
							onClick={() => setExpanded(false)}
							attributes={{
								tabIndex: expanded ? undefined : -1,
							}}
						>
							{ci.pageName}
						</NavItem>
					);
				})}
			</div>
		</div>
	);
}
