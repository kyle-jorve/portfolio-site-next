import React, { useRef, useEffect } from "react";
import useGalleryData from "../../hooks/data/gallery-data";
import styles from "../../styles/layout/Admin.module.css";

export default function AddMediaItemForm() {
    const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const orientationRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
    const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        fetch("/api/gallery")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    function formSubmitHandler(event: React.FormEvent) {
        const data = {
            name: nameRef.current.value,
            title: titleRef.current.value,
            orientation: orientationRef.current.value,
            image: imageRef.current.value,
        };
        const valid = !!data.name.length && !!data.title.length && !!data.orientation.length && !!data.image.length;

        event.preventDefault();

        console.log(data);
        console.log(data.image.split("\\")[data.image.split("\\").length - 1]);

        if (!valid) {
            alert("Form invalid. Please complete all the input fields.");
            return;
        }

        fetch("/api/gallery", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
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
                <input type="file" id="upload" ref={imageRef} />
            </div>

            <div className="field field--submit">
                <button className="button button--primary button--small" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}
