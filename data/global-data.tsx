import { SocialIconsType, NavType, NavItemType } from "../types/global-types";
import GumroadIcon from "../components/icons/Gumroad";

export const transitions = {
	delay: 100,
	long: 600,
	short: 300
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
		pageID: 'social',
		pageName: 'Social Media',
		url: 'https://linktr.ee/kylejorve',
		showInMainNav: false,
		showInMobileNav: true,
	}
];

export const headerCTA: NavItemType = {
	pageID: "patreon",
	pageName: "Support My Work",
	url: "https://www.patreon.com/kylejorve",
};

export const socialIcons: SocialIconsType = {
	standard: [
		{
			name: "artstation",
			label: "Artstation",
			url: "https://www.artstation.com/kylejorve",
		},
		{
			name: "instagram",
			label: "Instagram",
			url: "https://www.instagram.com/kylejorve/",
		},
		{
			name: "tumblr",
			label: "Tumblr",
			url: "https://kylejorve.tumblr.com/",
		},
		{
			name: "youtube",
			label: "YouTube",
			url: "https://www.youtube.com/@KyleJorve/videos",
		},
		{
			name: "email",
			label: "Email",
			url: "mailto:kyle@kylejorve.com",
		},
	],
	commerce: [
		{
			name: "patreon",
			label: "Patreon",
			url: "https://www.patreon.com/kylejorve",
		},
		{
			name: "shop",
			label: "Print Shop",
			url: "https://www.inprnt.com/gallery/kylejorve/",
		},
		{
			name: "gumroad",
			label: "Gumroad Shop",
			icon: <GumroadIcon />,
			url: "https://gumroad.com/kylejorve",
		},
	],
};