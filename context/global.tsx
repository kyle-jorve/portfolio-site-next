import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import getGlobalData from '../data/global-data';

type SiteContextType = {
	[prop: string]: any;
};

const longTransitionDuration = 600; // milliseconds
const transitionDuration = 300; // milliseconds
const transitionDelay = 100;
const resizeEvents = ['resize', 'orientationchange'];
const breakpoints = [640, 1024];
const SiteContext = React.createContext<SiteContextType>({
	breakpoints,
	desktop: false,
	fromPage: null,
	fromSection: null,
	loadStatus: 'idle',
	longTransitionDuration,
	mobile: true,
	pageNotFound: false,
	toSection: null,
	transitionDelay,
	transitionDuration,
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
	const globalData = getGlobalData();
	const router = useRouter();
	const pages = globalData.nav.map((item) => (item.children ? item.children : item)).flat(1);
	const detailPageMatch = router.query.itemID !== undefined;

	//----- global site context -----//
	const [visited, setVisited] = useState(false);
	const [mobile, setMobile] = useState(true);
	const [desktop, setDesktop] = useState(false);
	const [fromPage, setFromPage] = useState(null);
	const [fromSection, setFromSection] = useState(null);
	const [toSection, setToSection] = useState(null);
	const [loadStatus, setLoadStatus] = useState('idle');
	const [pageNotFound, setPageNotFound] = useState(false);

	//----- global utilities -----//
	const removeLoader = useCallback(() => {
		setLoadStatus('out');

		setTimeout(() => {
			setLoadStatus('done');
		}, longTransitionDuration);
	}, []);

	const resizeHandler = useCallback(() => {
		if (window.innerWidth >= breakpoints[1]) {
			setDesktop(true);
			setMobile(false);
		} else if (window.innerWidth >= breakpoints[0]) {
			setDesktop(false);
			setMobile(false);
		} else {
			setDesktop(false);
			setMobile(true);
		}
	}, []);
	
	useEffect(() => {
		resizeHandler();

		resizeEvents.forEach((ev) => window.addEventListener(ev, resizeHandler));

		return () => {
			resizeEvents.forEach((ev) => window.removeEventListener(ev, resizeHandler));
		};
	}, [resizeHandler, removeLoader, detailPageMatch, pageNotFound]);

	function toggleLoader(on: boolean = true) {
		if (on) {
			setLoadStatus('in');
		} else {
			removeLoader();
		}
	}

	function returnToOriginPage() {
		const timeout = desktop ? longTransitionDuration : 0;
		let page;

		toggleLoader();

		setTimeout(() => {
			if (!fromPage) {
				router.push('/');
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
				breakpoints,
				desktop,
				fromPage,
				fromSection,
				loadStatus,
				longTransitionDuration,
				mobile,
				pageNotFound,
				toSection,
				transitionDelay,
				transitionDuration,
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
