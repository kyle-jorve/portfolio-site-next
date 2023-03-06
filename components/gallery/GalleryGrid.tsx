import { useState, useContext, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../context/global";
import getGlobalData, { SocialIconType } from "../../data/global-data";
import getGalleryData, {
	GalleryItemType,
} from "../../data/gallery-data";
import GalleryItem from "./GalleryItem";
import styles from "../../styles/components/Gallery.module.css";

type GalleryGridProps = {
	items: GalleryItemType[];
	commerceLinks: SocialIconType[];
};

export default function GalleryGrid(props: GalleryGridProps) {
	const siteContext = useContext(SiteContext);
	const globalData = getGlobalData();
	const galleryData = getGalleryData();
	const router = useRouter();
	const [reveal, setReveal] = useState(false);
	const [animationDone, setAnimationDone] = useState(false);
	const navItems = globalData.nav
		.map((item) => (item.children ? item.children : item))
		.flat(1);
	const page = navItems.find((p) => p.url === router.pathname);
	const totalDelay =
		(galleryData.items.length -
			1 +
			(props.commerceLinks.length - 1)) *
			siteContext.transitionDelay +
		siteContext.transitionDuration;

	const transitionItems = useCallback(() => {
		setReveal(true);

		setTimeout(() => {
			setAnimationDone(true);
		}, totalDelay);
	}, [totalDelay]);

	useEffect(() => {
		if (siteContext.loadStatus === "done") {
			transitionItems();
		}
	}, [transitionItems, siteContext.loadStatus]);

	return (
		<div
			className={`${styles["gallery__grid"]} ${styles["gallery__grid--page"]}`}
		>
			{props.items.map((item, index) => {
				const isNew = item.name === galleryData.items[0].name;

				return (
					<GalleryItem
						key={index}
						isNew={isNew}
						name={item.name}
						title={item.title}
						thumbnailKey={item.thumbnailKey}
						fromPage={page ? page.pageID : null}
						fromSection={null}
						style={{
							transitionDelay: !animationDone
								? `${
										index *
										siteContext.transitionDelay
								  }ms`
								: "",
						}}
						className={
							!reveal
								? styles["gallery__item--animated"]
								: ""
						}
						attributes={{
							tabIndex: siteContext.navOpen
								? -1
								: undefined,
						}}
					/>
				);
			})}

			{props.commerceLinks.map((item, index) => {
				return (
					<article
						key={index}
						className={`${styles["gallery__item"]} ${
							styles["gallery__item--card"]
						} ${styles[`gallery__item--${item.name}`]}${
							!reveal
								? ` ${styles["gallery__item--animated"]}`
								: ""
						}`}
						style={{
							transitionDelay: !animationDone
								? `${
										(index +
											galleryData.items.length) *
										siteContext.transitionDelay
								  }ms`
								: "",
						}}
						tabIndex={siteContext.navOpen ? -1 : undefined}
					>
						<a
							className={styles["gallery__item-link"]}
							href={item.url}
							target="_blank"
							rel="noreferrer"
						>
							<h3
								className={
									styles["gallery__card-title"]
								}
							>
								{!!item.icon && item.icon}
								{item.label}
							</h3>
						</a>
					</article>
				);
			})}
		</div>
	);
}
