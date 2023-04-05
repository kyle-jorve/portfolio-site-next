import React, { useState, useEffect, useCallback } from "react";
import { transitions } from "../data/global-data";

type SiteContextType = {
	[prop: string]: any;
};

const resizeEvents = ["resize", "orientationchange"];
const breakpoint = 1024;
const SiteContext = React.createContext<SiteContextType>({
	lightboxStatus: "closed",
	loadStatus: "idle",
	mobile: true,
	toSection: null,
	visited: false,

	closeLightbox: () => {},
	openLightbox: () => {},
	returnToOriginPage: () => {},
	setToSection: () => {},
	setVisited: () => {},
});

export function SiteContextProvider(props: React.PropsWithChildren) {
	//----- global site context -----//
	const [visited, setVisited] = useState(false);
	const [mobile, setMobile] = useState(true);
	const [loadStatus, setLoadStatus] = useState<
		"idle" | "page-out" | "page-in"
	>("idle");
	const [lightboxStatus, setLightboxStatus] = useState<
		"closed" | "open" | "out"
	>("closed");
	const [lightboxContent, setLightboxContent] = useState<JSX.Element | null>(
		null,
	);

	//----- global utilities -----//
	const resizeHandler = useCallback(() => {
		if (window.innerWidth >= breakpoint) {
			setMobile(false);
		} else {
			setMobile(true);
		}
	}, []);

	useEffect(() => {
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
				visited,

				closeLightbox,
				openLightbox,
				setLoadStatus,
				setVisited,
			}}
		>
			{props.children}
		</SiteContext.Provider>
	);
}

export default SiteContext;
