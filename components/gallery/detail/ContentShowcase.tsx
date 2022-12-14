import Neighbors from "./Neighbors";
import { GalleryItemType } from "../../../data/gallery-data";
import styles from "../../../styles/components/Showcase.module.css";

type ContentShowcaseProps = {
    item: GalleryItemType;
} & React.PropsWithChildren;

export default function ContentShowcase(props: ContentShowcaseProps) {
    return (
        <div className={styles["showcase__content-cont"]}>
            <div className={`${styles["showcase__content"]} wrapper wrapper--content`}>
                <h1 className={`underline ${styles["showcase__title"]}`}>{props.item.title}</h1>

                {props.children}

                {(!!props.item.purchaseLink || !!props.item.downloadLink) && (
                    <div className={styles["showcase__buttons"]}>
                        {!!props.item.purchaseLink && (
                            <a
                                className="button button--primary button--shop"
                                href={props.item.purchaseLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Print
                            </a>
                        )}

                        {!!props.item.downloadLink && (
                            <a
                                className="button button--primary button--download"
                                href={props.item.downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Digital
                            </a>
                        )}
                    </div>
                )}

                <Neighbors item={props.item} />
            </div>
        </div>
    );
}
