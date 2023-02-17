import { ImageDataType } from "./global-types";

export type BioType = {
	title: string;
	content: JSX.Element;
	img: ImageDataType;
};

export type ResumeType = {
	docUrl: string;
	items: {
		heading: string;
		content: JSX.Element;
	}[];
};