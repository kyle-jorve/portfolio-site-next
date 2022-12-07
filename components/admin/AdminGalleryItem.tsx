import { useEffect, useState } from "react";
import Link from "next/link";
import { GalleryItemType } from "../../hooks/data/gallery-data";
// import useThumbnailConfig from "../../hooks/thumbnail-config";
import styles from "../../styles/layout/Admin.module.css";

type AdminGalleryItemProps = {
    dir: string;
    src: string;
};

export default function AdminGalleryItem(props: AdminGalleryItemProps) {
    // const [mediaConfig, setMediaConfig] = useState({});
    // const mediaConfig = useThumbnailConfig({
    //     isNew: false,
    //     thumbnailKey: props.thumbnailKey,
    // });
    // const mobileImgSrc = mediaConfig.mobile.url;

    // useEffect(() => {
    //     const media = thumbnailConfig({
    //         fileDir: props.dir,
    //         fileName: props.src,
    //         name: props.src.replace(/\.[^/.]+$/, ""),
    //     });

    //     console.log(media);
    // }, [props.dir, props.src]);

    return (
        <article className={styles["media-grid__item"]}>
            <Link className={styles["media-grid__item-link"]} href="#">
                <img className={styles["media-grid__item-img"]} src={`/gallery/${props.dir}/${props.src}`} alt="" />
                {/*<picture>
                     {mediaConfig.sources.map((src, index) => {
                        const imgSrc = src.url;

                        return <source key={index} srcSet={imgSrc} media={`(min-width: ${src.minScreenWidth}px)`} />;
                    })}

                    <img
                        className={`img--lazy ${styles["media-grid__item-img"]}`}
                        style={{
                            objectPosition: `center ${props.orientation}`,
                        }}
                        src={mobileImgSrc}
                        alt={props.thumbnailKey.alt}
                        loading="lazy"
                        onLoad={(event) => event.currentTarget.classList.add("loaded")}
                    /> 
                </picture>*/}
            </Link>
        </article>
    );
}
