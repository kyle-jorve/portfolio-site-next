import React, { useContext } from "react";
import SiteContext from "../../../context/global";
import Image from "next/image";
import useDetailImageConfig from "../../../hooks/detail-image-config";
import { DetailKeyType } from "../../../data/gallery-data";
import styles from "../../../styles/components/Showcase.module.css";

type ShowcaseSlideProps = {
    index: number;
    activeIndex: number;
    zIndex: number | undefined;
    item: DetailKeyType;
    onLoad?: Function;
};

export default function ShowcaseSlide(props: ShowcaseSlideProps) {
    const context = useContext(SiteContext);
    const imageSizes = useDetailImageConfig(props.item.path || false);
    const slideClasses = [
        styles["showcase__slide"],
        props.index === props.activeIndex
            ? styles["showcase__slide--active"]
            : props.index < props.activeIndex
            ? styles["showcase__slide--prev"]
            : "",
        !!props.item.source && styles["showcase__slide--video"],
    ].filter((c) => c);

    function imageLoadHandler(event: React.SyntheticEvent) {
        const target = event.currentTarget as HTMLImageElement;

        target?.classList.add("loaded");

        if (props.index === 0) context.toggleLoader(false);
    }

    return (
        <div
            className={slideClasses.join(" ")}
            style={{
                zIndex: props.zIndex,
            }}
            data-index={props.index}
        >
            <div className={styles["showcase__img-cont"]}>
                {!!props.item.source ? (
                    props.item.source
                ) : (
                    <Image
                        src={props.item.path!}
                        alt={props.item.alt || ""}
                        className={`img--lazy ${styles["showcase__img"]}`}
                        onLoad={imageLoadHandler}
                        loading={props.index === 0 ? "eager" : "lazy"}
                        priority={props.index === 0}
                        sizes={imageSizes}
                        width={props.item.width}
                        height={props.item.height}
                    />
                )}
            </div>
        </div>
    );
}
