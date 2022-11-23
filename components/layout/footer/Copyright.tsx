import styles from "../../../styles/layout/Footer.module.css";

export default function Copyright() {
    return (
        <section className={styles["footer__copyright"]}>
            <div className="wrapper wrapper--content">
                <p>
                    &copy; Copyright 2018-{new Date().getFullYear()} Kyle Jorve. All rights reserved.
                    <br />
                    Website designed and built by Kyle Jorve.
                </p>
            </div>
        </section>
    );
}
