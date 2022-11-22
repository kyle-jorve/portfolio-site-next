import { useCallback } from "react";
import ShowcasePicture from "./ShowcasePicture";
import { DetailKeyType } from "../../../hooks/data/gallery-data";
import styles from "../../../styles/components/Showcase.module.css";

type ShowcaseSlideProps = {
    index: number;
    activeIndex: number;
    zIndex: number | undefined;
    item: DetailKeyType;
    onLoad?: Function;
};

function ShowcaseSlide(props: ShowcaseSlideProps) {
    const slideClasses = [
        styles["showcase__slide"],
        props.index === props.activeIndex
            ? styles["showcase__slide--active"]
            : props.index < props.activeIndex
            ? styles["showcase__slide--prev"]
            : "",
        !!props.item.source && styles["showcase__slide--video"],
    ].filter((c) => c);

    const imageLoadHandler = useCallback(() => {
        if (props.onLoad) props.onLoad();
    }, [props.onLoad]);

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
                    <ShowcasePicture path={props.item.path!} alt={props.item.alt!} onLoad={imageLoadHandler} />
                )}
            </div>
        </div>
    );
}

export default ShowcaseSlide;
