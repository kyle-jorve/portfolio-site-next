import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import useGlobalData from "../hooks/data/global-data";

type SiteContextType = {
    [prop: string]: any;
};

const longTransitionDuration = 600; // milliseconds
const transitionDuration = 300; // milliseconds
const transitionDelay = 100;
const resizeEvents = ["resize", "orientationchange"];
const breakpoints = [640, 1024];
const SiteContext = React.createContext<SiteContextType>({
    mobile: true,
    navOpen: false,
    fromPage: "home",
    fromSection: "featured-work",
    loadStatus: "idle",
    detailPage: {
        activeSlideIndex: 0,
        imagesLoaded: false,
    },
});

export function SiteContextProvider(props: React.PropsWithChildren) {
    const navButtonRef = useRef<HTMLButtonElement>();
    const globalData = useGlobalData();
    const router = useRouter();
    const pages = globalData.nav;
    const detailPageMatch = router.query.itemID !== undefined;

    //----- global site context -----//
    const [visited, setVisited] = useState(false);
    const [mobile, setMobile] = useState(true);
    const [desktop, setDesktop] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const [navRevealed, setNavRevealed] = useState(false);
    const [fromPage, setFromPage] = useState(null);
    const [fromSection, setFromSection] = useState(null);
    const [toSection, setToSection] = useState(null);
    const [loadStatus, setLoadStatus] = useState("idle");
    const [pageNotFound, setPageNotFound] = useState(false);

    //----- gallery detail page context -----//
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    //----- global utilities -----//

    const removeLoader = useCallback(() => {
        setLoadStatus("out");

        setTimeout(() => {
            setLoadStatus("done");
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

    const toggleLoader = useCallback(
        (on: boolean = true, destinationIsDetailPage: boolean = false, isDetailPage: boolean = detailPageMatch) => {
            const mustRemoveLoader =
                ((isDetailPage || destinationIsDetailPage) && imagesLoaded && !pageNotFound) ||
                (!isDetailPage && !destinationIsDetailPage) ||
                pageNotFound;

            if (on) {
                setLoadStatus("in");
                return;
            }

            if (mustRemoveLoader) {
                removeLoader();
            }
        },
        [imagesLoaded, pageNotFound, detailPageMatch, removeLoader],
    );

    useEffect(() => {
        resizeHandler();

        resizeEvents.forEach((ev) => window.addEventListener(ev, resizeHandler));

        if ((detailPageMatch && imagesLoaded) || pageNotFound) {
            removeLoader();
        }

        return () => {
            resizeEvents.forEach((ev) => window.removeEventListener(ev, resizeHandler));
        };
    }, [resizeHandler, removeLoader, detailPageMatch, imagesLoaded, pageNotFound]);

    function navToggleHandler() {
        navButtonRef.current!.blur();
        navButtonRef.current!.style.pointerEvents = "none";

        setTimeout(() => {
            navButtonRef.current!.style.pointerEvents = "";
        }, transitionDuration + (globalData.socialIcons.standard.length + globalData.socialIcons.commerce.length) * 100);

        setNavOpen((prev) => {
            if (!prev) {
                setNavRevealed(true);
            } else {
                setTimeout(() => {
                    setNavRevealed(false);
                }, transitionDuration);
            }

            return !prev;
        });
    }

    function closeNav() {
        setNavOpen(false);

        setTimeout(() => {
            setNavRevealed(false);
        }, transitionDuration);
    }

    function returnToOriginPage() {
        const timeout = desktop ? longTransitionDuration : 0;
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

    //----- gallery detail page utilities -----//

    function goToPrevSlide(slidesLength: number) {
        setActiveSlideIndex((prev) => {
            if (prev === 0) return slidesLength - 1;

            return prev - 1;
        });
    }

    function goToNextSlide(slidesLength: number) {
        setActiveSlideIndex((prev) => {
            if (prev === slidesLength - 1) return 0;

            return prev + 1;
        });
    }

    function goToSlide(index: number) {
        setActiveSlideIndex(index);
    }

    function resetSlideIndex() {
        if (!desktop) {
            setActiveSlideIndex(0);
        } else {
            setTimeout(() => {
                setActiveSlideIndex(0);
            }, longTransitionDuration);
        }
    }

    return (
        <SiteContext.Provider
            value={{
                activeSlideIndex,
                breakpoints,
                desktop,
                fromPage,
                fromSection,
                imagesLoaded,
                loadStatus,
                longTransitionDuration,
                mobile,
                navButtonRef,
                navOpen,
                navRevealed,
                pageNotFound,
                toSection,
                transitionDelay,
                transitionDuration,
                visited,

                closeNav,
                goToNextSlide,
                goToPrevSlide,
                goToSlide,
                navToggleHandler,
                removeLoader,
                resetSlideIndex,
                returnToOriginPage,
                setFromPage,
                setFromSection,
                setImagesLoaded,
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
