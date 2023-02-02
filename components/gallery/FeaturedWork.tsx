import { useEffect, useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import SiteContext from '../../context/global';
import CustomLink from '../layout/CustomLink';
import GalleryItem from './GalleryItem';
import { ThumbnailKeyType } from '../../data/gallery-data';
import styles from '../../styles/components/Gallery.module.css';

export type FeaturedItemType = {
	isNew: boolean;
	name: string;
	title: string;
	thumbnailKey: ThumbnailKeyType;
	orientation: string;
};

type FeaturedWorkProps = {
	featuredItems: FeaturedItemType[];
	featuredItemsShuffled: FeaturedItemType[];
	globalData: any;
	homeData: any;
};

const ioOptions = {
	threshold: 0.25,
};
let timeout: ReturnType<typeof setTimeout>;
let io: IntersectionObserver;

export default function FeaturedWork(props: FeaturedWorkProps) {
	const siteContext = useContext(SiteContext);
	const sectionRef = useRef<HTMLElement>(null!);
	const gridRef = useRef<HTMLDivElement>(null!);
	const router = useRouter();
	const [galleryItems, setGalleryItems] = useState(props.featuredItemsShuffled);
	const [intersected, setIntersected] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	const page = props.globalData.nav.find((p: any) => p.url === router.pathname);
	const id = 'featured-work';
	const totalDelay =
		(props.featuredItems.length - 1) * siteContext.transitionDelay +
		siteContext.transitionDuration;
	let imgsLoaded = 0;

	useEffect(() => {
		io = new IntersectionObserver(ioHandler, ioOptions);

		function ioHandler(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
			entries.forEach((ent) => {
				if (!ent.isIntersecting) return;

				setIntersected(true);

				setTimeout(() => {
					setAnimationDone(true);
				}, totalDelay);

				observer.disconnect();
			});
		}

		io.observe(sectionRef.current);

		return () => {
			io.disconnect();
		};
	}, [totalDelay]);

	function shuffleFeaturedWork() {
		const shuffled = props.featuredItems
			.sort((a, b) => 0.5 - Math.random())
			.slice(0, props.homeData.gallery.itemsLimit);

		if (timeout) clearTimeout(timeout);

		gridRef.current.classList.add(styles['gallery__grid--hide']);

		timeout = setTimeout(() => {
			setGalleryItems(shuffled);

			imgLoadHandler();
		}, siteContext.transitionDuration);
	}

	function imgLoadHandler() {
		imgsLoaded++;

		if (imgsLoaded === props.homeData.gallery.itemsLimit) {
			gridRef.current.classList.remove(styles['gallery__grid--hide']);
			imgsLoaded = 0;
		}
	}

	return (
		<section ref={sectionRef} className="section" id={id}>
			<div className="wrapper wrapper--wide">
				<div className="title-row">
					<h2 className="underline">Featured Work</h2>

					<button
						className="button button--secondary button--mid button--shuffle"
						aria-label="shuffle featured work"
						onClick={shuffleFeaturedWork}
					>
						Shuffle
					</button>
				</div>

				<div
					className={`${styles['gallery__grid']} ${styles['gallery__grid--featured']}`}
					ref={gridRef}
				>
					{galleryItems.map((item, index) => {
						return (
							<GalleryItem
								key={index}
								isNew={false}
								isFeatured={true}
								onLoad={imgLoadHandler}
								name={item.name}
								title={item.title}
								thumbnailKey={item.thumbnailKey}
								orientation={item.orientation}
								fromPage={page ? page.pageID : null}
								fromSection={id}
								className={!intersected ? styles['gallery__item--animated'] : ''}
								style={{
									transitionDelay: !animationDone
										? `${index * siteContext.transitionDelay}ms`
										: '',
								}}
								attributes={{
									tabIndex: siteContext.navOpen ? -1 : undefined,
								}}
							/>
						);
					})}
				</div>

				<div className={styles['featured__button-cont']}>
					<CustomLink
						className="button button--primary"
						to="/gallery"
						attributes={{
							tabIndex: siteContext.navOpen ? -1 : undefined,
						}}
					>
						View Gallery
					</CustomLink>
				</div>
			</div>
		</section>
	);
}
