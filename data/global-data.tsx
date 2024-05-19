import { SocialMediaType, NavType, NavItemType } from "../types/global-types";
import GumroadIcon from "../components/icons/Gumroad";
import BlueskyIcon from "../components/icons/Bluesky";

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
	bluesky: {
		label: "Bluesky",
		icon: <BlueskyIcon />,
		url: "https://bsky.app/profile/kylejorve.bsky.social",
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
	shop: {
		label: "Print Shop",
		url: "https://www.inprnt.com/gallery/kylejorve/",
		type: "commerce",
	},
	gumroad: {
		label: "Digital Shop",
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
				pageID: "bluesky",
				pageName: "Bluesky",
				url: socialMedia.bluesky.url,
			},
			{
				pageID: "youtube",
				pageName: "YouTube",
				url: socialMedia.youtube.url,
			},
		],
	},
];
