import React, { useState } from "react";
import { transitions } from "../data/global-data";
import { SiteContextType } from "../types/global-types";

const SiteContext = React.createContext<SiteContextType>({
	lightboxContent: null,
	lightboxStatus: "closed",
	loadStatus: "idle",

	closeLightbox: () => {},
	openLightbox: () => {},
	setLoadStatus: () => {},
});

export function SiteContextProvider(props: React.PropsWithChildren) {
	//----- global site context -----//
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const [lightboxStatus, setLightboxStatus] =
		useState<SiteContextType["lightboxStatus"]>("closed");
	const [lightboxContent, setLightboxContent] =
		useState<SiteContextType["lightboxContent"]>(null);

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

				closeLightbox,
				openLightbox,
				setLoadStatus,
			}}
		>
			{props.children}
		</SiteContext.Provider>
	);
}

export default SiteContext;
