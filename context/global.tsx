import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { nav, transitions } from "../data/global-data";

type SiteContextType = {
	[prop: string]: any;
};

const resizeEvents = ["resize", "orientationchange"];
const breakpoint = 1024;
const SiteContext = React.createContext<SiteContextType>({
	fromPage: null,
	fromSection: null,
	loadStatus: "idle",
	mobile: true,
	pageNotFound: false,
	toSection: null,
	visited: false,

	removeLoader: () => {},
	returnToOriginPage: () => {},
	setFromPage: () => {},
	setFromSection: () => {},
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
	const [fromPage, setFromPage] = useState(null);
	const [fromSection, setFromSection] = useState(null);
	const [toSection, setToSection] = useState(null);
	const [loadStatus, setLoadStatus] = useState("idle");
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

	function returnToOriginPage() {
		const timeout = mobile ? 0 : transitions.long;
		let page;

		toggleLoader();

		setTimeout(() => {
			if (!fromPage) {
				router.push("/");
				return;
			}

			page = pages.find((p) => p.pageID === fromPage);

			if (!page) return;

			router.push(page.url);
		}, timeout);
	}

	return (
		<SiteContext.Provider
			value={{
				fromPage,
				fromSection,
				loadStatus,
				mobile,
				pageNotFound,
				toSection,
				visited,

				removeLoader,
				returnToOriginPage,
				setFromPage,
				setFromSection,
				setPageNotFound,
				setToSection,
				setVisited,
				toggleLoader,
			}}
		>
			{props.children}
		</SiteContext.Provider>
	);
}

export default SiteContext;
