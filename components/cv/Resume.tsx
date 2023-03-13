import { ResumeProps } from "../../types/cv-types";
import { resume } from "../../data/cv-data";
import CustomLink from "../layout/link/CustomLink";
import styles from "../../styles/components/Resume.module.css";

export default function Resume({ className = "", ...otherProps }: ResumeProps) {
	const classes = ["section", "swoops", "swoops--right", styles["resume"], ...className.trim().split(" ")]
		.filter((c) => c)
		.join(" ");

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<div className="wrapper wrapper--content">
				<div className="title-row">
					<h2 className="underline">R&eacute;sum&eacute;</h2>

					<CustomLink
						className="button button--primary button--download"
						to={resume.docUrl}
						download
					>
						Download
					</CustomLink>
				</div>

				<div className={styles["resume__grid"]}>
					{resume.items.map((item) => {
						return (
							<div
								key={item.name}
								className={`content-box ${styles["resume__item"]}`}
							>
								<h3>{item.heading}</h3>

								<div className={styles["resume__subgrid"]}>
									{item.subItems.map((subitem, index) => {
										const hasTitle =
											!!subitem.period ||
											!!subitem.position ||
											!!subitem.company ||
											!!subitem.title;

										return (
											<div
												key={`${item.name}-subitem-${index}`}
												className={styles["resume__subitem"]}
											>
												{hasTitle && (
													<h4 className={styles["resume__subitem-title"]}>
														{!!subitem.period && subitem.period}
														{!!subitem.position && (
															<div>
																<span className={styles["resume__highlight"]}>
																	{subitem.position}
																</span>
															</div>
														)}
														{!!subitem.company && subitem.company}
														{!!subitem.title && (
															<div>
																<span className={styles["resume__highlight"]}>
																	{subitem.title}
																</span>
															</div>
														)}
													</h4>
												)}

												{!!subitem.content && (
													<div className={styles["resume__content"]}>{subitem.content}</div>
												)}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
