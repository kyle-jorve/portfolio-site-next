import {
	SocialIconType,
	NavType,
	NavItemType,
} from "../types/global-types";
import GumroadIcon from "../components/icons/Gumroad";

export const transitions = {
	delay: 100,
	long: 600,
	short: 300,
};

export const nav: NavType = [
	{
		pageID: "gallery",
		pageName: "Gallery",
		url: "/gallery",
		showInMobileNav: true,
	},
	{
		pageID: "cv",
		pageName: "CV",
		url: "/cv",
		showInMobileNav: true,
	},
	{
		label: "Shop",
		id: "shop",
		showInMobileNav: true,
		childItems: [
			{
				pageID: "shop-prints",
				pageName: "Shop Prints",
				url: "https://www.inprnt.com/gallery/kylejorve/",
			},
			{
				pageID: "shop-digital",
				pageName: "Shop Digital",
				url: "https://kylejorve.gumroad.com/",
			},
		],
	},
	{
		pageID: "social",
		pageName: "Social",
		url: "https://linktr.ee/kylejorve",
		showInMainNav: false,
		showInMobileNav: true,
	},
];

export const headerCTA: NavItemType = {
	pageID: "patreon",
	pageName: "Support My Work",
	url: "https://www.patreon.com/kylejorve",
};

export const socialIcons: SocialIconType[] = [
	{
		name: "artstation",
		label: "Artstation",
		url: "https://www.artstation.com/kylejorve",
		type: "standard",
	},
	{
		name: "instagram",
		label: "Instagram",
		url: "https://www.instagram.com/kylejorve/",
		type: "standard",
	},
	{
		name: "tumblr",
		label: "Tumblr",
		url: "https://kylejorve.tumblr.com/",
		type: "standard",
	},
	{
		name: "youtube",
		label: "YouTube",
		url: "https://www.youtube.com/@KyleJorve/videos",
		type: "standard",
	},
	{
		name: "email",
		label: "Email",
		url: "mailto:kyle@kylejorve.com",
		type: "standard",
	},
	{
		name: "patreon",
		label: "Patreon",
		url: "https://www.patreon.com/kylejorve",
		type: "commerce",
	},
	{
		name: "shop",
		label: "Print Shop",
		url: "https://www.inprnt.com/gallery/kylejorve/",
		type: "commerce",
	},
	{
		name: "gumroad",
		label: "Gumroad Shop",
		icon: <GumroadIcon />,
		url: "https://gumroad.com/kylejorve",
		type: "commerce",
	},
];
