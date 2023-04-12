import { NeighborsProps } from "../../../types/gallery-types";
import Neighbor from "./Neighbor";
import styles from "../../../styles/components/Showcase.module.css";

export default function Neighbors({
	prev = undefined,
	next = undefined,
	className = "",
	...otherProps
}: NeighborsProps) {
	const classes = [styles.neighbors, ...className.trim().split(" ")]
		.filter((c) => c)
		.join(" ");

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{!!prev && (
				<Neighbor
					name={prev.name}
					title={prev.title}
					thumb={prev.thumb}
					direction={"prev"}
				/>
			)}

			{!!next && (
				<Neighbor
					name={next.name}
					title={next.title}
					thumb={next.thumb}
					direction={"next"}
				/>
			)}
		</div>
	);
}
