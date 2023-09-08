import { SocialMediaType, NavType, NavItemType } from "../types/global-types";
import GumroadIcon from "../components/icons/Gumroad";

export const transitions = {
	delay: 100,
	long: 600,
	short: 300,
};

export const socialMedia: {
	[index: string]: SocialMediaType;
} = {
	artstation: {
		label: "Artstation",
		url: "https://www.artstation.com/kylejorve",
		type: "standard",
	},
	instagram: {
		label: "Instagram",
		url: "https://www.instagram.com/kylejorve/",
		type: "standard",
	},
	tumblr: {
		label: "Tumblr",
		url: "https://kylejorve.tumblr.com/",
		type: "standard",
	},
	youtube: {
		label: "YouTube",
		url: "https://www.youtube.com/@KyleJorve/videos",
		type: "standard",
	},
	email: {
		label: "Email",
		url: "mailto:kyle.jorve.art@gmail.com",
		type: "standard",
	},
	patreon: {
		label: "Patreon",
		url: "https://www.patreon.com/kylejorve",
		type: "commerce",
	},
	shop: {
		label: "Print Shop",
		url: "https://www.inprnt.com/gallery/kylejorve/",
		type: "commerce",
	},
	gumroad: {
		label: "Gumroad Shop",
		icon: <GumroadIcon />,
		url: "https://gumroad.com/kylejorve",
		type: "commerce",
	},
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
		label: "Social",
		id: "social",
		showInMobileNav: true,
		childItems: [
			{
				pageID: "artstation",
				pageName: "ArtStation",
				url: socialMedia.artstation.url,
			},
			{
				pageID: "instagram",
				pageName: "Instagram",
				url: socialMedia.instagram.url,
			},
			{
				pageID: "tumblr",
				pageName: "Tumblr",
				url: socialMedia.tumblr.url,
			},
			{
				pageID: "youtube",
				pageName: "YouTube",
				url: socialMedia.youtube.url,
			},
		],
	},
];

export const headerCTA: NavItemType = {
	pageID: "patreon",
	pageName: "Support My Work",
	url: "https://www.patreon.com/kylejorve",
};
