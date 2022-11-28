import useGalleryData from "../../hooks/data/gallery-data";
import { useRouter } from "next/router";
import MediaShowcase from "../../components/gallery/detail/MediaShowcase";
import ContentShowcase from "../../components/gallery/detail/ContentShowcase";
import Custom404 from "../404";
import styles from "../../styles/components/Showcase.module.css";

export default function GalleryDetail() {
    const galleryData = useGalleryData();
    const router = useRouter();
    const itemID = router.query.itemID;
    const galleryItem = galleryData.items.find((item) => item.name === itemID);

    if (!galleryItem) {
        return <Custom404 />;
    }

    return (
        <section className={styles.showcase}>
            <MediaShowcase item={galleryItem} />

            <ContentShowcase item={galleryItem}>{!!galleryItem?.content && galleryItem.content}</ContentShowcase>
        </section>
    );
}
