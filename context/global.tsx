import React, { useState } from "react";
import { transitions } from "../data/global-data";
import { SiteContextType } from "../types/global-types";

const SiteContext = React.createContext<SiteContextType>({
	lightboxContent: null,
	lightboxStatus: "closed",
	loadStatus: "idle",
	visited: false,
	hideNavigationElements: false,

	closeLightbox: () => {},
	openLightbox: () => {},
	setLoadStatus: () => {},
	setVisited: () => {},
	setHideNavigationElements: () => {},
});

export function SiteContextProvider(props: React.PropsWithChildren) {
	//----- global site context -----//
	const [visited, setVisited] = useState(false);
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const [lightboxStatus, setLightboxStatus] =
		useState<SiteContextType["lightboxStatus"]>("closed");
	const [lightboxContent, setLightboxContent] =
		useState<SiteContextType["lightboxContent"]>(null);
	const [hideNavigationElements, setHideNavigationElements] =
		useState<SiteContextType["hideNavigationElements"]>(false);

	//----- global utilities -----//

	function openLightbox(content: JSX.Element) {
		if (!content) return;

		setLightboxContent(content);
		setLightboxStatus("open");
	}

	function closeLightbox() {
		if (lightboxStatus === "closed") return;

		setLightboxStatus("out");

		setTimeout(() => {
			setLightboxContent(null);
			setLightboxStatus("closed");
		}, transitions.short);
	}

	return (
		<SiteContext.Provider
			value={{
				lightboxContent,
				lightboxStatus,
				loadStatus,
				visited,
				hideNavigationElements,

				closeLightbox,
				openLightbox,
				setLoadStatus,
				setVisited,
				setHideNavigationElements,
			}}
		>
			{props.children}
		</SiteContext.Provider>
	);
}

export default SiteContext;
