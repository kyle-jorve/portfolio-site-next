import { items as galleryItems } from '../../../data/gallery-data';
import { slideshowLimit } from '../../../data/home-data';
import Glide from '@glidejs/glide';
import FeaturedItem from './FeaturedItem';
import '@glidejs/glide/dist/css/glide.core.min.css';
import styles from '../../styles/components/FeaturedWork.module.css';

export default function FeaturedWork() {
	const featuredItems = galleryItems.filter(item => item.featured).slice(0, slideshowLimit);

	return (
		<section className={styles.featured} id="featured-work">
			<h2 className={`underline ${styles['featured__title']}`}>
				Featured Work
			</h2>

			<div className={`glide ${styles['featured__slider-cont']}`}>
				<div className="glide__track" data-glide-el="track">
					<div className={`glide__slides ${styles['featured__slider']}`}>
						{
							featuredItems.map(item => {
								return (
									<FeaturedItem
										key={item.name}
										name={item.name}
										title={item.title}
										year={item.year}
										thumbKey={item.thumbnailKey.path}
										alt={item.thumbnailKey.alt}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
		</section>
	)
}