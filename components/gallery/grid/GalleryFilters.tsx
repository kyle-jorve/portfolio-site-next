import { useState, useEffect, useRef } from "react";
import {
	projectCategories,
	characterCategories,
	GalleryFiltersProps,
} from "../../../types/gallery-types";
import Button from "../../layout/Button";
import styles from "../../../styles/components/Filters.module.css";

export default function GalleryFilters({
	activeFilters,
	onFilterClick,
	onClearFilters,
	className = "",
	...otherProps
}: GalleryFiltersProps) {
	const [active, setActive] = useState(false);
	const expandFiltersRef = useRef<HTMLButtonElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);
	const classes = [
		styles.filters,
		active && styles["filters--active"],
		...className.trim().split(" "),
	]
		.filter((c) => c)
		.join(" ");

	useEffect(() => {
		function closeFilters(event: MouseEvent) {
			const target = event.target as HTMLElement;
			const targetIsFilters =
				target === expandFiltersRef.current ||
				target === tooltipRef.current ||
				expandFiltersRef.current?.contains(target) ||
				tooltipRef.current?.contains(target);

			if (active && !targetIsFilters) setActive(false);
		}

		document.addEventListener("click", closeFilters);

		return () => {
			document.removeEventListener("click", closeFilters);
		};
	}, [active]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<div className={styles["filters__buttons-row"]}>
				<Button
					className={`${styles["filters__button"]} ${
						styles["filters__button--clear"]
					}${activeFilters.length === 0 ? " button--hide" : ""}`}
					onClick={onClearFilters}
					aria-hidden={activeFilters.length === 0}
					tabIndex={activeFilters.length === 0 ? -1 : undefined}
				>
					Clear All Filters
				</Button>

				<Button
					className={`${styles["filters__button"]}${
						active ? ` ${styles["filters__button--active"]}` : ""
					}`}
					aria-label="Filter gallery"
					aria-controls="filters"
					aria-expanded={active}
					onClick={() => setActive((prev) => !prev)}
					ref={expandFiltersRef}
				>
					Filters
				</Button>
			</div>

			<div
				className={styles["filters__tooltip"]}
				id="filters"
				aria-hidden={!active}
				ref={tooltipRef}
			>
				<div className={styles["filters__block"]}>
					<h2 className={styles["filters__title"]}>Projects</h2>
					<div className={styles["filters__grid"]}>
						{Object.values(projectCategories).map((cat) => {
							const classes = [
								styles["filters__filter"],
								activeFilters.some((f) => f === cat.name) &&
									styles["filters__filter--active"],
							].filter((c) => c);

							return (
								<Button
									key={cat.name}
									className={classes.join(" ")}
									onClick={onFilterClick}
									data-cat={cat.name}
									aria-label={`${
										activeFilters.some(
											(f) => f === cat.name,
										)
											? "remove"
											: "add"
									} ${cat.label} project filter`}
									tabIndex={active ? undefined : -1}
								>
									<span
										className={
											styles["filters__filter-icon"]
										}
										aria-hidden="true"
									></span>

									{cat.label}
								</Button>
							);
						})}
					</div>
				</div>

				<div className={styles["filters__block"]}>
					<h3 className={styles["filters__title"]}>Characters</h3>

					<div className={styles["filters__grid"]}>
						{Object.values(characterCategories).map((cat) => {
							const classes = [
								styles["filters__filter"],
								activeFilters.some((f) => f === cat.name) &&
									styles["filters__filter--active"],
							].filter((c) => c);

							return (
								<Button
									key={cat.name}
									className={classes.join(" ")}
									onClick={onFilterClick}
									data-cat={cat.name}
									aria-label={`${
										activeFilters.some(
											(f) => f === cat.name,
										)
											? "remove"
											: "add"
									} ${cat.label} character filter`}
									tabIndex={active ? undefined : -1}
								>
									<span
										className={
											styles["filters__filter-icon"]
										}
										aria-hidden="true"
									></span>

									{cat.label}
								</Button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
