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
		heading: string;
		content: JSX.Element;
	}[];
};

// ----- COMPONENT PROPS ----- //

export type BioProps = React.HTMLAttributes<HTMLElement>;
export type CVItemProps = {
    title: string;
    content: JSX.Element;
    showHR?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type ResumeProps = React.HTMLAttributes<HTMLElement>;