import React, { useRef, useContext, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../context/global";
import DetailHeader from "./header/DetailHeader";
import Header from "./header/Header";
import MainNavigation from "./navigation/MainNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import Loader from "./loader/Loader";
import Footer from "./footer/Footer";

let timeout: ReturnType<typeof setTimeout>;

export default function Layout(props: React.PropsWithChildren) {
    const navRef = useRef() as React.MutableRefObject<HTMLElement>;
    const siteContext = useContext(SiteContext);
    const router = useRouter();
    const isDetailPage = router.query.itemID !== undefined;

    useEffect(() => {
        const routerEvents: ["routeChangeComplete", "routeChangeError"] = ["routeChangeComplete", "routeChangeError"];

        function removeLoader() {
            if (isDetailPage) return;

            siteContext.toggleLoader(false);
        }

        routerEvents.forEach((ev) => router.events.on(ev, removeLoader));

        return () => {
            routerEvents.forEach((ev) => router.events.off(ev, removeLoader));
        };
    }, [isDetailPage]);

    useEffect(() => {
        if (!siteContext.visited) siteContext.toggleLoader(false);
    }, [siteContext.visited]);

    useEffect(() => {
        const body = document.querySelector("body") as HTMLBodyElement;

        if (timeout) clearTimeout(timeout);

        if (isDetailPage) {
            body.style.paddingBottom = "";
        } else {
            timeout = setTimeout(() => {
                if (siteContext.mobile) {
                    body.style.paddingBottom = `${navRef.current?.offsetHeight}px`;
                } else {
                    body.style.paddingBottom = "";
                }
            }, 200);
        }
    }, [siteContext.mobile, isDetailPage]);

    return (
        <Fragment>
            {isDetailPage ? <DetailHeader /> : <Header />}
            <MainNavigation />
            <Loader />
            <main aria-hidden={siteContext.navOpen}>{props.children}</main>
            <Footer />
            {!isDetailPage && siteContext.mobile && <MobileNavigation ref={navRef} />}
        </Fragment>
    );
}
