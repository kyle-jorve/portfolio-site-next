import React from "react";

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
};

export type GalleryItemType = {
	name: string;
	title: string;
	year: string | number;
	thumbnailKey: ThumbnailKeyType;
	orientation: string;
	content?: JSX.Element;
	featured?: boolean;
	categories?: (
		| typeof projectCategories[keyof typeof projectCategories]
		| typeof characterCategories[keyof typeof characterCategories]
	)[];
	purchaseLink?: string;
	downloadLink?: string;
	detailKeys?: DetailKeyType[];
};

export type VideoGalleryType = {
	items: JSX.Element[];
	url: string;
};

// ----- COMPONENT PROPS ----- //

export type ThumbnailConfigProps = {
	thumbKey: string;
	isNew?: boolean;
	isFeatured?: boolean;
	isDetail?: boolean;
};

export type FeaturedItemProps = {
	name: string;
	title: string;
	year: string | number;
	thumbKey: string;
	orientation: string;
	alt?: string;
	isNew?: boolean;
} & React.HTMLAttributes<HTMLElement>;
