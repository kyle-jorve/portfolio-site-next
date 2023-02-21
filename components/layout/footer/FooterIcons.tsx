import { socialIcons } from "../../../data/global-data";
import styles from "../../../styles/layout/Social.module.css";

export default function FooterIcons() {
	const icons = [
		...socialIcons.standard.map(icon => {
			return {
				...icon,
				type: 'standard'
			}
		}),
		...socialIcons.commerce.map(icon => {
			return {
				...icon,
				type: 'commerce'
			}
		}),
	];

	return (
		<div className={styles.social}>
			{
				icons.map(icon => {
					const classes = [
						styles['social__icon'],
						styles[`social__icon--${icon.name}`],
						styles[`social__icon--${icon.type}`]
					].filter(c => c).join(' ');

					return (
						<a
							key={icon.name}
							className={classes}
							href={icon.url}
							target="_blank"
							rel="noreferrer"
							aria-label={`link to Kyle's ${icon.label}`}
						></a>
					)
				})
			}
		</div>
	)
}