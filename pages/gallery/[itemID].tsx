import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import getGalleryData from "../../data/gallery-data";
import MediaShowcase from "../../components/gallery/detail/MediaShowcase";
import ContentShowcase from "../../components/gallery/detail/ContentShowcase";
import Custom404 from "../404";
import styles from "../../styles/components/Showcase.module.css";

export default function GalleryDetail() {
    const galleryData = getGalleryData();
    const router = useRouter();
    const itemID = router.query.itemID;
    const galleryItem = galleryData.items.find((item) => item.name === itemID);

    if (!galleryItem) {
        return <Custom404 />;
    }

    return (
        <Fragment>
            <Head>
                <title key="title">{galleryItem.title} by Kyle Jorve | Illustration and Design</title>
                <meta property="og:image" content={galleryItem.thumbnailKey.path} key="meta-image" />
            </Head>
            <section className={styles.showcase}>
                <MediaShowcase item={galleryItem} />

                <ContentShowcase item={galleryItem}>{!!galleryItem?.content && galleryItem.content}</ContentShowcase>
            </section>
        </Fragment>
    );
}
