import { Fragment } from "react";
import styles from "../../styles/components/CV.module.css";

type CVItemProps = {
    title: string;
    content: JSX.Element;
    showHR: boolean;
};

function CVItem(props: CVItemProps) {
    return (
        <Fragment>
            <div>
                <h3 className={styles["resume__item-title"]}>{props.title}</h3>

                {props.content}
            </div>
            {props.showHR && <hr className={styles["resume__hr"]} />}
        </Fragment>
    );
}

export default CVItem;
