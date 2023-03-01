import React, { useContext, Fragment } from "react";
import SiteContext from "../../context/global";
import Header from "./header/Header";
import MobileNavigation from "./navigation/MobileNavigation";
import Loader from "./loader/Loader";
import Footer from "./footer/Footer";

export default function Layout(props: React.PropsWithChildren) {
	const siteContext = useContext(SiteContext);

	return (
		<Fragment>
			<Header />
			<Loader />
			<main>{props.children}</main>
			<Footer />
			{siteContext.mobile && <MobileNavigation />}
		</Fragment>
	);
}
