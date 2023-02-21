import { useState } from "react";
import { ParentNavItemProps } from "../../../types/global-types";
import NavItem from "./NavItem";
import styles from '../../../styles/layout/Nav.module.css';

export default function ParentNavItem(props: ParentNavItemProps) {
	const [expanded, setExpanded] = useState(false);
	const rootClasses = [
		props.isMobileNav ? styles['mobile-nav__parent'] : styles['nav__parent'],
		props.className
	].filter(c => c).join(' ');
	const buttonClasses = props.isMobileNav ? styles['mobile-nav__expand'] : styles['nav__expand'];
	const dropdownClasses = [
		props.isMobileNav ? styles['mobile-nav__dropdown'] : styles['nav__dropdown'],
		expanded && (props.isMobileNav ? styles['mobile-nav__dropdown--open'] : styles['nav__dropdown--open'])
	].filter(c => c).join(' ');
	const navItemClasses = props.isMobileNav ? styles['mobile-nav__child'] : styles['nav__item--child'];

	return (
		<div className={rootClasses}>
			<button className={buttonClasses} aria-label={`toggle ${props.label} menu`} aria-controls={props.id} aria-expanded={expanded} onClick={() => setExpanded(prev => !prev)}>
				{props.label}
			</button>

			<div className={dropdownClasses}>
				{
					props.childItems.map(ci => {
						return (
							<NavItem className={navItemClasses} key={ci.pageID} url={ci.url}>
								{ci.pageName}
							</NavItem>
						);
					})
				}
			</div>
		</div>
	)
}