// import useGalleryData from "../hooks/data/gallery-data";
// import { useParams } from "react-router-dom";
// import MediaShowcase from "../components/gallery-detail/MediaShowcase";
// import ContentShowcase from "../components/gallery-detail/ContentShowcase";
// import styles from "../components/gallery-detail/Showcase.module.css";
// import NotFound from "./NotFound";
import useGalleryData from "../../hooks/data/gallery-data";
import { useRouter } from "next/router";
import MediaShowcase from "../../components/gallery/detail/MediaShowcase";
import ContentShowcase from "../../components/gallery/detail/ContentShowcase";
import Custom404 from "../404";
import styles from "../../styles/components/Showcase.module.css";

export default function GalleryDetail() {
    const galleryData = useGalleryData();
    // const params = useParams();
    const router = useRouter();
    // const itemID = params.itemID;
    // const galleryItem = galleryData.items.find((item) => item.name === itemID);

    // if (!galleryItem) {
    return <Custom404 />;
    // }

    // return (
    //     <section className={styles.showcase}>
    //         <MediaShowcase item={galleryItem} />

    //         <ContentShowcase item={galleryItem}>{!!galleryItem?.content && galleryItem.content}</ContentShowcase>
    //     </section>
    // );
}
