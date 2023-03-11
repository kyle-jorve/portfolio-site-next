import { NewBadgeProps } from "../../types/gallery-types";

export default function NewBadge({
	className = "",
	...otherProps
}: NewBadgeProps) {
	const classes = ["new-badge", ...className.trim().split(" ")]
		.filter((c) => c?.length)
		.join(" ");

	return (
		<span
			className={classes}
			{...otherProps}
		>
			New
		</span>
	);
}
