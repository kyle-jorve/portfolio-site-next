import React, { useState, useEffect, useCallback } from "react";
import { transitions } from "../data/global-data";
import { SiteContextType } from "../types/global-types";

const SiteContext = React.createContext<SiteContextType>({
	lightboxContent: null,
	lightboxStatus: "closed",
	loadStatus: "idle",
	mobile: true,

	closeLightbox: () => {},
	openLightbox: () => {},
	setLoadStatus: () => {},
});

export function SiteContextProvider(props: React.PropsWithChildren) {
	//----- global site context -----//
	const [mobile, setMobile] = useState(true);
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const [lightboxStatus, setLightboxStatus] =
		useState<SiteContextType["lightboxStatus"]>("closed");
	const [lightboxContent, setLightboxContent] =
		useState<SiteContextType["lightboxContent"]>(null);

	//----- global utilities -----//
	const resizeHandler = useCallback(() => {
		if (window.innerWidth >= 1024) {
			setMobile(false);
		} else {
			setMobile(true);
		}
	}, []);

	useEffect(() => {
		const resizeEvents = ["resize", "orientationchange"];

		resizeHandler();

		resizeEvents.forEach((ev) =>
			window.addEventListener(ev, resizeHandler),
		);

		return () => {
			resizeEvents.forEach((ev) =>
				window.removeEventListener(ev, resizeHandler),
			);
		};
	}, [resizeHandler]);

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
				mobile,

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
