import { useContext } from "react";
import Image from "next/image";
import SiteContext from "../../context/global";
import CustomLink from "../layout/CustomLink";
import useThumbnailConfig from "../../hooks/thumbnail-config";
import styles from "../../styles/components/Gallery.module.css";
import { GalleryItemType } from "../../data/gallery-data";

type GalleryItemProps = GalleryItemType & {
    className: string;
    fromPage: string | null;
    fromSection: string | null;
    isNew?: boolean;
    isFeatured?: boolean;
    attributes: {
        tabIndex: number | undefined;
    };
    style: {
        [prop: string]: string;
    };
};

export default function GalleryItem(props: GalleryItemProps) {
    const siteContext = useContext(SiteContext);
    const imageSizes = useThumbnailConfig({
        isNew: (!props.isFeatured && props.isNew) || false,
        isFeatured: props.isFeatured || false,
    });
    const classes = [styles["gallery__item"], props.isNew && styles["gallery__item--new"], props.className].filter(
        (c) => c,
    );

    function galleryItemClickHandler() {
        setTimeout(() => {
            siteContext.closeNav();

            if (props.fromPage) {
                siteContext.setFromPage(props.fromPage);
            }

            if (props.fromSection) {
                siteContext.setFromSection(props.fromSection);
            } else {
                siteContext.setFromSection(null);
            }
        }, siteContext.longTransitionDuration);
    }

    return (
        <article className={classes.join(" ")} style={props.style}>
            {props.isNew ? <span className={styles["gallery__new-badge"]}>New</span> : ""}

            <CustomLink
                className={styles["gallery__item-link"]}
                to={`/gallery/${props.name}`}
                onClick={galleryItemClickHandler}
                attributes={props.attributes}
            >
                <Image
                    className={`img--lazy ${styles["gallery__img"]}`}
                    src={props.thumbnailKey.path}
                    alt={props.thumbnailKey.alt}
                    fill
                    onLoad={(event) => event.currentTarget.classList.add("loaded")}
                    style={{
                        objectPosition: `center ${props.orientation}`,
                    }}
                    sizes={imageSizes}
                />

                <h3 className={styles["gallery__item-title"]}>{props.title}</h3>
            </CustomLink>
        </article>
    );
}
