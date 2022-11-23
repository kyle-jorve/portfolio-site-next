import React, { useRef, useContext, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../context/global";
import DefaultHead from "./DefaultHead";
import DetailHeader from "./header/DetailHeader";
import Header from "./header/Header";
import MainNavigation from "./navigation/MainNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import Loader from "./Loader";
import Footer from "./footer/Footer";

let timeout: ReturnType<typeof setTimeout>;

export default function Layout(props: React.PropsWithChildren) {
    const navRef = useRef() as React.MutableRefObject<HTMLElement>;
    const siteContext = useContext(SiteContext);
    const router = useRouter();
    const isDetailPage = router.query.itemID !== undefined;

    useEffect(() => {
        const body = document.querySelector("body") as HTMLBodyElement;

        if (timeout) clearTimeout(timeout);

        if (isDetailPage) {
            body.style.paddingBottom = "";
        } else {
            siteContext.toggleLoader(false);

            timeout = setTimeout(() => {
                if (siteContext.mobile) {
                    body.style.paddingBottom = `${navRef.current?.offsetHeight}px`;
                } else {
                    body.style.paddingBottom = "";
                }
            }, 200);
        }
    }, [siteContext.mobile, isDetailPage, siteContext.longTransitionDuration]);

    return (
        <Fragment>
            <DefaultHead />
            {isDetailPage ? <DetailHeader /> : <Header />}
            <MainNavigation />
            <Loader />
            <main aria-hidden={siteContext.navOpen}>{props.children}</main>
            <Footer />
            {!isDetailPage && siteContext.mobile && <MobileNavigation ref={navRef} />}
        </Fragment>
    );
}
