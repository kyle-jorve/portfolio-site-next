import { Fragment, useContext } from 'react';
import SiteContext from '../../../context/global';
import ShowcaseSlide from './ShowcaseSlide';
import ShowcasePicture from './ShowcasePicture';
import { GalleryItemType } from '../../../data/gallery-data';
import Button from '../../layout/Button';
import styles from '../../../styles/components/Showcase.module.css';

type MediaShowcaseProps = {
	item: GalleryItemType;
};

export default function MediaShowcase(props: MediaShowcaseProps) {
	const context = useContext(SiteContext);
	const item = props.item;
	const slidesLength = item.detailKeys?.length;

	function imageLoadHandler() {
		context.toggleLoader(false);
	}

	function dotClickHandler(event: React.MouseEvent) {
		const target = event.currentTarget as HTMLButtonElement;
		const index = Number(target.dataset.index);

		context.goToSlide(index);
	}

	function arrowClickHandler(event: React.MouseEvent) {
		const target = event.currentTarget as HTMLButtonElement;
		const isPrev = target.dataset.direction === 'prev';

		if (isPrev) {
			context.goToPrevSlide(slidesLength);
		} else {
			context.goToNextSlide(slidesLength);
		}
	}

	return (
		<div className={styles['showcase__media']}>
			<div className={styles['showcase__slider']}>
				{item.detailKeys?.map((key, index) => {
					const zIndex = item.detailKeys && item.detailKeys.length - index + 1;

					return (
						<ShowcaseSlide
							key={index}
							index={index}
							activeIndex={context.activeSlideIndex}
							zIndex={zIndex || undefined}
							item={key}
							width={key.width || undefined}
							height={key.height || undefined}
							onLoad={index === 0 ? imageLoadHandler : undefined}
						/>
					);
				})}
			</div>

			{item.detailKeys && item.detailKeys.length > 1 && (
				<Fragment>
					<div className={styles['slider__arrows']}>
						<Button
							onClick={arrowClickHandler}
							className={`${styles['slider__arrow']} ${styles['slider__arrow--prev']}`}
							data-direction="prev"
						></Button>

						<Button
							onClick={arrowClickHandler}
							className={`${styles['slider__arrow']} ${styles['slider__arrow--next']}`}
							data-direction="next"
						></Button>
					</div>

					<div className={styles['slider__dots']}>
						{item.detailKeys.map((key, index) => {
							return (
								<Button
									key={index}
									onClick={dotClickHandler}
									className={`${styles['slider__dot']}${
										index === context.activeSlideIndex
											? ` ${styles['slider__dot--active']}`
											: ''
									}`}
									data-index={index}
								></Button>
							);
						})}
					</div>
				</Fragment>
			)}

			<div className={styles['showcase__bg']} aria-hidden="true">
				<ShowcasePicture path={item.detailKeys?.[0]?.path} alt="" index={0} />
			</div>
		</div>
	);
}
