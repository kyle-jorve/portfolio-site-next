import { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import Jimp from "jimp";
import useGalleryData from "../../hooks/data/gallery-data";
import AdminGalleryItem from "../../components/admin/AdminGalleryItem";
import AddMediaItemForm from "../../components/admin/AddMediaItemForm";
import styles from "../../styles/layout/Admin.module.css";

type AdminProps = {
    dirs: {
        dir: string;
        files: string[];
    }[];
    image: string;
};

export default function Admin(props: AdminProps) {
    // const [base64Image, setBase64Image] = useState("");
    // const galleryData = useGalleryData();

    console.log(props);

    // useEffect(() => {
    //     Jimp.read(`/gallery/${props.dirs[0].dir}/${props.dirs[0].files[props.dirs[0].files.length - 1]}`).then(
    //         async (image) => {
    //             const clone = image.clone();
    //             const newImage = clone.resize(300, Jimp.AUTO).quality(70);
    //             const base64 = await newImage.getBase64Async(newImage.getMIME());

    //             setBase64Image(base64);
    //         },
    //     );
    // }, []);

    return (
        <section className="section">
            <div className="wrapper wrapper--wide">
                <h1 className="underline">Media Gallery</h1>

                {/* {!!base64Image.length && <img src={base64Image} alt="" />} */}

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

    // const image = await Jimp.read(`${parentDir}\\${dirs[0].dir}\\${dirs[0].files[dirs[0].files.length - 1]}`).then(
    //     async (image) => {
    //         const clone = image.clone();
    //         const newImage = clone.resize(800, Jimp.AUTO).quality(70);
    //         const base64 = await newImage.getBase64Async(newImage.getMIME());

    //         return base64;
    //     },
    // );

    return {
        props: {
            dirs,
            // image: image,
        },
    };
}
