import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../../context/global";
import getGlobalData from "../../../data/global-data";
import getGalleryData from "../../../data/gallery-data";
import NavItem from "./NavItem";
import MainNavParentItem from "./MainNavParentItem";
import SocialIcon from "../SocialIcon";
import GalleryItem from "../../gallery/GalleryItem";
import styles from "../../../styles/layout/Nav.module.css";
import socialStyles from "../../../styles/layout/Social.module.css";
import galleryStyles from "../../../styles/components/Gallery.module.css";

let timeout: {
    social: ReturnType<typeof setTimeout> | null;
    gallery: ReturnType<typeof setTimeout> | null;
} = {
    social: null,
    gallery: null,
};

export default function MainNavigation() {
    const globalData = getGlobalData();
    const galleryData = getGalleryData();
    const [socialIconsAnimationDone, setSocialIconsAnimationDone] = useState(false);
    const [galleryAnimationDone, setGalleryAnimationDone] = useState(false);
    const navItems = globalData.nav;
    const recentWork = galleryData.items.slice(0, globalData.recentWorkLimit);
    const router = useRouter();
    const page = globalData.nav.find((p) => p.url === router.pathname);
    const siteContext = useContext(SiteContext);
    const totalDelay = {
        icons:
            ([...globalData.socialIcons.standard, ...globalData.socialIcons.commerce].length - 1) *
                siteContext.transitionDelay +
            siteContext.transitionDuration,
        gallery: recentWork.length * siteContext.transtionDelay + siteContext.transitionDuration,
        navItems: navItems.length * siteContext.transitionDelay + siteContext.transitionDuration,
    };
    const classes = [
        styles.nav,
        siteContext.navOpen && styles["nav--active"],
        siteContext.navRevealed && styles["nav--revealed"],
    ].filter((c) => c);

    useEffect(() => {
        if (siteContext.navOpen) {
            timeout.social = setTimeout(() => {
                setSocialIconsAnimationDone(true);
            }, totalDelay.icons);

            timeout.gallery = setTimeout(() => {
                setGalleryAnimationDone(true);
            }, totalDelay.gallery);
        } else {
            setSocialIconsAnimationDone(false);
            setGalleryAnimationDone(false);
        }

        return () => {
            if (timeout.social) clearTimeout(timeout.social);
            if (timeout.gallery) clearTimeout(timeout.gallery);
        };
    }, [siteContext.navOpen, totalDelay.icons, totalDelay.gallery]);

    return (
        <nav className={classes.join(" ")} aria-hidden={!siteContext.navOpen} id="main-navigation">
            <section className={styles["nav__inner"]}>
                {navItems.map((item, index) => {
                    if (item.children) {
                        return;
                    }

                    return (
                        <NavItem
                            isMainNav={true}
                            totalDelay={totalDelay.navItems}
                            key={index}
                            index={index}
                            url={item.url!}
                            onClick={siteContext.closeNav}
                            attributes={{
                                tabIndex: siteContext.navOpen ? undefined : -1,
                            }}
                        >
                            {item.pageName}
                        </NavItem>
                    );
                })}
            </section>

            <section className={`${socialStyles.social} ${socialStyles["social--header"]}`}>
                <div className={`${socialStyles["social__row"]} ${socialStyles["social__row--standard"]}`}>
                    {globalData.socialIcons.standard.map((item, index) => {
                        return (
                            <SocialIcon
                                className={styles["social__item--nav"]}
                                key={index}
                                name={item.name}
                                url={item.url}
                                style={{
                                    transitionDelay: !socialIconsAnimationDone
                                        ? `${index * siteContext.transitionDelay}ms`
                                        : "",
                                }}
                                attributes={{
                                    tabIndex: siteContext.navOpen ? undefined : -1,
                                }}
                            >
                                {!!item.icon && item.icon}
                            </SocialIcon>
                        );
                    })}
                </div>

                <div className={socialStyles["social__row"]}>
                    {globalData.socialIcons.commerce.map((item, index) => {
                        return (
                            <SocialIcon
                                className={styles["social__item--nav"]}
                                key={index}
                                name={item.name}
                                url={item.url}
                                style={{
                                    transitionDelay: !socialIconsAnimationDone
                                        ? `${index * siteContext.transitionDelay}ms`
                                        : "",
                                }}
                                attributes={{
                                    tabIndex: siteContext.navOpen ? undefined : -1,
                                }}
                            >
                                {!!item.icon && item.icon}
                            </SocialIcon>
                        );
                    })}
                </div>
            </section>

            <section>
                <div className="wrapper wrapper--section">
                    <h2 className="flex-line">Recent Work</h2>

                    <div className={`${galleryStyles["gallery__grid"]} ${galleryStyles["gallery__grid--nav"]}`}>
                        {recentWork.map((item, index) => {
                            return (
                                <GalleryItem
                                    key={index}
                                    className={!siteContext.navRevealed ? galleryStyles["gallery__item--animated"] : ""}
                                    isNew={index === 0}
                                    name={item.name}
                                    title={item.title}
                                    thumbnailKey={item.thumbnailKey}
                                    orientation={item.orientation}
                                    fromPage={page ? page.pageID! : null}
                                    fromSection={null}
                                    style={{
                                        transitionDelay: !galleryAnimationDone
                                            ? `${index * siteContext.transitionDelay}ms`
                                            : "",
                                    }}
                                    attributes={{
                                        tabIndex: siteContext.navOpen ? undefined : -1,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </nav>
    );
}
