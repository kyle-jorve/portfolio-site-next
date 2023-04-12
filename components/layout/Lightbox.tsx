import { useContext, useEffect, useRef } from "react";
import SiteContext from "../../context/global";
import { LightboxProps } from "../../types/global-types";
import styles from "../../styles/layout/Lightbox.module.css";

export default function Lightbox({ className = "", ...props }: LightboxProps) {
	const context = useContext(SiteContext);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const classes = [
		...className.trim().split(" "),
		styles.lightbox,
		(context.lightboxStatus === "open" ||
			context.lightboxStatus === "out") &&
			styles["lightbox--active"],
		context.lightboxStatus === "out" && styles["lightbox--out"],
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		if (context.lightboxStatus === "open") {
			const target = buttonRef.current as HTMLButtonElement;

			target.focus();
		}
	}, [context.lightboxStatus]);

	if (!context.lightboxContent) return null;

	return (
		<div
			className={classes}
			{...props}
		>
			<div className={styles["lightbox__box"]}>
				<button
					className={`close-button ${styles["lightbox__close-button"]}`}
					aria-label="close lightbox"
					onClick={() => context.closeLightbox()}
					ref={buttonRef}
				></button>
				<div className={styles["lightbox__box-inner"]}>
					{context.lightboxContent}
				</div>
			</div>

			<div
				className={styles["lightbox__overlay"]}
				aria-hidden={true}
				onClick={() => context.closeLightbox()}
			></div>
		</div>
	);
}
