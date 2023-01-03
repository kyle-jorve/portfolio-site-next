import { projectCategories, characterCategories, categoryNames } from "../../hooks/data/gallery-data";
import styles from "../../styles/components/FilterModal.module.css";

type FilterModalProps = {
    active: boolean;
    filters: typeof categoryNames;
    onFilterClick: React.MouseEventHandler;
    onClearFilters: React.MouseEventHandler;
    onApplyFilters: React.MouseEventHandler;
    onClose: React.MouseEventHandler;
};

export default function FilterModal(props: FilterModalProps) {
    const classes = [styles["filter-modal"], props.active && styles["filter-modal--active"]].filter((c) => c);

    return (
        <div className={classes.join(" ")} aria-hidden={!props.active}>
            <div className={styles["filter-modal__box"]}>
                <h2 className={`underline ${styles["filter-modal__title"]}`}>Filters</h2>

                <button
                    className={`close-button ${styles["filter-modal__close"]}`}
                    aria-label="close filter modal"
                    onClick={props.onClose}
                ></button>

                <div className={styles["filter-modal__content"]}>
                    <div className={styles["filter-modal__block"]}>
                        <h3 className={styles["filter-modal__subtitle"]}>Projects</h3>
                        <div className={styles["filter-modal__grid"]}>
                            {projectCategories.map((cat) => {
                                const classes = [
                                    styles["filter-modal__filter"],
                                    props.filters.some((f) => f === cat.name) && styles["filter-modal__filter--active"],
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
                                    >
                                        <span className={styles["filter-modal__filter-icon"]} aria-hidden="true"></span>

                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles["filter-modal__block"]}>
                        <h3 className={styles["filter-modal__subtitle"]}>Characters</h3>

                        <div className={styles["filter-modal__grid"]}>
                            {characterCategories.map((cat) => {
                                const classes = [
                                    styles["filter-modal__filter"],
                                    props.filters.some((f) => f === cat.name) && styles["filter-modal__filter--active"],
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
                                    >
                                        <span className={styles["filter-modal__filter-icon"]} aria-hidden="true"></span>

                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles["filter-modal__buttons"]}>
                    <button className="button button--secondary button--mid" onClick={props.onClearFilters}>
                        Clear All
                    </button>

                    <button className="button button--primary button--mid" onClick={props.onApplyFilters}>
                        Apply
                    </button>
                </div>
            </div>

            <div className={styles["filter-modal__overlay"]} aria-hidden="true" onClick={props.onClose}></div>
        </div>
    );
}
