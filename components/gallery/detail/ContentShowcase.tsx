import Neighbors from "./Neighbors";
import { GalleryItemType } from "../../../data/gallery-data";
import CustomLink from "../../layout/link/CustomLink";
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
                            <CustomLink
                                className="button button--primary button--shop"
                                to={props.item.purchaseLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Print
                            </CustomLink>
                        )}

                        {!!props.item.downloadLink && (
                            <CustomLink
                                className="button button--primary button--download"
                                to={props.item.downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Digital
                            </CustomLink>
                        )}
                    </div>
                )}

                <Neighbors item={props.item} />
            </div>
        </div>
    );
}
