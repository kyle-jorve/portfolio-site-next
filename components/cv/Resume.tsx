import { useContext } from "react";
import SiteContext from "../../context/global";
import CVItem from "./CVItem";
import { ResumeProps } from "../../types/cv-types";
import CustomLink from "../layout/link/CustomLink";
import styles from "../../styles/components/CV.module.css";

export default function Resume(props: ResumeProps) {
	const siteContext = useContext(SiteContext);
	const resume = props.resume.docUrl;

	return (
		<section
			className={`section ${styles.resume}`}
			id="resume"
			{...props}
		>
			<div className="wrapper wrapper--content">
				<div className={styles["resume__title-row"]}>
					<h2
						className={`underline underline--center ${styles["resume__title"]}`}
					>
						R&eacute;sum&eacute;
					</h2>

					<div className={styles["resume__button-cont"]}>
						<CustomLink
							className="button button--primary button--download"
							to={resume}
							download
							tabIndex={
								siteContext.navOpen ? -1 : undefined
							}
						>
							Download
						</CustomLink>
					</div>
				</div>

				{props.resume.items.map((item, index) => {
					return (
						<CVItem
							key={index}
							title={item.heading}
							content={item.content}
							showHR={
								index + 1 < props.resume.items.length
							}
						/>
					);
				})}
			</div>
		</section>
	);
}
