import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../../components/layout/CustomLink";

export type DetailKeyType = {
    path?: string;
    alt?: string;
    source?: JSX.Element;
};

export type GalleryItemType = {
    name: string;
    title: string;
    content?: JSX.Element;
    orientation: string;
    featured?: boolean;
    purchaseLink?: string;
    downloadLink?: string;
    thumbnailKey: {
        path: string;
        alt: string;
    };
    detailKeys?: DetailKeyType[];
};

export default function useGalleryData() {
    return {
        get title() {
            return "Gallery";
        },
        get items(): GalleryItemType[] {
            return [
                {
                    name: "kyra-portrait",
                    title: "Kyra Luckleav Portrait",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                You have much to lose in your involvement with me,{" "}
                                <CustomLink to="/gallery/pendrake">Pendrake</CustomLink>. We would be willfully ignorant
                                to pretend otherwise.
                            </p>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/kyra-luckleav-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/vrxhc",
                    thumbnailKey: {
                        path: "/gallery/kyra-portrait/final/kyle-jorve_kyra-portrait",
                        alt: "a portrait of Kyra Luckleav",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/kyra-portrait/final/kyle-jorve_kyra-portrait",
                            alt: "a portrait of Kyra Luckleav",
                        },
                        {
                            path: "/gallery/kyra-portrait/wip-1/kyle-jorve_kyra-portrait-wip-1",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/kyra-portrait/wip-2/kyle-jorve_kyra-portrait-wip-2",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/kyra-portrait/wip-3/kyle-jorve_kyra-portrait-wip-3",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the light and shadows have been applied and colorized`,
                        },
                        {
                            path: "/gallery/kyra-portrait/wip-4/kyle-jorve_kyra-portrait-wip-4",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/SNKCHXFbFPY"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "kyra",
                    title: "Kyra Luckleav",
                    content: (
                        <p>
                            Kyra Luckleav is a kitchen servant in Auerstel Castle and also happens to be{" "}
                            <CustomLink to="/gallery/pendrake">Pendrake&apos;s</CustomLink> love interest.{" "}
                            <CustomLink to="/gallery/andel">Duke Andel Sommer</CustomLink>, Pendrake&apos;s father,
                            expressly forbids their love and instead campaigns for Pendrake to marry someone equal to
                            his station. Because of this, Pendrake occasionally goes to great and dangerous lengths to
                            prove his devotion to Kyra. At one point in the story his love for her nearly gets him
                            killed.
                        </p>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/kyra-luckleav/",
                    downloadLink: "https://kylejorve.gumroad.com/l/jlwzc",
                    thumbnailKey: {
                        path: "/gallery/kyra/final/kyle-jorve_kyra",
                        alt: "a vignette of Kyra Luckleav, grinning and looking out of frame",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/kyra/final/kyle-jorve_kyra",
                            alt: "a vignette of Kyra Luckleav, grinning and looking out of frame",
                        },
                        {
                            path: "/gallery/kyra/wip-1/kyle-jorve_kyra-wip-1",
                            alt: `a nude pose study for Kyra's vignette`,
                        },
                        {
                            path: "/gallery/kyra/wip-2/kyle-jorve_kyra-wip-2",
                            alt: `a progress snapshot of Kyra's vignette in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/kyra/wip-3/kyle-jorve_kyra-wip-3",
                            alt: `a progress snapshot of Kyra's vignette in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/kyra/wip-4/kyle-jorve_kyra-wip-4",
                            alt: `a progress snapshot of Kyra's vignette in which the light and shadow have been applied and colorized`,
                        },
                        {
                            path: "/gallery/kyra/wip-5/kyle-jorve_kyra-wip-5",
                            alt: `a progress snapshot of Kyra's vignette in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/ALmy-xx7u-c"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "toval-portrait",
                    title: "Toval Argensente Portrait",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                Patience is the wise warrior&apos;s strongest virtue. It will guard you from wounds as
                                surely as armor. It will give you insight that others are less keen to seek out. Now,
                                recall the fight you just witnessed and ask yourselves what quality Talis lacked, and
                                what that lack cost her. She&apos;ll be nursing her new wounds for days, simply because
                                she could not wait for an opening.
                            </p>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/toval-argensente-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/vcwgb",
                    thumbnailKey: {
                        path: "/gallery/toval-portrait/final/kyle-jorve_toval-portrait",
                        alt: "a portrait of Toval Argensente",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/toval-portrait/final/kyle-jorve_toval-portrait",
                            alt: "a portrait of Toval Argensente",
                        },
                        {
                            path: "/gallery/toval-portrait/wip-1/kyle-jorve_toval-portrait-wip-1",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/toval-portrait/wip-2/kyle-jorve_toval-portrait-wip-2",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/toval-portrait/wip-3/kyle-jorve_toval-portrait-wip-3",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the light and shadows have been applied and colorized`,
                        },
                        {
                            path: "/gallery/toval-portrait/wip-4/kyle-jorve_toval-portrait-wip-4",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/hDk6yKcQYqI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "toval-argensente",
                    title: "Toval Argensente",
                    content: (
                        <Fragment>
                            <p>
                                <strong>Toval Argensente</strong> is a descendant of the Norfeld, a tribal people who
                                migrated south from the Ice Wilds millennia ago. Her pure-blooded Norfeld
                                features&mdash;ice-white skin, hair, and eyes&mdash;are a rarity these days, especially
                                in the kingdoms of Lensing.
                            </p>
                            <p>
                                Toval is a lieutenant in the Auerstel soldiery, and is responsible for training new
                                recruits. <CustomLink to="/gallery/pendrake">Pendrake</CustomLink> has never taken to
                                his training and, as such, has become a constant thorn in Toval&apos;s side.
                            </p>
                            <p>
                                As far as Toval is concerned, Pendrake&apos;s noble status means nothing on the training
                                grounds, and she disciplines his lack of commitment as harshly as she would any other
                                soldier under her command.
                            </p>
                        </Fragment>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/toval-argensente/",
                    downloadLink: "https://kylejorve.gumroad.com/l/ogpkj",
                    thumbnailKey: {
                        path: "/gallery/toval/final/kyle-jorve_toval",
                        alt: "a vignette of Toval Argensente, looking menacingly toward the viewer with a sword in her left hand pointed to the ground",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/toval/final/kyle-jorve_toval",
                            alt: "a vignette of Toval Argensente, looking menacingly toward the viewer with a sword in her left hand pointed to the ground",
                        },
                        {
                            path: "/gallery/toval/wip-1/kyle-jorve_toval-wip-1",
                            alt: `a nude pose study for Toval's vignette`,
                        },
                        {
                            path: "/gallery/toval/wip-2/kyle-jorve_toval-wip-2",
                            alt: `a progress snapshot of Toval's vignette in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/toval/wip-3/kyle-jorve_toval-wip-3",
                            alt: `a progress snapshot of Toval's vignette in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/toval/wip-4/kyle-jorve_toval-wip-4",
                            alt: `a progress snapshot of Toval's vignette in which the light and shadows have been applied and colorized`,
                        },
                        {
                            path: "/gallery/toval/wip-5/kyle-jorve_toval-wip-5",
                            alt: `a progress snapshot of Toval's vignette in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/js4NRjOnPbA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "andel-portrait",
                    title: "Andel Sommer Portrait",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                Do you know what we&apos;ve lost, Pendrake? Warend Joring is the duke of Torencald. The
                                trade agreements I meant to draft between our duchies would have enriched the Sommers
                                for generations and made both us and the Jorings two of the most powerful families in
                                Dayle. I&apos;ve spent years building to this point, and in a single evening you&apos;ve
                                managed to dash it all away. And for what, Pendrake? For a gods-damned scullion? Your
                                children and your children&apos;s children will be dead and buried long before
                                we&apos;ve heard the last echoes of this scandal.
                            </p>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/andel-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/ungde",
                    thumbnailKey: {
                        path: "/gallery/andel-portrait/final/kyle-jorve_andel-portrait",
                        alt: "a portrait of Andel Sommer",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/andel-portrait/final/kyle-jorve_andel-portrait",
                            alt: "a portrait of Andel Sommer",
                        },
                        {
                            path: "/gallery/andel-portrait/wip-1/kyle-jorve_andel-portrait-wip-1",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/andel-portrait/wip-2/kyle-jorve_andel-portrait-wip-2",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/andel-portrait/wip-3/kyle-jorve_andel-portrait-wip-3",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the light and shadows have been applied and colorized`,
                        },
                        {
                            path: "/gallery/andel-portrait/wip-4/kyle-jorve_andel-portrait-wip-4",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/W6acBvEQXug"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "andel",
                    title: "Andel Sommer",
                    content: (
                        <Fragment>
                            <p>
                                <strong>Andel Sommer</strong> is the duke of Tersing and father to{" "}
                                <CustomLink to="/gallery/pendrake">Pendrake</CustomLink> and{" "}
                                <CustomLink to="/gallery/talis">Talis</CustomLink>. He wants nothing more than to ensure
                                a bright future for his duchy&mdash;even if doing so requires extreme methods.
                            </p>
                            <p>
                                Andel is, to put it mildly, not overly fond of his son, Pendrake. Even so, he tries,
                                often in vain, to mold his heir into a worthy successor.
                            </p>
                        </Fragment>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/andel-sommer/",
                    downloadLink: "https://kylejorve.gumroad.com/l/vqdvkj",
                    thumbnailKey: {
                        path: "/gallery/andel/final/kyle-jorve_andel",
                        alt: `a vignette of Andel Sommer, who stands wearing his duke's finery, holding a sword in one hand and a heavy tome in another`,
                    },
                    detailKeys: [
                        {
                            path: "/gallery/andel/final/kyle-jorve_andel",
                            alt: "Andel Sommer stands proudly, a sheathed sword in one hand and a heavy tome in the other",
                        },
                        {
                            path: "/gallery/andel/wip-1/kyle-jorve_andel-wip-1",
                            alt: "an in-progress image of Andel in the nude pose phase of the piece",
                        },
                        {
                            path: "/gallery/andel/wip-2/kyle-jorve_andel-wip-2",
                            alt: "an in-progress image of Andel in which the design is fully drawn",
                        },
                        {
                            path: "/gallery/andel/wip-3/kyle-jorve_andel-wip-3",
                            alt: "an in-progress image of Andel in which flat colors are applied to the drawing",
                        },
                        {
                            path: "/gallery/andel/wip-4/kyle-jorve_andel-wip-4",
                            alt: "an in-progress image of Andel in which the shadows and light are colorized",
                        },
                        {
                            path: "/gallery/andel/wip-5/kyle-jorve_andel-wip-5",
                            alt: "an in-progress image of Andel in which the painting is nearly finished",
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/XEaCkUcbfUo"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "pendrake-portrait",
                    title: "Pendrake Sommer Portrait",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                If Pendrake Sommer were half the man his father is, well, perhaps Tersing would be in a
                                better spot. As it is, I hate to think what will come of our duchy when that boy finally
                                becomes duke.
                            </p>
                            <cite className="cite">
                                <small>&mdash;Captain Nils of the Auerstel Soldiery</small>
                            </cite>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: false,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/pendrake-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/hhgin",
                    thumbnailKey: {
                        path: "/gallery/pendrake-portrait/final/kyle-jorve_pendrake-portrait",
                        alt: "a portrait of Pendrake Sommer",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/pendrake-portrait/final/kyle-jorve_pendrake-portrait",
                            alt: "a portrait of Pendrake Sommer",
                        },
                        {
                            path: "/gallery/pendrake-portrait/wip-1/kyle-jorve_pendrake-portrait-wip-1",
                            alt: `a progress snapshot of Pendrake's portrait in which the line drawing has been finished`,
                        },
                        {
                            path: "/gallery/pendrake-portrait/wip-2/kyle-jorve_pendrake-portrait-wip-2",
                            alt: `a progress snapshot of Pendrake's portrait in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/pendrake-portrait/wip-3/kyle-jorve_pendrake-portrait-wip-3",
                            alt: `a progress snapshot of Pendrake's portrait in which the light and shadows have been applied and colorized`,
                        },
                        {
                            path: "/gallery/pendrake-portrait/wip-4/kyle-jorve_pendrake-portrait-wip-4",
                            alt: `a progress snapshot of Pendrake's portrait in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/CetjOlb5zWk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "pendrake",
                    title: "Pendrake Sommer",
                    content: (
                        <Fragment>
                            <p>
                                <strong>Pendrake Sommer</strong> is the main protagonist of the in-progress fantasy
                                novel, <i>The Ashes of Hope</i>, and twin brother to{" "}
                                <CustomLink to="/gallery/talis">Talis Sommer</CustomLink>.
                            </p>
                            <p>
                                Pendrake Sommer is less of a fighter than his sister, and far more of a romantic. Some
                                say he would happily sell his duchy for the object of his affection, were he given the
                                chance.
                            </p>
                        </Fragment>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/pendrake-sommer/",
                    downloadLink: "https://kylejorve.gumroad.com/l/ndwgm",
                    thumbnailKey: {
                        path: "/gallery/pendrake/final/kyle-jorve_pendrake",
                        alt: "a vignette of Pendrake Sommer, looking backward with a puzzled expression while gripping his saber",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/pendrake/final/kyle-jorve_pendrake",
                            alt: "a vignette of Pendrake Sommer, looking backward with a puzzled expression while gripping his saber",
                        },
                        {
                            path: "/gallery/pendrake/wip-1/kyle-jorve_pendrake-wip-1",
                            alt: `a nude pose study for Pendrake's vignette`,
                        },
                        {
                            path: "/gallery/pendrake/wip-2/kyle-jorve_pendrake-wip-2",
                            alt: `a progress snapshot of Pendrake's vignette in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/pendrake/wip-3/kyle-jorve_pendrake-wip-3",
                            alt: `a progress snapshot of Pendrake's vignette in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/pendrake/wip-4/kyle-jorve_pendrake-wip-4",
                            alt: `a progress snapshot of Pendrake's vignette in which the light and shadows have been applied and colorized`,
                        },
                        {
                            path: "/gallery/pendrake/wip-5/kyle-jorve_pendrake-wip-5",
                            alt: `a progress snapshot of Pendrake's vignette in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/id079cuwXfE"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "talis-portrait",
                    title: "Talis Sommer Portrait",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                The lady of Tersing? I wouldn&apos;t call her a lady so much as a force of nature. Every
                                man who crosses blades with her lives to regret it&mdash;that is, if they live through
                                the encounter at all.
                            </p>
                            <cite className="cite">
                                <small>&mdash;Howle of the Auerstel Castle guard</small>
                            </cite>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/talis-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/bgvVML",
                    thumbnailKey: {
                        path: "/gallery/talis-portrait/final/kyle-jorve_talis-portrait",
                        alt: "a portrait of Talis Sommer",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/talis-portrait/final/kyle-jorve_talis-portrait",
                            alt: "a portrait of Talis Sommer",
                        },
                        {
                            path: "/gallery/talis-portrait/wip-1/kyle-jorve_talis-portrait-wip-1",
                            alt: `a progress snapshot of Talis's portrait in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/talis-portrait/wip-2/kyle-jorve_talis-portrait-wip-2",
                            alt: `a progress snapshot of Talis's portrait in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/talis-portrait/wip-3/kyle-jorve_talis-portrait-wip-3",
                            alt: `a progress snapshot of Talis's portrait in which the light and shadow have been applied and colorized`,
                        },
                        {
                            path: "/gallery/talis-portrait/wip-4/kyle-jorve_talis-portrait-wip-4",
                            alt: `a progress snapshot of Talis's portrait in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/FooxBhjNG3E"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "talis",
                    title: "Talis Sommer",
                    content: (
                        <Fragment>
                            <p>
                                <strong>Talis Sommer</strong> is the twin sister of the{" "}
                                <CustomLink to="/gallery/pendrake">main protagonist</CustomLink> in the story I&apos;m
                                currently writing, <i>The Ashes of Hope</i>. She is the lady of the Tersing duchy,
                                daughter of the duke and sister to the heir of the dukedom.
                            </p>
                            <p>
                                Unlike her noble contemporaries, Talis prefers to spend her time honing her skills with
                                a saber and bow. As such, she&apos;s earned the admiration and respect of her peers in
                                the soldiery.
                            </p>
                            <p>
                                In stark contrast with her brother, Talis is highly disciplined and dedicates herself
                                fully to everything she pursues. Some have even speculated that she should be the heir
                                instead of her brother.
                            </p>
                        </Fragment>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/talis-sommer/",
                    downloadLink: "https://kylejorve.gumroad.com/l/CQNFi",
                    thumbnailKey: {
                        path: "/gallery/talis/final/kyle-jorve_talis",
                        alt: "Talis stands with an amused expression, her hand resting on the saber mounted to her belt",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/talis/final/kyle-jorve_talis",
                            alt: "Talis stands with an amused expression, her hand resting on the saber mounted to her belt",
                        },
                        {
                            path: "/gallery/talis/wip-1/kyle-jorve_talis-wip-1",
                            alt: `a progress snapshot of Talis's vignette in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/talis/wip-2/kyle-jorve_talis-wip-2",
                            alt: `a progress snapshot of Talis's vignette in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/talis/wip-3/kyle-jorve_talis-wip-3",
                            alt: `a progress snapshot of Talis's vignette in which the light and shadow have been applied and colorized`,
                        },
                        {
                            path: "/gallery/talis/wip-4/kyle-jorve_talis-wip-4",
                            alt: `a progress snapshot of Talis's vignette in which the painting is nearly finished`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/M8TVkpTIlI0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "cargha-portrait",
                    title: "Cargha Bezamik Portrait",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                I was only a thief back then, part of a guild of them, living on a little Sylranian
                                island called <i>Dorokilson</i>. In Daylish you might call it the Island of Holes. It
                                was an apt name, for whoever came through there, if they&apos;d anything worth losing,
                                we made sure it was lost&mdash;eaten by the Island.
                            </p>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/cargha-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/LNffV",
                    thumbnailKey: {
                        path: "/gallery/cargha-portrait/final/kyle-jorve_cargha-portrait",
                        alt: "a portrait of Cargha Bezamik which features his scarred-over left eye and the tattoo which covers it",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/cargha-portrait/final/kyle-jorve_cargha-portrait",
                            alt: "a portrait of Cargha Bezamik which features his scarred-over left eye and the tattoo which covers it",
                        },
                        {
                            path: "/gallery/cargha-portrait/wip-1/kyle-jorve_cargha-portrait-wip-1",
                            alt: `a progress snapshot of Cargha's portrait in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/cargha-portrait/wip-2/kyle-jorve_cargha-portrait-wip-2",
                            alt: `a progress snapshot of Cargha's portrait in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/cargha-portrait/wip-3/kyle-jorve_cargha-portrait-wip-3",
                            alt: `a progress snapshot of Cargha's portrait in which the light and shadow have been applied and colorized`,
                        },
                        {
                            path: "/gallery/cargha-portrait/wip-4/kyle-jorve_cargha-portrait-wip-4",
                            alt: `a progress snapshot of Cargha's portrait in which the painting is nearly finished`,
                        },
                    ],
                },
                {
                    name: "cargha",
                    title: "Cargha Bezamik",
                    content: (
                        <p>
                            <strong>Cargha Bezamik</strong> is employed as a spy and assassin for the antagonist in an
                            in-progress fantasy novel. As with much else in this story, Cargha is not quite what he
                            seems at first, and his motivations are often nebulous.
                        </p>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/cargha-bezamik/",
                    downloadLink: "https://kylejorve.gumroad.com/l/olwWz",
                    thumbnailKey: {
                        path: "/gallery/cargha/final/kyle-jorve_cargha",
                        alt: "Cargha stands stoically, a dagger in one hand and a khopesh in the other",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/cargha/final/kyle-jorve_cargha",
                            alt: "Cargha stands stoically, a dagger in one hand and a khopesh in the other",
                        },
                        {
                            path: "/gallery/cargha/wip-1/kyle-jorve_cargha-wip-1",
                            alt: `a nude pose study for Cargha's vignette`,
                        },
                        {
                            path: "/gallery/cargha/wip-2/kyle-jorve_cargha-wip-2",
                            alt: `a progress snapshot of Cargha's vignette in which the line drawing is complete`,
                        },
                        {
                            path: "/gallery/cargha/wip-3/kyle-jorve_cargha-wip-3",
                            alt: `a progress snapshot of Cargha's vignette in which the flat colors have been applied`,
                        },
                        {
                            path: "/gallery/cargha/wip-4/kyle-jorve_cargha-wip-4",
                            alt: `a progress snapshot of Cargha's vignette in which the light and shadow have been applied and colorized`,
                        },
                        {
                            path: "/gallery/cargha/wip-5/kyle-jorve_cargha-wip-5",
                            alt: `a progress snapshot of Cargha's vignette in which the painting is nearly complete`,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/_FzmNukhxFo"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "crow",
                    title: "Crow",
                    content: (
                        <Fragment>
                            <blockquote className="blockquote">
                                <span className="blockquote__icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </span>
                                <p>
                                    Have you met the boy? I&apos;d sooner take my chances outside the Ark than match
                                    blades with him. Crow&apos;s his name, killing&apos;s his profession. And be damned
                                    certain, he&apos;s a professional.
                                    <cite className="cite">
                                        <small>&mdash;Councillor Genteid, Valkyrie</small>
                                    </cite>
                                </p>
                            </blockquote>
                            <p>
                                Yet another iteration of my original character,{" "}
                                <CustomLink to="/gallery/crows">Crow</CustomLink>.
                            </p>
                            <p>
                                Crow is a professional assassin and the protagonist of an in-progress science fiction
                                story called{" "}
                                <strong>
                                    <i>Post-Autumn</i>
                                </strong>
                                .
                            </p>
                            <p>
                                In it, mankind has been forced by a cataclysmic event to live in domed cities called
                                Arks. When tensions between Arks escalate, having no means to do battle out in the
                                uninhabitable wastelands between cities, governments must quell their conflicts by more
                                surgical means.
                            </p>
                        </Fragment>
                    ),
                    orientation: "top",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/crow/",
                    downloadLink: "https://gumroad.com/l/fTSADI",
                    thumbnailKey: {
                        path: "/gallery/crow/final/kyle-jorve_crow",
                        alt: "Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing green",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/crow/final/kyle-jorve_crow",
                            alt: "Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing green",
                        },
                        {
                            path: "/gallery/crow/detail-1/kyle-jorve_crow-detail-1",
                            alt: `a detailed crop showing Crow's face`,
                        },
                        {
                            path: "/gallery/crow/detail-2/kyle-jorve_crow-detail-2",
                            alt: "a detail crop showing the upper portion of the illustration",
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/oRzRz7eev2c"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "pendrakes-chamber",
                    title: "Pendrake's Chamber",
                    content: (
                        <blockquote className="blockquote">
                            <span className="blockquote__icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <p>
                                I was seventeen, by all means still a boy, yet I was possessed of the sort of steel-hard
                                conviction only youth can muster that I was as good as a man grown. I was entirely given
                                to my appetites, boisterous and inconsiderate, and a downright embarrassment to my
                                father and his court. I was, in other words, a young Daylish noble. And, like many young
                                Daylish nobles, I was hopelessly, stupidly, recklessly in love.
                                <cite className="cite">
                                    <small>&mdash;Pendrake Sommer, Duke of Tersing</small>
                                </cite>
                            </p>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/pendrakes-chamber/",
                    downloadLink: "https://gumroad.com/l/mQzix",
                    thumbnailKey: {
                        path: "/gallery/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1",
                        alt: "a close-up crop of Pendrake and Kyra lying in bed together",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/pendrakes-chamber/final/kyle-jorve_pendrakes-chamber",
                            alt: `Pendrake's bedroom in isometric perspective`,
                        },
                        {
                            path: "/gallery/pendrakes-chamber/detail-1/kyle-jorve_pendrakes-chamber-detail-1",
                            alt: "a close-up crop of Pendrake and Kyra lying in bed together",
                        },
                        {
                            path: "/gallery/pendrakes-chamber/detail-2/kyle-jorve_pendrakes-chamber-detail-2",
                            alt: `a close-up crop of the vanity in the corner of Pendrake's room`,
                        },
                        {
                            path: "/gallery/pendrakes-chamber/detail-3/kyle-jorve_pendrakes-chamber-detail-3",
                            alt: "a close-up crop of the hearth, from which a fire illuminates the entire room",
                        },
                        {
                            path: "/gallery/pendrakes-chamber/detail-4/kyle-jorve_pendrakes-chamber-detail-4",
                            alt: `a close-up crop of the storage chest at the foot of Pendrake's bed; a saber rests beside it`,
                        },
                        {
                            path: "/gallery/pendrakes-chamber/detail-5/kyle-jorve_pendrakes-chamber-detail-5",
                            alt: "Pendrake and Kyra doze together in bed; various props are scattered over the neighboring nighstand",
                        },
                    ],
                },
                {
                    name: "berned",
                    title: "Berned",
                    content: (
                        <Fragment>
                            <blockquote className="blockquote">
                                <span className="blockquote__icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </span>
                                <p>
                                    I wouldn&apos;t call him a kind man, but he&apos;s loyal. As soon slug you in the
                                    face as laugh at your jesting. All depends on which side of him you lie on. I
                                    wouldn&apos;t want to be on his bad side, though. Fair lot of trouble follows those
                                    what fall on his bad side.
                                    <cite className="cite">
                                        <small>&mdash;Malder, Foothills Tavern</small>
                                    </cite>
                                </p>
                            </blockquote>
                            <p>
                                Berned is Auerstel Town&apos;s constable&mdash;at times of help, at times an obstacle,
                                and sometimes, when he feels like it, a downright villain.
                            </p>
                            <p>
                                He plays a critical role in the{" "}
                                <strong>
                                    <i>Ignoble Blood</i>
                                </strong>{" "}
                                series, which is a fantasy story in progress. In it, Berned apprehends a woman named Sol
                                Ferro and charges her with the crime of murdering{" "}
                                <CustomLink to="/gallery/becoming-runa">Luna</CustomLink>, a series protagonist, who at
                                this point in the story has gone strangely missing without a trace.
                            </p>
                        </Fragment>
                    ),
                    orientation: "center",
                    featured: false,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/berned/",
                    downloadLink: "https://gumroad.com/l/JKDSd",
                    thumbnailKey: {
                        path: "/gallery/berned/kyle-jorve_berned",
                        alt: "Berned stands before the circular red door to his house",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/berned/kyle-jorve_berned",
                            alt: "Berned stands before the circular red door to his house",
                        },
                    ],
                },
                {
                    name: "olfactory",
                    title: "Olfactory",
                    content: (
                        <Fragment>
                            <p>
                                <strong>I have no idea why, but I love doing portraits of aliens.</strong>
                            </p>
                            <p>
                                This is a creature that lives on a planet whose atmosphere is so thick that the sense of
                                sight never evolved, so instead this species developed extra-sensitive olfactory senses.
                                Threads stretching over the holes in its &quot;face&quot; protect against contaminants
                                as it inhales.
                            </p>
                        </Fragment>
                    ),
                    orientation: "center",
                    featured: false,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/olfactory/",
                    downloadLink: "https://gumroad.com/l/KMcGj",
                    thumbnailKey: {
                        path: "/gallery/olfactory/kyle-jorve_olfactory",
                        alt: "an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/olfactory/kyle-jorve_olfactory",
                            alt: "an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia",
                        },
                    ],
                },
                {
                    name: "becoming-runa",
                    title: "Becoming Runa",
                    content: (
                        <Fragment>
                            <blockquote className="blockquote">
                                <span className="blockquote__icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </span>
                                <p>
                                    Fennory is gone, Bethany. Call him dead, and leave it at that. Mourn him as if
                                    you&apos;d seen his body and known the stillness of it. There will be no peace for
                                    you until you do.
                                    <cite className="cite">
                                        <small>&mdash;Pendrake Sommer, Duke of Tersing</small>
                                    </cite>
                                </p>
                            </blockquote>
                            <p>
                                The character depicted here is a protagonist of the{" "}
                                <strong>
                                    <i>Ignoble Blood</i>
                                </strong>{" "}
                                series, which is a work of fantasy in progress. Fennory is his real name, but by this
                                point in the story he goes by the alias of Luna, as he is hiding from a powerful enemy.
                            </p>
                            <p>
                                A darker, more malevolent force whisks him away, however, forcing those closest to him
                                into a desperate search, while outside their quiet town a greater threat, once thought
                                defeated, rises from the ashes.
                            </p>
                        </Fragment>
                    ),
                    orientation: "center",
                    featured: true,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/becoming-runa/",
                    downloadLink: "https://gumroad.com/l/UluBo",
                    thumbnailKey: {
                        path: "/gallery/becoming-runa/kyle-jorve_becoming-runa",
                        alt: "Luna stands naked and emaciated beneath the symbol of the Order of the Runa, crystalline growths covering his body as his extremities fade from existence",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/becoming-runa/kyle-jorve_becoming-runa",
                            alt: "Luna stands naked beneath the symbol of the Order of the Runa, crystalline growths covering his body as his extremities fade from existence",
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/PxoZ4MjlxOY"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ),
                        },
                    ],
                },
                {
                    name: "crows",
                    title: "Crows",
                    content: (
                        <Fragment>
                            <blockquote className="blockquote">
                                <span className="blockquote__icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </span>
                                <p>
                                    The Ravens still exist, if you can believe it. Though they take a different form
                                    today. Different stories tell it different ways, but I prefer to believe they linger
                                    as men now, having forgotten all they once were.
                                    <cite className="cite">
                                        <small>&mdash;Eden, The Sunken Valley</small>
                                    </cite>
                                </p>
                            </blockquote>
                            <p>
                                <CustomLink to="/gallery/crow">Crow</CustomLink> is a professional assassin and the
                                protagonist of an in-progress science fiction story called{" "}
                                <strong>
                                    <i>Post-Autumn</i>
                                </strong>
                                .
                            </p>
                            <p>
                                In it, mankind has been forced by a cataclysmic event to live in domed cities called
                                Arks. When tensions between Arks escalate, having no means to do battle out in the
                                uninhabitable wastelands between cities, governments must quell their conflicts by more
                                surgical means.
                            </p>
                        </Fragment>
                    ),
                    orientation: "top",
                    featured: false,
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/crows/",
                    downloadLink: "https://gumroad.com/l/itBYi",
                    thumbnailKey: {
                        path: "/gallery/crows/kyle-jorve_crows",
                        alt: "Crow stands before a cluster of dead ravens as more fall from the sky, a dead white raven at his feet",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/crows/kyle-jorve_crows",
                            alt: "Crow stands before a cluster of dead ravens as more fall from the sky, a dead white raven at his feet",
                        },
                    ],
                },
                {
                    name: "kingdom-hearts-1",
                    title: "The Future Doesn't Scare Me",
                    content: (
                        <Fragment>
                            <p>
                                <strong>
                                    Part of a duology. Its companion, <i>Where Fears and Lies Melt Away</i>, can be
                                    found <CustomLink to="/gallery/kingdom-hearts-2">here</CustomLink>.
                                </strong>
                            </p>
                            <p>
                                <i>Kingdom Hearts</i> is copyrighted and owned by Disney and Square Enix.
                            </p>
                        </Fragment>
                    ),
                    orientation: "center",
                    featured: false,
                    thumbnailKey: {
                        path: "/gallery/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1",
                        alt: "Sora, Riku, and Kairi stand on a sandy beach on Destiny Island",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1",
                            alt: "Sora, Riku, and Kairi stand on a sandy beach on Destiny Island",
                        },
                    ],
                },
                {
                    name: "kingdom-hearts-2",
                    title: "Where Fears and Lies Melt Away",
                    content: (
                        <Fragment>
                            <p>
                                <strong>
                                    Part of a duology. Its companion, <em>The Future Doesn&apos;t Scare Me</em>, can be
                                    found <CustomLink to="/gallery/kingdom-hearts-1">here</CustomLink>.
                                </strong>
                            </p>
                            <p>
                                <i>Kingdom Hearts</i> is copyrighted and owned by Disney and Square Enix.
                            </p>
                        </Fragment>
                    ),
                    orientation: "center",
                    featured: false,
                    thumbnailKey: {
                        path: "/gallery/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2",
                        alt: "Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; a heart-shaped moon glows overhead",
                    },
                    detailKeys: [
                        {
                            path: "/gallery/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2",
                            alt: "Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; a heart-shaped moon glows overhead",
                        },
                    ],
                },
            ];
        },
    };
}
