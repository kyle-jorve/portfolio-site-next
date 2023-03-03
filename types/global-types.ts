import React from "react";

// ----- DATA TYPES ----- //

export type ImageDataType = {
	sources: {
		url: string;
		minScreenWidth: number;
	}[];
	mobileSource: string;
	alt: string;
	width: number;
	height: number;
};

export type SocialIconType = {
	name: string;
	url: string;
	type: 'standard' | 'commerce';
	icon?: JSX.Element;
	label?: string;
};

export type NavItemType = {
	pageID: string;
	pageName: string;
	url: string;
	showInMobileNav?: boolean;
	showInMainNav?: boolean;
};

export type NavItemParentType = {
	label: string;
	id: string;
	childItems: NavItemType[];
	showInMobileNav?: boolean;
	showInMainNav?: boolean;
};

export type NavType = (NavItemType | NavItemParentType)[];

// ----- COMPONENT PROPS ----- //

export type CustomLinkProps = {
	to: string;
	onClick?: React.MouseEventHandler;
	useTooltip?: boolean;
	className?: string;
	attributes?: {
		tabIndex?: number | undefined;
	};
} & React.PropsWithChildren;

export type NavItemProps = {
	url: string;
	onClick?: React.MouseEventHandler;
	isMobileNav?: boolean;
	className?: string;
	attributes?: {
		tabIndex?: number | undefined;
	};
} & React.PropsWithChildren;

export type ParentNavItemProps = {
	id: string;
	label: string;
	childItems: NavItemType[];
	isMobileNav?: boolean;
	className?: string;
}