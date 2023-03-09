import React, { useContext, useEffect, Fragment } from "react";
import SiteContext from "../../context/global";
import Header from "./header/Header";
import MobileNavigation from "./navigation/MobileNavigation";
import Loader from "./loader/Loader";
import Footer from "./footer/Footer";
import Lightbox from "./Lightbox";

export default function Layout(props: React.PropsWithChildren) {
	const siteContext = useContext(SiteContext);
	const ariaHide = siteContext.lightboxStatus === "open";

	return (
		<Fragment>
			<Header aria-hidden={ariaHide} />
			<Loader />
			<Lightbox />
			<main aria-hidden={ariaHide}>{props.children}</main>
			<Footer aria-hidden={ariaHide} />
			{siteContext.mobile && (
				<MobileNavigation aria-hidden={ariaHide} />
			)}
		</Fragment>
	);
}
