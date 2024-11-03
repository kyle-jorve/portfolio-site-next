import { Fragment } from "react";
import { CVItemProps } from "../../types/cv-types";
import styles from "../../styles/components/CV.module.css";

export default function CVItem({
	title,
	content,
	showHR = true,
	...otherProps
}: CVItemProps) {
	return (
		<>
			<div {...otherProps}>
				<h3 className={styles["resume__item-title"]}>{title}</h3>

				{content}
			</div>
			{showHR && <hr className={styles["resume__hr"]} />}
		</>
	);
}
