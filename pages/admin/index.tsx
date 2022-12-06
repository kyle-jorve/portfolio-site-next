import React, { useRef } from "react";
import useGalleryData from "../../hooks/data/gallery-data";
import AdminGalleryItem from "../../components/admin/AdminGalleryItem";
import AddMediaItemForm from "../../components/admin/AddMediaItemForm";
import styles from "../../styles/layout/Admin.module.css";

export default function Admin() {
    const galleryData = useGalleryData();

    return (
        <section className="section">
            <div className="wrapper wrapper--wide">
                <h1 className="underline">Media Gallery</h1>

                <AddMediaItemForm />

                <div className={styles["media-grid"]}>
                    {galleryData.items.map((item, index) => {
                        return (
                            <AdminGalleryItem
                                key={index}
                                name={item.name}
                                title={item.title}
                                thumbnailKey={item.thumbnailKey}
                                orientation={item.orientation}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
