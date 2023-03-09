import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { nav, transitions } from "../data/global-data";

type SiteContextType = {
	[prop: string]: any;
};

const resizeEvents = ["resize", "orientationchange"];
const breakpoint = 1024;
const SiteContext = React.createContext<SiteContextType>({
	lightboxStatus: "closed",
	loadStatus: "idle",
	mobile: true,
	pageNotFound: false,
	toSection: null,
	visited: false,

	closeLightbox: () => {},
	openLightbox: () => {},
	removeLoader: () => {},
	returnToOriginPage: () => {},
	setPageNotFound: () => {},
	setToSection: () => {},
	setVisited: () => {},
	toggleLoader: () => {},
});

export function SiteContextProvider(props: React.PropsWithChildren) {
	const router = useRouter();
	const pages = nav
		.map((item) => ("childItems" in item ? item.childItems : item))
		.flat(1);
	const detailPageMatch = router.query.itemID !== undefined;

	//----- global site context -----//
	const [visited, setVisited] = useState(false);
	const [mobile, setMobile] = useState(true);
	const [loadStatus, setLoadStatus] = useState("idle");
	const [lightboxStatus, setLightboxStatus] = useState<
		"closed" | "open" | "out"
	>("closed");
	const [lightboxContent, setLightboxContent] =
		useState<JSX.Element | null>(null);
	const [pageNotFound, setPageNotFound] = useState(false);

	//----- global utilities -----//
	const removeLoader = useCallback(() => {
		setLoadStatus("out");

		setTimeout(() => {
			setLoadStatus("done");
		}, transitions.long);
	}, []);

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
	}, [resizeHandler, removeLoader, detailPageMatch, pageNotFound]);

	function toggleLoader(on: boolean = true) {
		if (on) {
			setLoadStatus("in");
		} else {
			removeLoader();
		}
	}

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
				pageNotFound,
				visited,

				closeLightbox,
				openLightbox,
				removeLoader,
				setPageNotFound,
				setVisited,
				toggleLoader,
			}}
		>
			{props.children}
		</SiteContext.Provider>
	);
}

export default SiteContext;
