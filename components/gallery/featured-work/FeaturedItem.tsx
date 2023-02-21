import { FeaturedItemProps } from "../../../types/gallery-types";
import useThumbnailConfig from "../../../hooks/thumbnail-config";
import CustomLink from "../../layout/link/CustomLink";
import styles from '../../../styles/components/FeaturedWork.module.css';

export default function FeaturedItem(props: FeaturedItemProps) {
	const classes = [
		styles['featured__slide'],
		props.className,
	].filter(c => c).join(' ');
	const imgConfig = useThumbnailConfig({
		thumbKey: props.thumbKey,
		isFeatured: true,
	});

	return (
		<article
			className={styles['featured__slide']}
		>
			<CustomLink
				to={`/gallery/${props.name}/`}
				className={styles['featured__link']}
			>
				<h2 className={styles['featured__slide-title']}>
					{props.title}
					<small>{props.year}</small>
				</h2>

				<img
					className={styles['featured__image']}
					src={imgConfig.mobile.url}
					alt={props.alt || ''}
					width="332"
					height="218"
				/>
			</CustomLink>
		</article>
	)
}