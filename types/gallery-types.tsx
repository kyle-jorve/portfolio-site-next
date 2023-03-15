import React, { AnchorHTMLAttributes } from "react";

// ----- TYPES ----- //

export const projectCategories = {
	ignobleBlood: {
		name: "ignoble-blood",
		label: "Ignoble Blood",
	},
	postAutumn: {
		name: "post-autumn",
		label: "Post-Autumn",
	},
	fanArt: {
		name: "fan-art",
		label: "Fan Art",
	},
} as const;

export const characterCategories = {
	samil: {
		name: "samil",
		label: "Samil Sealee",
	},
	kyra: {
		name: "kyra",
		label: "Kyra Luckleav",
	},
	toval: {
		name: "toval",
		label: "Toval Argensente",
	},
	andel: {
		name: "andel",
		label: "Andel Sommer",
	},
	pendrake: {
		name: "pendrake",
		label: "Pendrake Sommer",
	},
	talis: {
		name: "talis",
		label: "Talis Sommer",
	},
	cargha: {
		name: "cargha",
		label: "Cargha Bezamik",
	},
	berned: {
		name: "berned",
		label: "Berned Blackhorn",
	},
	fennory: {
		name: "fennory",
		label: "Fennory Caelden",
	},
	crow: {
		name: "crow",
		label: "Crow",
	},
	sora: {
		name: "sora",
		label: "Sora",
	},
	riku: {
		name: "riku",
		label: "Riku",
	},
	kairi: {
		name: "kairi",
		label: "Kairi",
	},
	namine: {
		name: "namine",
		label: "Namine",
	},
	roxas: {
		name: "roxas",
		label: "Roxas",
	},
} as const;

export const categoryNames = [
	...Object.values(projectCategories).map((cat) => cat.name),
	...Object.values(characterCategories).map((cat) => cat.name),
];

export type DetailKeyType = {
	path?: string;
	alt?: string;
	source?: JSX.Element;
	width?: number;
	height?: number;
};

export type ThumbnailKeyType = {
	path: string;
	alt: string;
	orientation?: "top" | "center" | "bottom";
	width?: number;
	height?: number;
};

export type GalleryItemContent = {
	title: string;
	content: JSX.Element;
	year: string | number;
	purchaseLink?: string;
	downloadLink?: string;
};

export type GalleryItemType = {
	name: string;
	thumb: ThumbnailKeyType;
	detailKeys: DetailKeyType[];
	categories: (
		| typeof projectCategories[keyof typeof projectCategories]
		| typeof characterCategories[keyof typeof characterCategories]
	)[];
	featured?: boolean;
} & GalleryItemContent;

export type NeighborType =
	| {
			name: string;
			title: string;
			thumb: ThumbnailKeyType;
	  }
	| undefined;

export type VideoGalleryItemType = {
	name: string;
	title: string;
	poster: ThumbnailKeyType;
	video: JSX.Element;
};

export type VideoGalleryType = {
	items: VideoGalleryItemType[];
	url: string;
};

// ----- COMPONENT PROPS ----- //

export type ThumbnailConfigProps = {
	thumbKey: string;
	isNew?: boolean;
	isFeatured?: boolean;
	isDetail?: boolean;
	isVideo?: boolean;
};

export type FeaturedWorkProps = React.HTMLAttributes<HTMLElement>;

export type FeaturedItemProps = {
	name: string;
	title: string;
	year: string | number;
	thumb: ThumbnailKeyType;
	isNew?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export type VideoGalleryProps = React.HTMLAttributes<HTMLElement>;

export type VideoGalleryItemProps = VideoGalleryItemType &
	React.HTMLAttributes<HTMLButtonElement>;

export type GalleryGridProps = React.HTMLAttributes<HTMLDivElement>;

export type GalleryItemProps = { isNew?: boolean } & Exclude<
	GalleryItemType,
	| "content"
	| "featured"
	| "categories"
	| "purchaseLink"
	| "downloadLink"
	| "detailKeys"
> &
	React.HTMLAttributes<HTMLElement>;

export type NewBadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export type CommerceTilesProps = React.HTMLAttributes<HTMLDivElement>;

export type DetailSlideshowProps = {
	galleryItem: GalleryItemType;
} & React.HTMLAttributes<HTMLDivElement>;

export type DetailSlideProps = {
	image: DetailKeyType;
	name: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type DetailContentProps = GalleryItemContent &
	React.HTMLAttributes<HTMLDivElement>;

export type NeighborsProps = {
	prev?: NeighborType;
	next?: NeighborType;
} & React.HTMLAttributes<HTMLDivElement>;

export type NeighborProps = NeighborType & {
	direction: "prev" | "next";
} & React.HTMLAttributes<HTMLElement>;
