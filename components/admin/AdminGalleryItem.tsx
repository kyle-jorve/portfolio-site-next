import Link from "next/link";
import { GalleryItemType } from "../../hooks/data/gallery-data";
import useThumbnailConfig from "../../hooks/thumbnail-config";
import styles from "../../styles/layout/Admin.module.css";

export default function AdminGalleryItem(props: GalleryItemType) {
    const mediaConfig = useThumbnailConfig({
        isNew: false,
        thumbnailKey: props.thumbnailKey,
    });
    const mobileImgSrc = mediaConfig.mobile.url;

    return (
        <article className={styles["media-grid__item"]}>
            <Link className={styles["media-grid__item-link"]} href="#">
                <picture>
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
                </picture>

                <h3 className={styles["media-grid__item-title"]}>{props.title}</h3>
            </Link>
        </article>
    );
}
