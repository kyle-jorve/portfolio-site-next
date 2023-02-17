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
	icon?: JSX.Element;
	label?: string;
};

export type SocialIconsType = {
	standard: SocialIconType[];
	commerce: SocialIconType[];
};

export type NavItemType = {
	pageID: string;
	pageName: string;
	url: string;
	showInMobileNav?: boolean;
};

export type NavItemParentType = {
	label: string;
	id: string;
	showInMobileNav?: boolean;
	children: NavItemType[];
};

export type NavType = (NavItemType | NavItemParentType)[];