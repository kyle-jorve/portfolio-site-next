import { useState, useEffect } from "react";
import { GalleryGridProps } from "../../../types/gallery-types";
import GalleryItem from "./GalleryItem";
import styles from "../../../styles/components/Gallery.module.css";

const breakpoints = [0, 640, 1024];
let timeout: ReturnType<typeof setTimeout>;

export default function GalleryGrid({
	items,
	className = "",
	...otheProps
}: GalleryGridProps) {
	const [breakpoint, setBreakpoint] = useState(
		breakpoints.map((_, i) => i === 0),
	);
	const classes = [
		...className.trim().split(" "),
		styles["gallery__grid"],
		breakpoint[0] && styles["gallery__grid--level-1"],
		breakpoint[1] && styles["gallery__grid--level-2"],
		breakpoint[2] && styles["gallery__grid--level-3"],
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		let resizeFn: EventListenerOrEventListenerObject;

		function resizeHandler() {
			if (window.innerWidth >= breakpoints[2]) {
				setBreakpoint([false, false, true]);
				return;
			}

			if (window.innerWidth >= breakpoints[1]) {
				setBreakpoint([false, true, false]);
				return;
			}

			setBreakpoint([true, false, false]);
		}

		resizeHandler();

		["resize", "orientationchange"].forEach((ev) =>
			window.addEventListener(
				ev,
				(resizeFn = () => {
					if (timeout) clearTimeout(timeout);

					timeout = setTimeout(resizeHandler, 200);
				}),
			),
		);

		return () => {
			["resize", "orientationchange"].forEach((ev) =>
				window.removeEventListener(ev, resizeFn),
			);
		};
	}, []);

	return (
		<div
			className={classes}
			{...otheProps}
		>
			{items.map((item, index) => {
				return (
					<GalleryItem
						key={`${item.name}-${index}`}
						name={item.name}
						title={item.title}
						year={item.year}
						thumb={item.thumb}
						isNew={item.isNew}
					/>
				);
			})}
		</div>
	);
}
