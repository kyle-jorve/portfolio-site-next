import React, { useState, useLayoutEffect } from "react";
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

	useLayoutEffect(() => {
		const resizeEvents = ["resize", "orientationchange"];
		const breakpoint = 1024;

		function resizeHandler() {
			if (window.innerWidth >= breakpoint) {
				setMobile(false);
			} else {
				setMobile(true);
			}
		}

		resizeHandler();

		resizeEvents.forEach((ev) =>
			window.addEventListener(ev, resizeHandler),
		);

		return () => {
			resizeEvents.forEach((ev) =>
				window.removeEventListener(ev, resizeHandler),
			);
		};
	}, []);

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
