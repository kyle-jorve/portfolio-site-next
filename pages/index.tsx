import { Fragment } from "react";
import Bio from "../components/cv/Bio";
import FeaturedWork from "../components/gallery/featured-work/FeaturedWork";
import HomeHero from "../components/layout/HomeHero";
import VideoGallery from "../components/gallery/video-gallery/VideoGallery";

export default function Home() {
	return (
		<Fragment>
			<HomeHero />
			<FeaturedWork />
			<VideoGallery />
			<Bio />
		</Fragment>
	);
}
