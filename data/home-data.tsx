import { ImageDataType } from "../types/global-types";

export const heroImage: ImageDataType = {
	sources: [
		{
			url: '/images/home-hero/home-hero-1440.png',
			minScreenWidth: 1440,
		},
		{
			url: '/images/home-hero/home-hero-1024.png',
			minScreenWidth: 640,
		},
	],
	mobileSource: '/images/home-hero/home-hero-640.png',
	alt: `Pendrake's bedroom in isometric perspective`,
	width: 640,
	height: 580,
};

export const slideshowLimit = 10;
