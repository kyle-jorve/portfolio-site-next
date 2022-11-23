import { Fragment, useContext, useEffect } from "react";
import SiteContext from "../../../context/global";
import ShowcaseSlide from "./ShowcaseSlide";
import ShowcasePicture from "./ShowcasePicture";
import { GalleryItemType } from "../../../hooks/data/gallery-data";
import styles from "../../../styles/components/Showcase.module.css";

type MediaShowcaseProps = {
    item: GalleryItemType;
};

export default function MediaShowcase(props: MediaShowcaseProps) {
    const context = useContext(SiteContext);
    const item = props.item;
    const slidesLength = item.detailKeys?.length;
    const imagesLength = item.detailKeys?.filter((key) => !key.source).length;
    let imagesLoaded = 0;

    useEffect(() => {
        return () => {
            context.setImagesLoaded(false);
        };
    });

    function imageLoadHandler() {
        imagesLoaded++;

        if (imagesLoaded === imagesLength) {
            context.setImagesLoaded(true);
        }
    }

    function dotClickHandler(event: React.MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        const index = Number(target.dataset.index);

        context.goToSlide(index);
    }

    function arrowClickHandler(event: React.MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        const isPrev = target.dataset.direction === "prev";

        if (isPrev) {
            context.goToPrevSlide(slidesLength);
        } else {
            context.goToNextSlide(slidesLength);
        }
    }

    return (
        <div className={styles["showcase__media"]}>
            <div className={styles["showcase__slider"]}>
                {item.detailKeys?.map((key, index) => {
                    const zIndex = item.detailKeys && item.detailKeys.length - index + 1;

                    return (
                        <ShowcaseSlide
                            key={index}
                            index={index}
                            activeIndex={context.activeSlideIndex}
                            zIndex={zIndex || undefined}
                            item={key}
                            onLoad={imageLoadHandler}
                        />
                    );
                })}
            </div>

            {item.detailKeys && item.detailKeys.length > 1 && (
                <Fragment>
                    <div className={styles["slider__arrows"]}>
                        <button
                            onClick={arrowClickHandler}
                            className={`${styles["slider__arrow"]} ${styles["slider__arrow--prev"]}`}
                            data-direction="prev"
                        ></button>

                        <button
                            onClick={arrowClickHandler}
                            className={`${styles["slider__arrow"]} ${styles["slider__arrow--next"]}`}
                            data-direction="next"
                        ></button>
                    </div>

                    <div className={styles["slider__dots"]}>
                        {item.detailKeys.map((key, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={dotClickHandler}
                                    className={`${styles["slider__dot"]}${
                                        index === context.activeSlideIndex ? ` ${styles["slider__dot--active"]}` : ""
                                    }`}
                                    data-index={index}
                                ></button>
                            );
                        })}
                    </div>
                </Fragment>
            )}

            <div className={styles["showcase__bg"]} aria-hidden="true">
                <ShowcasePicture path={item.detailKeys?.[0]?.path} alt="" />
            </div>
        </div>
    );
}
