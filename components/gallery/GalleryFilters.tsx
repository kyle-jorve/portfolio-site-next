import { projectCategories, characterCategories, categoryNames } from "../../hooks/data/gallery-data";
import styles from "../../styles/components/Filters.module.css";

type FilterModalProps = {
    active: boolean;
    filters: typeof categoryNames;
    onFilterClick: React.MouseEventHandler;
    onClearFilters: React.MouseEventHandler;
    onToggleFilters: React.MouseEventHandler;
};

export default function GalleryFilters(props: FilterModalProps) {
    const classes = [styles.filters, props.active && styles["filters--active"]].filter((c) => c);

    return (
        <div className={classes.join(" ")}>
            <div className={styles["filters__buttons-row"]}>
                <button
                    className={`${styles["filters__button"]} ${styles["filters__button--clear"]}${
                        props.filters.length === 0 ? " button--hide" : ""
                    }`}
                    onClick={props.onClearFilters}
                    aria-hidden={props.filters.length === 0}
                    tabIndex={props.filters.length === 0 ? -1 : undefined}
                >
                    Clear All Filters
                </button>

                <button
                    className={`${styles["filters__button"]}${
                        props.active ? ` ${styles["filters__button--active"]}` : ""
                    }`}
                    aria-label="Filter gallery"
                    aria-controls="filters"
                    aria-expanded={props.active}
                    onClick={props.onToggleFilters}
                >
                    Filters
                </button>
            </div>

            <div className={styles["filters__tooltip"]} id="filters" aria-hidden={!props.active}>
                <div className={styles["filters__block"]}>
                    <h2 className={styles["filters__title"]}>Projects</h2>
                    <div className={styles["filters__grid"]}>
                        {projectCategories.map((cat) => {
                            const classes = [
                                styles["filters__filter"],
                                props.filters.some((f) => f === cat.name) && styles["filters__filter--active"],
                            ].filter((c) => c);

                            return (
                                <button
                                    key={cat.name}
                                    className={classes.join(" ")}
                                    onClick={props.onFilterClick}
                                    data-cat={cat.name}
                                    aria-label={`${props.filters.some((f) => f === cat.name) ? "remove" : "add"} ${
                                        cat.label
                                    } filter`}
                                    tabIndex={props.active ? undefined : -1}
                                >
                                    <span className={styles["filters__filter-icon"]} aria-hidden="true"></span>

                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className={styles["filters__block"]}>
                    <h3 className={styles["filters__title"]}>Characters</h3>

                    <div className={styles["filters__grid"]}>
                        {characterCategories.map((cat) => {
                            const classes = [
                                styles["filters__filter"],
                                props.filters.some((f) => f === cat.name) && styles["filters__filter--active"],
                            ].filter((c) => c);

                            return (
                                <button
                                    key={cat.name}
                                    className={classes.join(" ")}
                                    onClick={props.onFilterClick}
                                    data-cat={cat.name}
                                    aria-label={`${props.filters.some((f) => f === cat.name) ? "remove" : "add"} ${
                                        cat.label
                                    } filter`}
                                    tabIndex={props.active ? undefined : -1}
                                >
                                    <span className={styles["filters__filter-icon"]} aria-hidden="true"></span>

                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
