import React, { useRef, useContext, useEffect, Fragment } from "react";
import SiteContext from "../../context/global";
import Header from "./header/Header";
import MobileNavigation from "./navigation/MobileNavigation";
import Loader from "./loader/Loader";
import Footer from "./footer/Footer";

let timeout: ReturnType<typeof setTimeout>;

export default function Layout(props: React.PropsWithChildren) {
    const navRef = useRef() as React.MutableRefObject<HTMLElement>;
    const siteContext = useContext(SiteContext);

    useEffect(() => {
        const body = document.querySelector("body") as HTMLBodyElement;

        if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			if (siteContext.mobile) {
				body.style.paddingBottom = `${navRef.current?.offsetHeight}px`;
			} else {
				body.style.paddingBottom = "";
			}
		}, 200);
    }, [siteContext.mobile]);

    return (
        <Fragment>
            <Header />
            <Loader />
            <main>{props.children}</main>
            <Footer />
            {siteContext.mobile && <MobileNavigation ref={navRef} />}
        </Fragment>
    );
}
