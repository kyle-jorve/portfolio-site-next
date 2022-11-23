import { useEffect, useRef, useState, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../context/global";
import CustomLink from "../layout/CustomLink";
import useGlobalData from "../../hooks/data/global-data";
import GalleryItem from "./GalleryItem";
import { GalleryItemType } from "../../hooks/data/gallery-data";
import styles from "../../styles/components/Gallery.module.css";

type FeaturedWorkProps = {
    featuredItems: GalleryItemType[];
};

const ioOptions = {
    threshold: 0.25,
};
let io: IntersectionObserver;

export default function FeaturedWork(props: FeaturedWorkProps) {
    const siteContext = useContext(SiteContext);
    const sectionRef = useRef<HTMLElement>(null!);
    const globalData = useGlobalData();
    const router = useRouter();
    const [intersected, setIntersected] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
    const page = globalData.nav.find((p) => p.url === router.pathname);
    const id = "featured-work";
    const totalDelay = (props.featuredItems.length - 1) * siteContext.transitionDelay + siteContext.transitionDuration;

    const ioHandler = useCallback(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((ent) => {
                if (!ent.isIntersecting) return;

                setIntersected(true);

                setTimeout(() => {
                    setAnimationDone(true);
                }, totalDelay);

                observer.disconnect();
            });
        },
        [totalDelay],
    );

    useEffect(() => {
        io = new IntersectionObserver(ioHandler, ioOptions);

        io.observe(sectionRef.current);

        return () => {
            io.disconnect();
        };
    }, [ioHandler]);

    return (
        <section ref={sectionRef} className="section" id={id}>
            <div className="wrapper wrapper--wide">
                <h2 className="underline">Featured Work</h2>

                <div className={`${styles["gallery__grid"]} ${styles["gallery__grid--featured"]}`}>
                    {props.featuredItems.map((item, index) => {
                        return (
                            <GalleryItem
                                key={index}
                                isNew={index === 0}
                                name={item.name}
                                title={item.title}
                                thumbnailKey={item.thumbnailKey}
                                orientation={item.orientation}
                                fromPage={page ? page.pageID : null}
                                fromSection={id}
                                className={!intersected ? styles["gallery__item--animated"] : ""}
                                style={{
                                    transitionDelay: !animationDone ? `${index * siteContext.transitionDelay}ms` : "",
                                }}
                                attributes={{
                                    tabIndex: siteContext.navOpen ? -1 : undefined,
                                }}
                            />
                        );
                    })}
                </div>

                <div className={styles["featured__button-cont"]}>
                    <CustomLink
                        className="button button--primary"
                        to="/gallery"
                        attributes={{
                            tabIndex: siteContext.navOpen ? -1 : undefined,
                        }}
                    >
                        View Gallery
                    </CustomLink>
                </div>
            </div>
        </section>
    );
}
