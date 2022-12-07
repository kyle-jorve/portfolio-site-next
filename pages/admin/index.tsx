import fs from "fs";
import path from "path";
import useGalleryData from "../../hooks/data/gallery-data";
import AdminGalleryItem from "../../components/admin/AdminGalleryItem";
import AddMediaItemForm from "../../components/admin/AddMediaItemForm";
import styles from "../../styles/layout/Admin.module.css";

type AdminProps = {
    dirs: {
        dir: string;
        files: string[];
    }[];
};

export default function Admin(props: AdminProps) {
    // const galleryData = useGalleryData();

    return (
        <section className="section">
            <div className="wrapper wrapper--wide">
                <h1 className="underline">Media Gallery</h1>

                {/* <AddMediaItemForm /> */}

                <div className={styles["media"]}>
                    {props.dirs.map((dir, index) => {
                        return (
                            <div key={index} className={styles["media-row"]}>
                                <h2 className={styles["media-row__title"]}>{dir.dir}</h2>

                                <div className={styles["media-grid"]}>
                                    {dir.files.map((file, index) => {
                                        return <AdminGalleryItem key={index} dir={dir.dir} src={file} />;
                                    })}
                                </div>
                            </div>
                        );
                    })}

                    {/* {galleryData.items.map((item, index) => {
                        return (
                            <AdminGalleryItem
                                key={index}
                                name={item.name}
                                title={item.title}
                                thumbnailKey={item.thumbnailKey}
                                orientation={item.orientation}
                            />
                        );
                    })} */}
                </div>
            </div>
        </section>
    );
}

export async function getStaticProps() {
    const parentDir = path.join(process.cwd(), "public", "gallery");
    let dirs: any = fs.readdirSync(parentDir);

    dirs = dirs.map((dir: any) => {
        const files = fs.readdirSync(`${parentDir}/${dir}`);

        return {
            dir,
            files,
        };
    });

    return {
        props: {
            dirs,
        },
    };
}
