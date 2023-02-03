import { useContext } from 'react';
import CustomLink from '../layout/link/CustomLink';
import SiteContext from '../../context/global';
import { HomeBioType } from '../../data/home-data';
import styles from '../../styles/components/CV.module.css';

type HomeBioProps = {
	url: string;
	title: string;
	content: JSX.Element;
} & HomeBioType;

export default function HomeBio(props: HomeBioProps) {
	const siteContext = useContext(SiteContext);
	const squareImg = props.img.square;
	const imgConfig = {
		sources: props.img.sources.map((src) => {
			return {
				srcset: src.url,
				minScreenWidth: src.minScreenWidth,
			};
		}),
		mobile: {
			src: props.img.mobileSource,
		},
	};

	return (
		<section className={`section ${styles['bio-home']}`} id="bio">
			<div className="wrapper wrapper--wide">
				<article className={styles['bio-home__content']}>
					<div className={styles['bio__img-cont']} aria-hidden="true">
						<img
							className={styles['bio__img']}
							src={squareImg}
							alt=""
							loading="lazy"
							width="640"
							height="640"
						/>
					</div>

					<div className={styles['bio-home__box']}>
						<h2 className={`underline underline--center ${styles['bio-home__title']}`}>
							{props.title}
						</h2>

						{props.content}

						<div className={`${styles['bio-home__button-cont']}`}>
							<CustomLink
								className="button button--primary"
								to={props.url}
								onClick={() => siteContext.setToSection('resume')}
								attributes={{
									tabIndex: siteContext.navOpen ? -1 : undefined,
								}}
							>
								See R&eacute;sum&eacute;
							</CustomLink>
						</div>
					</div>

					<div className={styles['bio-home__img-cont']}>
						<picture>
							{imgConfig.sources.map((src, index) => {
								return (
									<source
										key={index}
										srcSet={src.srcset}
										media={`(min-width: ${src.minScreenWidth}px)`}
									/>
								);
							})}

							<img
								className={styles['bio-home__img']}
								src={imgConfig.mobile.src}
								alt={props.img.alt}
								loading="lazy"
								width={props.img.width}
								height={props.img.height}
							/>
						</picture>
					</div>
				</article>
			</div>
		</section>
	);
}
