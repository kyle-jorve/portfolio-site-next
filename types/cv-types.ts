import React from "react";
import { ImageDataType } from "./global-types";

// ----- DATA TYPES ----- //

export type BioType = {
	title: string;
	content: JSX.Element;
	img: ImageDataType;
};

export type ResumeType = {
	docUrl: string;
	items: {
		name: string;
		heading: string;
		subItems: {
			period?: string;
			position?: string;
			company?: string;
			title?: string;
			content?: JSX.Element;
		}[]
	}[];
};

// ----- COMPONENT PROPS ----- //

export type BioProps = {
	useH1?: boolean;
	showButton?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export type ResumeProps = React.HTMLAttributes<HTMLElement>;

export type CVItemProps = {
    title: string;
    content: JSX.Element;
    showHR?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
