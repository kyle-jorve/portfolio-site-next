import React, { useContext, useEffect, useRef } from 'react';
import SiteContext from '../../context/global';
import CustomLink from '../layout/CustomLink';
import useThumbnailConfig from '../../hooks/thumbnail-config';
import styles from '../../styles/components/Gallery.module.css';
import { GalleryItemType } from '../../data/gallery-data';

type GalleryItemProps = GalleryItemType & {
	className: string;
	fromPage: string | null;
	fromSection: string | null;
	isNew?: boolean;
	isFeatured?: boolean;
	onLoad?: () => void;
	attributes: {
		tabIndex: number | undefined;
	};
	style: {
		[prop: string]: string;
	};
};

export default function GalleryItem(props: GalleryItemProps) {
	const imgRef = useRef<HTMLImageElement>(null!);
	const siteContext = useContext(SiteContext);
	const mediaConfig = useThumbnailConfig({
		isNew: props.isNew,
		isFeatured: props.isFeatured,
		thumbnailKey: props.thumbnailKey,
	});
	const mobileImgSrc = mediaConfig.mobile.url;
	const classes = [
		styles['gallery__item'],
		props.isNew && styles['gallery__item--new'],
		props.className,
	].filter((c) => c);

	useEffect(() => {
		const img = imgRef.current;

		if (!props.onLoad) return;

		if (img.complete) {
			props.onLoad();
			return;
		}
		
		img.addEventListener('load', props.onLoad);

		return () => {
			img?.removeEventListener('load', props.onLoad!);
		}
	});

	function galleryItemClickHandler() {
		setTimeout(() => {
			siteContext.closeNav();

			if (props.fromPage) {
				siteContext.setFromPage(props.fromPage);
			}

			if (props.fromSection) {
				siteContext.setFromSection(props.fromSection);
			} else {
				siteContext.setFromSection(null);
			}
		}, siteContext.longTransitionDuration);
	}

	return (
		<article className={classes.join(' ')} style={props.style}>
			{props.isNew ? <span className={styles['gallery__new-badge']}>New</span> : ''}

			<CustomLink
				className={styles['gallery__item-link']}
				to={`/gallery/${props.name}`}
				onClick={galleryItemClickHandler}
				attributes={props.attributes}
			>
				<picture>
					{mediaConfig.sources.map((src, index) => {
						const imgSrc = src.url;

						return (
							<source
								key={index}
								srcSet={imgSrc}
								media={`(min-width: ${src.minScreenWidth}px)`}
							/>
						);
					})}

					<img
						ref={imgRef}
						className={`img--lazy ${styles['gallery__img']}`}
						style={{
							objectPosition: `center ${props.orientation}`,
						}}
						src={mobileImgSrc}
						alt={props.thumbnailKey.alt}
						loading="lazy"
						onLoad={(event) => event.currentTarget.classList.add('loaded')}
					/>
				</picture>

				<h3 className={styles['gallery__item-title']}>{props.title}</h3>
			</CustomLink>
		</article>
	);
}
