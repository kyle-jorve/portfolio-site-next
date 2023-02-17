import { ImageDataType } from "../types/global-types";

export default function getHomeData() {
	return {
		get heroImage(): ImageDataType {
			return {
				sources: [
					{
						url: '/images/home-hero/home-hero-1440.jpg',
						minScreenWidth: 1440,
					},
					{
						url: '/images/home-hero/home-hero-1024.jpg',
						minScreenWidth: 640,
					},
				],
				mobileSource: '/images/home-hero/home-hero-640.jpg',
				alt: `Pendrake's bedroom in isometric perspective`,
				width: 553,
				height: 452,
			}
		},
		get featuredWorkItemsLimit() {
			return 10;
		},
	};
}
