import { useCallback } from 'react';
import ShowcasePicture from './ShowcasePicture';
import { DetailKeyType } from '../../../data/gallery-data';
import styles from '../../../styles/components/Showcase.module.css';

type ShowcaseSlideProps = {
	index: number;
	activeIndex: number;
	zIndex: number | undefined;
	item: DetailKeyType;
	width?: number;
	height?: number;
	onLoad?: Function;
};

export default function ShowcaseSlide(props: ShowcaseSlideProps) {
	const slideClasses = [
		styles['showcase__slide'],
		props.index === props.activeIndex
			? styles['showcase__slide--active']
			: props.index < props.activeIndex
			? styles['showcase__slide--prev']
			: '',
		!!props.item.source && styles['showcase__slide--video'],
	].filter((c) => c);

	const imageLoadHandler = useCallback(() => {
		if (props.onLoad) props.onLoad();
	}, [props.onLoad]);

	return (
		<div
			className={slideClasses.join(' ')}
			style={{
				zIndex: props.zIndex,
			}}
			data-index={props.index}
		>
			<div className={styles['showcase__img-cont']}>
				{!!props.item.source ? (
					props.item.source
				) : (
					<ShowcasePicture
						path={props.item.path!}
						alt={props.item.alt!}
						index={props.index}
						width={props.width!}
						height={props.height!}
						onLoad={imageLoadHandler}
					/>
				)}
			</div>
		</div>
	);
}
