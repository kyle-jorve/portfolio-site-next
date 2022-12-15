import { useContext } from "react";
import Image from "next/image";
import SiteContext from "../../../context/global";
import CustomLink from "../../layout/CustomLink";
import useThumbnailConfig from "../../../hooks/thumbnail-config";
import { GalleryItemType } from "../../../hooks/data/gallery-data";
import styles from "../../../styles/components/Showcase.module.css";

type NeighborProps = {
    item: GalleryItemType;
    direction: string;
};

function truncateTitle(title: string) {
    const titleArr = title.split(" ");
    const maxLength = 22;
    let truncTitle = "";

    for (let i = 0; i < titleArr.length; i++) {
        const word = titleArr[i];
        const isLastWord = i === titleArr.length - 1;

        if (truncTitle.length + word.length <= maxLength) {
            truncTitle += `${word}${isLastWord ? "" : " "}`;
        } else {
            truncTitle = truncTitle.trim();

            if (truncTitle.length < title.length) {
                truncTitle += "...";
            }

            break;
        }
    }

    return truncTitle;
}

export default function Neighbor(props: NeighborProps) {
    const context = useContext(SiteContext);
    const imageSizes = useThumbnailConfig({
        isDetail: true,
        thumbnailKey: props.item.thumbnailKey,
    });
    const neighborClasses = [styles["neighbor"], styles[`neighbor--${props.direction}`]].filter((c) => c);

    return (
        <article className={neighborClasses.join(" ")}>
            <CustomLink
                className={styles["neighbor__link"]}
                to={`/gallery/${props.item.name}`}
                onClick={context.resetSlideIndex}
            >
                <div className={styles["neighbor__img-cont"]}>
                    <Image
                        className={styles["neighbor__img"]}
                        src={`https://kylejorve.com${props.item.thumbnailKey.path}`}
                        alt={props.item.thumbnailKey.alt}
                        fill
                        style={{
                            objectPosition: `center ${props.item.orientation}`,
                        }}
                        sizes={imageSizes}
                    />
                </div>

                <div className={styles["neighbor__inner"]}>
                    <button
                        className={`${styles["neighbor__arrow"]} ${styles[`neighbor__arrow--${props.direction}`]}`}
                        aria-hidden="true"
                        aria-label={`Go to ${props.item.title}`}
                    ></button>

                    <div className={styles["neighbor__content"]}>
                        <h2 className={styles["neighbor__title"]}>{props.direction}</h2>

                        <h3 className={styles["neighbor__subtitle"]}>{truncateTitle(props.item.title)}</h3>
                    </div>
                </div>
            </CustomLink>
        </article>
    );
}
