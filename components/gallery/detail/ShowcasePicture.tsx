import { useCallback } from "react";
import useDetailImageConfig from "../../../hooks/detail-image-config";
import styles from "../../../styles/components/Showcase.module.css";

type ShowcasePictureProps = {
    path?: string;
    alt?: string;
    onLoad?: Function;
};

function ShowcasePicture(props: ShowcasePictureProps) {
    const config = useDetailImageConfig(props.path ? props.path : false);
    const imgSrc = config ? config.mobile.url : undefined;

    const handleImageLoad = useCallback(
        (event: React.SyntheticEvent) => {
            const target = event.currentTarget as HTMLImageElement;

            target?.classList.add("loaded");

            if (props.onLoad) props.onLoad();
        },
        [props.onLoad],
    );

    return (
        <picture>
            {!!config &&
                config.sources.map((src, index) => {
                    const srcset = src.url;

                    return <source key={index} srcSet={srcset} media={`(min-width: ${src.minScreenWidth}px)`} />;
                })}

            <img
                className={`img--lazy ${styles["showcase__img"]}`}
                src={imgSrc}
                alt={props.alt}
                loading="eager"
                onLoad={handleImageLoad}
            />
        </picture>
    );
}

export default ShowcasePicture;
