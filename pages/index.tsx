import { Fragment, useEffect, useContext } from 'react';
import SiteContext from '../context/global';
import FeaturedWork from '../components/gallery/FeaturedWork';
import HomeHero from '../components/layout/HomeHero';
import HomeBio from '../components/cv/HomeBio';
import getGlobalData from '../data/global-data';
import getHomeData from '../data/home-data';
import getCvData from '../data/cv-data';
import getGalleryData from '../data/gallery-data';
import { FeaturedItemType } from '../components/gallery/FeaturedWork';

let timeout: ReturnType<typeof setTimeout>;

type HomeProps = {
	featuredItems: FeaturedItemType[];
	featuredItemsShuffled: FeaturedItemType[];
};

export default function Home(props: HomeProps) {
	const homeData = getHomeData();
	const globalData = getGlobalData();
	const siteContext = useContext(SiteContext);
	const cvData = getCvData();
	const navItems = globalData.nav.map((item) => (item.children ? item.children : item)).flat(1);

	useEffect(() => {
		if (timeout) clearTimeout(timeout);

		if (siteContext.fromSection) {
			const section = document.querySelector(`#${siteContext.fromSection}`);

			if (!section) return;

			section.scrollIntoView();
		}

		timeout = setTimeout(() => {
			siteContext.setVisited(true);
		}, 3000); // total time for hero to animate in
	}, [siteContext.fromSection]);

	return (
		<Fragment>
			<HomeHero imageKey={homeData.intro.heroImageKey} />

			<FeaturedWork
				featuredItems={props.featuredItems}
				featuredItemsShuffled={props.featuredItemsShuffled}
				globalData={globalData}
				homeData={homeData}
			/>

			<HomeBio
				img={homeData.bio.img}
				title={cvData.bio.title}
				content={cvData.bio.content}
				url={navItems.find((item) => item.pageID === 'cv')!.url}
			/>
		</Fragment>
	);
}

export async function getStaticProps() {
	const homeData = getHomeData();
	const galleryData = getGalleryData();
	const featuredItems = galleryData.items
		.filter((item) => item.featured)
		.map((item) => {
			return {
				name: item.name,
				title: item.title,
				thumbnailKey: item.thumbnailKey,
				orientation: item.orientation,
				isNew: item.name === galleryData.items[0].name,
			};
		});
	const featuredItemsShuffled = featuredItems
		.sort((a, b) => 0.5 - Math.random())
		.slice(0, homeData.gallery.itemsLimit);

	return {
		props: {
			featuredItems,
			featuredItemsShuffled,
		},
	};
}
