import React, {AnchorHTMLAttributes} from "react";

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
} & React.PropsWithChildren & Exclude<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export type ButtonProps = React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>;

export type NavItemProps = {
	url: string;
	onClick?: React.MouseEventHandler;
	isMobileNav?: boolean;
} & React.PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ParentNavItemProps = {
	id: string;
	label: string;
	childItems: NavItemType[];
	isMobileNav?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type HeaderProps = React.HTMLAttributes<HTMLElement>;
export type LogoProps = React.HTMLAttributes<HTMLAnchorElement>;
export type HeaderNavigationProps = React.HTMLAttributes<HTMLElement>;
export type FooterProps = React.HTMLAttributes<HTMLElement>;
export type FooterIconProps = React.HTMLAttributes<HTMLDivElement>
export type MobileNavigationProps = React.HTMLAttributes<HTMLElement>;
export type LightboxProps = React.HTMLAttributes<HTMLDivElement>;
export type HomeHeroProps = React.HTMLAttributes<HTMLElement>;