import React, { useRef, useEffect } from "react";
import useGalleryData from "../../hooks/data/gallery-data";
import styles from "../../styles/layout/Admin.module.css";

export default function AddMediaItemForm() {
    const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const orientationRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
    const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        fetch("/api/gallery-data")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
            });
    }, []);

    function formSubmitHandler(event: React.FormEvent) {
        const data: {
            name: string;
            title: string;
            orientation: string;
        } = {
            name: nameRef.current.value,
            title: titleRef.current.value,
            orientation: orientationRef.current.value,
        };
        const valid =
            !!data.name.length && !!data.title.length && !!data.orientation.length && !!imageRef.current.value.length;
        let filesLoaded = 0;
        let files: File[];
        let mediaBody: {
            name: string;
            files: any[];
        };

        event.preventDefault();

        if (!valid) {
            alert("Form invalid. Please complete all the input fields.");
            return;
        }

        if (imageRef.current.files?.length) {
            files = Array.from(imageRef.current.files);
            mediaBody = {
                name: data.name,
                files: [],
            };

            Promise.all(
                files.map((file) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();

                        reader.readAsDataURL(file);

                        reader.addEventListener("load", () => {
                            mediaBody.files.push({
                                fileName: file.name,
                                type: file.type,
                                base64: reader.result?.toString().split("base64,")[1],
                            });

                            resolve(true);
                        });
                    });
                }),
            ).then(() => {
                fetch("/api/gallery-media", {
                    method: "POST",
                    body: JSON.stringify(mediaBody),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
            });
        }

        // fetch("/api/gallery-data", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     });
    }

    return (
        <form className={styles["media-form"]} onSubmit={formSubmitHandler}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" ref={nameRef} />
            </div>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" ref={titleRef} />
            </div>
            <div className="field">
                <label htmlFor="orientation">Orientation</label>
                <select id="orientation" ref={orientationRef}>
                    <option value="center">Center</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="upload">Image</label>
                <input type="file" id="upload" accept=".jpg,.jpeg,.png" multiple ref={imageRef} />
            </div>

            <div className="field field--submit">
                <button className="button button--primary button--small" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}
