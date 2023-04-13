import React, { useContext, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { transitions } from "../../data/global-data";
import SiteContext from "../../context/global";
import Header from "./header/Header";
import MobileNavigation from "./navigation/MobileNavigation";
import Footer from "./footer/Footer";
import Lightbox from "./Lightbox";

export default function Layout(props: React.PropsWithChildren) {
	const router = useRouter();
	const siteContext = useContext(SiteContext);
	const ariaHide = siteContext.lightboxStatus === "open";
	const mainClasses =
		siteContext.loadStatus === "page-out" ? "out" : undefined;

	useEffect(() => {
		siteContext.closeLightbox();
		siteContext.setLoadStatus("page-in");

		setTimeout(() => {
			siteContext.setLoadStatus("idle");
		}, transitions.short);
	}, [router.pathname, router.query.itemID]);

	return (
		<Fragment>
			<Header aria-hidden={ariaHide} />
			<Lightbox />
			<main
				className={mainClasses}
				aria-hidden={ariaHide}
			>
				{props.children}
			</main>
			<Footer aria-hidden={ariaHide} />
			<MobileNavigation aria-hidden={ariaHide} />
		</Fragment>
	);
}
