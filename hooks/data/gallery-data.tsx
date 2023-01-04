import { Fragment } from "react";
import CustomLink from "../../components/layout/CustomLink";

export const projectCategories = [
    {
        name: "ignoble-blood",
        label: "Ignoble Blood",
    },
    {
        name: "post-autumn",
        label: "Post-Autumn",
    },
    {
        name: "fan-art",
        label: "Fan Art",
    },
] as const;

export const characterCategories = [
    {
        name: "kyra",
        label: "Kyra Luckleav",
    },
    {
        name: "toval",
        label: "Toval Argensente",
    },
    {
        name: "andel",
        label: "Andel Sommer",
    },
    {
        name: "pendrake",
        label: "Pendrake Sommer",
    },
    {
        name: "talis",
        label: "Talis Sommer",
    },
    {
        name: "cargha",
        label: "Cargha Bezamik",
    },
    {
        name: "berned",
        label: "Berned Blackhorn",
    },
    {
        name: "fennory",
        label: "Fennory Caelden",
    },
    {
        name: "crow",
        label: "Crow",
    },
    {
        name: "sora",
        label: "Sora",
    },
    {
        name: "riku",
        label: "Riku",
    },
    {
        name: "kairi",
        label: "Kairi",
    },
    {
        name: "namine",
        label: "Namine",
    },
    {
        name: "roxas",
        label: "Roxas",
    },
] as const;

export const categoryNames = [
    ...projectCategories.map((cat) => cat.name),
    ...characterCategories.map((cat) => cat.name),
] as const;

export type DetailKeyType = {
    path?: string;
    alt?: string;
    source?: JSX.Element;
    width?: number;
    height?: number;
};

export type GalleryItemType = {
    name: string;
    title: string;
    content?: JSX.Element;
    orientation: string;
    featured?: boolean;
    categories?: (typeof projectCategories[number] | typeof characterCategories[number])[];
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
                            <p>
                                You have much to lose in your involvement with me,{" "}
                                <CustomLink to="/gallery/pendrake">Pendrake</CustomLink>. We would be willfully ignorant
                                to pretend otherwise.
                            </p>
                        </blockquote>
                    ),
                    orientation: "center",
                    featured: true,
                    categories: [projectCategories[0], characterCategories[0]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/kyra-luckleav-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/vrxhc",
                    thumbnailKey: {
                        path: "/images/gallery/kyra-portrait/kyle-jorve_kyra-portrait.jpg",
                        alt: "a portrait of Kyra Luckleav",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/kyra-portrait/kyle-jorve_kyra-portrait.jpg",
                            alt: "a portrait of Kyra Luckleav",
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra-portrait/kyle-jorve_kyra-portrait-wip-1.jpg",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the line drawing is complete`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra-portrait/kyle-jorve_kyra-portrait-wip-2.jpg",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the flat colors have been applied`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra-portrait/kyle-jorve_kyra-portrait-wip-3.jpg",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the light and shadows have been applied and colorized`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra-portrait/kyle-jorve_kyra-portrait-wip-4.jpg",
                            alt: `a progress snapshot of Kyra Luckleav's portrait in which the painting is nearly finished`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/SNKCHXFbFPY"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[0]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/kyra-luckleav/",
                    downloadLink: "https://kylejorve.gumroad.com/l/jlwzc",
                    thumbnailKey: {
                        path: "/images/gallery/kyra/kyle-jorve_kyra.jpg",
                        alt: "a vignette of Kyra Luckleav, grinning and looking out of frame",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/kyra/kyle-jorve_kyra.jpg",
                            alt: "a vignette of Kyra Luckleav, grinning and looking out of frame",
                            width: 1920,
                            height: 3162,
                        },
                        {
                            path: "/images/gallery/kyra/kyle-jorve_kyra-wip-1.jpg",
                            alt: `a nude pose study for Kyra's vignette`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra/kyle-jorve_kyra-wip-2.jpg",
                            alt: `a progress snapshot of Kyra's vignette in which the line drawing is complete`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra/kyle-jorve_kyra-wip-3.jpg",
                            alt: `a progress snapshot of Kyra's vignette in which the flat colors have been applied`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/kyra/kyle-jorve_kyra-wip-4.jpg",
                            alt: `a progress snapshot of Kyra's vignette in which the light and shadow have been applied and colorized`,
                            width: 1920,
                            height: 3162,
                        },
                        {
                            path: "/images/gallery/kyra/kyle-jorve_kyra-wip-5.jpg",
                            alt: `a progress snapshot of Kyra's vignette in which the painting is nearly finished`,
                            width: 1920,
                            height: 3162,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/ALmy-xx7u-c"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[1]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/toval-argensente-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/vcwgb",
                    thumbnailKey: {
                        path: "/images/gallery/toval-portrait/kyle-jorve_toval-portrait.jpg",
                        alt: "a portrait of Toval Argensente",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/toval-portrait/kyle-jorve_toval-portrait.jpg",
                            alt: "a portrait of Toval Argensente",
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval-portrait/kyle-jorve_toval-portrait-wip-1.jpg",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the line drawing is complete`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval-portrait/kyle-jorve_toval-portrait-wip-2.jpg",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the flat colors have been applied`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval-portrait/kyle-jorve_toval-portrait-wip-3.jpg",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the light and shadows have been applied and colorized`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval-portrait/kyle-jorve_toval-portrait-wip-4.jpg",
                            alt: `a progress snapshot of Toval Argensente's portrait in which the painting is nearly finished`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/hDk6yKcQYqI"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[1]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/toval-argensente/",
                    downloadLink: "https://kylejorve.gumroad.com/l/ogpkj",
                    thumbnailKey: {
                        path: "/images/gallery/toval/kyle-jorve_toval.jpg",
                        alt: "a vignette of Toval Argensente, looking menacingly toward the viewer with a sword in her left hand pointed to the ground",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/toval/kyle-jorve_toval.jpg",
                            alt: "a vignette of Toval Argensente, looking menacingly toward the viewer with a sword in her left hand pointed to the ground",
                            width: 1920,
                            height: 2592,
                        },
                        {
                            path: "/images/gallery/toval/kyle-jorve_toval-wip-1.jpg",
                            alt: `a nude pose study for Toval's vignette`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval/kyle-jorve_toval-wip-2.jpg",
                            alt: `a progress snapshot of Toval's vignette in which the line drawing is complete`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval/kyle-jorve_toval-wip-3.jpg",
                            alt: `a progress snapshot of Toval's vignette in which the flat colors have been applied`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/toval/kyle-jorve_toval-wip-4.jpg",
                            alt: `a progress snapshot of Toval's vignette in which the light and shadows have been applied and colorized`,
                            width: 1920,
                            height: 2592,
                        },
                        {
                            path: "/images/gallery/toval/kyle-jorve_toval-wip-5.jpg",
                            alt: `a progress snapshot of Toval's vignette in which the painting is nearly finished`,
                            width: 1920,
                            height: 2592,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/js4NRjOnPbA"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[2]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/andel-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/ungde",
                    thumbnailKey: {
                        path: "/images/gallery/andel-portrait/kyle-jorve_andel-portrait.jpg",
                        alt: "a portrait of Andel Sommer",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/andel-portrait/kyle-jorve_andel-portrait.jpg",
                            alt: "a portrait of Andel Sommer",
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel-portrait/kyle-jorve_andel-portrait-wip-1.jpg",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the line drawing is complete`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel-portrait/kyle-jorve_andel-portrait-wip-2.jpg",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the flat colors have been applied`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel-portrait/kyle-jorve_andel-portrait-wip-3.jpg",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the light and shadows have been applied and colorized`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel-portrait/kyle-jorve_andel-portrait-wip-4.jpg",
                            alt: `a progress snapshot of Andel Sommer's portrait in which the painting is nearly finished`,
                            width: 1920,
                            height: 2485,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/W6acBvEQXug"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[2]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/andel-sommer/",
                    downloadLink: "https://kylejorve.gumroad.com/l/vqdvkj",
                    thumbnailKey: {
                        path: "/images/gallery/andel/kyle-jorve_andel.jpg",
                        alt: `a vignette of Andel Sommer, who stands wearing his duke's finery, holding a sword in one hand and a heavy tome in another`,
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/andel/kyle-jorve_andel.jpg",
                            alt: "Andel Sommer stands proudly, a sheathed sword in one hand and a heavy tome in the other",
                            width: 1920,
                            height: 2987,
                        },
                        {
                            path: "/images/gallery/andel/kyle-jorve_andel-wip-1.jpg",
                            alt: "an in-progress image of Andel in the nude pose phase of the piece",
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel/kyle-jorve_andel-wip-2.jpg",
                            alt: "an in-progress image of Andel in which the design is fully drawn",
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel/kyle-jorve_andel-wip-3.jpg",
                            alt: "an in-progress image of Andel in which flat colors are applied to the drawing",
                            width: 1920,
                            height: 2485,
                        },
                        {
                            path: "/images/gallery/andel/kyle-jorve_andel-wip-4.jpg",
                            alt: "an in-progress image of Andel in which the shadows and light are colorized",
                            width: 1920,
                            height: 2936,
                        },
                        {
                            path: "/images/gallery/andel/kyle-jorve_andel-wip-5.jpg",
                            alt: "an in-progress image of Andel in which the painting is nearly finished",
                            width: 1920,
                            height: 2987,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/XEaCkUcbfUo"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[3]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/pendrake-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/hhgin",
                    thumbnailKey: {
                        path: "/images/gallery/pendrake-portrait/kyle-jorve_pendrake-portrait.jpg",
                        alt: "a portrait of Pendrake Sommer",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/pendrake-portrait/kyle-jorve_pendrake-portrait.jpg",
                            alt: "a portrait of Pendrake Sommer",
                            width: 1920,
                            height: 2486,
                        },
                        {
                            path: "/images/gallery/pendrake-portrait/kyle-jorve_pendrake-portrait-wip-1.jpg",
                            alt: `a progress snapshot of Pendrake's portrait in which the line drawing has been finished`,
                            width: 1920,
                            height: 2486,
                        },
                        {
                            path: "/images/gallery/pendrake-portrait/kyle-jorve_pendrake-portrait-wip-2.jpg",
                            alt: `a progress snapshot of Pendrake's portrait in which the flat colors have been applied`,
                            width: 1920,
                            height: 2486,
                        },
                        {
                            path: "/images/gallery/pendrake-portrait/kyle-jorve_pendrake-portrait-wip-3.jpg",
                            alt: `a progress snapshot of Pendrake's portrait in which the light and shadows have been applied and colorized`,
                            width: 1920,
                            height: 2486,
                        },
                        {
                            path: "/images/gallery/pendrake-portrait/kyle-jorve_pendrake-portrait-wip-4.jpg",
                            alt: `a progress snapshot of Pendrake's portrait in which the painting is nearly finished`,
                            width: 1920,
                            height: 2486,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/CetjOlb5zWk"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[3]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/pendrake-sommer/",
                    downloadLink: "https://kylejorve.gumroad.com/l/ndwgm",
                    thumbnailKey: {
                        path: "/images/gallery/pendrake/kyle-jorve_pendrake.jpg",
                        alt: "a vignette of Pendrake Sommer, looking backward with a puzzled expression while gripping his saber",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/pendrake/kyle-jorve_pendrake.jpg",
                            alt: "a vignette of Pendrake Sommer, looking backward with a puzzled expression while gripping his saber",
                            width: 1920,
                            height: 3316,
                        },
                        {
                            path: "/images/gallery/pendrake/kyle-jorve_pendrake-wip-1.jpg",
                            alt: `a nude pose study for Pendrake's vignette`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/pendrake/kyle-jorve_pendrake-wip-2.jpg",
                            alt: `a progress snapshot of Pendrake's vignette in which the line drawing is complete`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/pendrake/kyle-jorve_pendrake-wip-3.jpg",
                            alt: `a progress snapshot of Pendrake's vignette in which the flat colors have been applied`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/pendrake/kyle-jorve_pendrake-wip-4.jpg",
                            alt: `a progress snapshot of Pendrake's vignette in which the light and shadows have been applied and colorized`,
                            width: 1920,
                            height: 3316,
                        },
                        {
                            path: "/images/gallery/pendrake/kyle-jorve_pendrake-wip-5.jpg",
                            alt: `a progress snapshot of Pendrake's vignette in which the painting is nearly finished`,
                            width: 1920,
                            height: 3316,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/id079cuwXfE"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[4]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/talis-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/bgvVML",
                    thumbnailKey: {
                        path: "/images/gallery/talis-portrait/kyle-jorve_talis-portrait.jpg",
                        alt: "a portrait of Talis Sommer",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/talis-portrait/kyle-jorve_talis-portrait.jpg",
                            alt: "a portrait of Talis Sommer",
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/talis-portrait/kyle-jorve_talis-portrait-wip-1.jpg",
                            alt: `a progress snapshot of Talis's portrait in which the line drawing is complete`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/talis-portrait/kyle-jorve_talis-portrait-wip-2.jpg",
                            alt: `a progress snapshot of Talis's portrait in which the flat colors have been applied`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/talis-portrait/kyle-jorve_talis-portrait-wip-3.jpg",
                            alt: `a progress snapshot of Talis's portrait in which the light and shadow have been applied and colorized`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            path: "/images/gallery/talis-portrait/kyle-jorve_talis-portrait-wip-4.jpg",
                            alt: `a progress snapshot of Talis's portrait in which the painting is nearly finished`,
                            width: 1920,
                            height: 2561,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/FooxBhjNG3E"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[4]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/talis-sommer/",
                    downloadLink: "https://kylejorve.gumroad.com/l/CQNFi",
                    thumbnailKey: {
                        path: "/images/gallery/talis/kyle-jorve_talis.jpg",
                        alt: "Talis stands with an amused expression, her hand resting on the saber mounted to her belt",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/talis/kyle-jorve_talis.jpg",
                            alt: "Talis stands with an amused expression, her hand resting on the saber mounted to her belt",
                            width: 1920,
                            height: 3040,
                        },
                        {
                            path: "/images/gallery/talis/kyle-jorve_talis-wip-1.jpg",
                            alt: `a progress snapshot of Talis's vignette in which the line drawing is complete`,
                            width: 1920,
                            height: 3040,
                        },
                        {
                            path: "/images/gallery/talis/kyle-jorve_talis-wip-2.jpg",
                            alt: `a progress snapshot of Talis's vignette in which the flat colors have been applied`,
                            width: 1920,
                            height: 3040,
                        },
                        {
                            path: "/images/gallery/talis/kyle-jorve_talis-wip-3.jpg",
                            alt: `a progress snapshot of Talis's vignette in which the light and shadow have been applied and colorized`,
                            width: 1920,
                            height: 3040,
                        },
                        {
                            path: "/images/gallery/talis/kyle-jorve_talis-wip-4.jpg",
                            alt: `a progress snapshot of Talis's vignette in which the painting is nearly finished`,
                            width: 1920,
                            height: 3040,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/M8TVkpTIlI0"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[5]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/cargha-portrait/",
                    downloadLink: "https://kylejorve.gumroad.com/l/LNffV",
                    thumbnailKey: {
                        path: "/images/gallery/cargha-portrait/kyle-jorve_cargha-portrait.jpg",
                        alt: "a portrait of Cargha Bezamik which features his scarred-over left eye and the tattoo which covers it",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/cargha-portrait/kyle-jorve_cargha-portrait.jpg",
                            alt: "a portrait of Cargha Bezamik which features his scarred-over left eye and the tattoo which covers it",
                            width: 1920,
                            height: 2545,
                        },
                        {
                            path: "/images/gallery/cargha-portrait/kyle-jorve_cargha-portrait-wip-1.jpg",
                            alt: `a progress snapshot of Cargha's portrait in which the line drawing is complete`,
                            width: 1920,
                            height: 2545,
                        },
                        {
                            path: "/images/gallery/cargha-portrait/kyle-jorve_cargha-portrait-wip-2.jpg",
                            alt: `a progress snapshot of Cargha's portrait in which the flat colors have been applied`,
                            width: 1920,
                            height: 2545,
                        },
                        {
                            path: "/images/gallery/cargha-portrait/kyle-jorve_cargha-portrait-wip-3.jpg",
                            alt: `a progress snapshot of Cargha's portrait in which the light and shadow have been applied and colorized`,
                            width: 1920,
                            height: 2545,
                        },
                        {
                            path: "/images/gallery/cargha-portrait/kyle-jorve_cargha-portrait-wip-4.jpg",
                            alt: `a progress snapshot of Cargha's portrait in which the painting is nearly finished`,
                            width: 1920,
                            height: 2545,
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
                    categories: [projectCategories[0], characterCategories[5]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/cargha-bezamik/",
                    downloadLink: "https://kylejorve.gumroad.com/l/olwWz",
                    thumbnailKey: {
                        path: "/images/gallery/cargha/kyle-jorve_cargha.jpg",
                        alt: "Cargha stands stoically, a dagger in one hand and a khopesh in the other",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/cargha/kyle-jorve_cargha.jpg",
                            alt: "Cargha stands stoically, a dagger in one hand and a khopesh in the other",
                            width: 1920,
                            height: 3200,
                        },
                        {
                            path: "/images/gallery/cargha/kyle-jorve_cargha-wip-1.jpg",
                            alt: `a nude pose study for Cargha's vignette`,
                            width: 1920,
                            height: 3200,
                        },
                        {
                            path: "/images/gallery/cargha/kyle-jorve_cargha-wip-2.jpg",
                            alt: `a progress snapshot of Cargha's vignette in which the line drawing is complete`,
                            width: 1920,
                            height: 3200,
                        },
                        {
                            path: "/images/gallery/cargha/kyle-jorve_cargha-wip-3.jpg",
                            alt: `a progress snapshot of Cargha's vignette in which the flat colors have been applied`,
                            width: 1920,
                            height: 3200,
                        },
                        {
                            path: "/images/gallery/cargha/kyle-jorve_cargha-wip-4.jpg",
                            alt: `a progress snapshot of Cargha's vignette in which the light and shadow have been applied and colorized`,
                            width: 1920,
                            height: 3200,
                        },
                        {
                            path: "/images/gallery/cargha/kyle-jorve_cargha-wip-5.jpg",
                            alt: `a progress snapshot of Cargha's vignette in which the painting is nearly complete`,
                            width: 1920,
                            height: 3200,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/_FzmNukhxFo"
                                    title="YouTube video player"
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
                    categories: [projectCategories[1], characterCategories[8]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/crow/",
                    downloadLink: "https://gumroad.com/l/fTSADI",
                    thumbnailKey: {
                        path: "/images/gallery/crow/kyle-jorve_crow.jpg",
                        alt: "Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing green",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/crow/kyle-jorve_crow.jpg",
                            alt: "Crow stands against a wall smoking an e-cigarette, his mechanical right eye glowing green",
                            width: 1920,
                            height: 2560,
                        },
                        {
                            path: "/images/gallery/crow/kyle-jorve_crow-detail-1.jpg",
                            alt: `a detailed crop showing Crow's face`,
                            width: 1920,
                            height: 1920,
                        },
                        {
                            path: "/images/gallery/crow/kyle-jorve_crow-detail-2.jpg",
                            alt: "a detail crop showing the upper portion of the illustration",
                            width: 1920,
                            height: 1921,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/oRzRz7eev2c"
                                    title="YouTube video player"
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
                    categories: [projectCategories[0], characterCategories[0], characterCategories[3]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/pendrakes-chamber/",
                    downloadLink: "https://gumroad.com/l/mQzix",
                    thumbnailKey: {
                        path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber-detail-1.jpg",
                        alt: "a close-up crop of Pendrake and Kyra lying in bed together",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber.jpg",
                            alt: `Pendrake's bedroom in isometric perspective`,
                            width: 1920,
                            height: 2095,
                        },
                        {
                            path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber-detail-1.jpg",
                            alt: "a close-up crop of Pendrake and Kyra lying in bed together",
                            width: 1920,
                            height: 1920,
                        },
                        {
                            path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber-detail-2.jpg",
                            alt: `a close-up crop of the vanity in the corner of Pendrake's room`,
                            width: 1920,
                            height: 1920,
                        },
                        {
                            path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber-detail-3.jpg",
                            alt: "a close-up crop of the hearth, from which a fire illuminates the entire room",
                            width: 1920,
                            height: 1920,
                        },
                        {
                            path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber-detail-4.jpg",
                            alt: `a close-up crop of the storage chest at the foot of Pendrake's bed; a saber rests beside it`,
                            width: 1920,
                            height: 1920,
                        },
                        {
                            path: "/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber-detail-5.jpg",
                            alt: "Pendrake and Kyra doze together in bed; various props are scattered over the neighboring nighstand",
                            width: 1920,
                            height: 1920,
                        },
                    ],
                },
                {
                    name: "berned",
                    title: "Berned",
                    content: (
                        <Fragment>
                            <blockquote className="blockquote">
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
                    categories: [projectCategories[0], characterCategories[6]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/berned/",
                    downloadLink: "https://gumroad.com/l/JKDSd",
                    thumbnailKey: {
                        path: "/images/gallery/berned/kyle-jorve_berned.jpg",
                        alt: "Berned stands before the circular red door to his house",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/berned/kyle-jorve_berned.jpg",
                            alt: "Berned stands before the circular red door to his house",
                            width: 1920,
                            height: 2560,
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
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/olfactory/",
                    downloadLink: "https://gumroad.com/l/KMcGj",
                    thumbnailKey: {
                        path: "/images/gallery/olfactory/kyle-jorve_olfactory.jpg",
                        alt: "an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/olfactory/kyle-jorve_olfactory.jpg",
                            alt: "an alien breathes in the thick atmoshpere of its home planet through a mouth overgrown with filtering cilia",
                            width: 1920,
                            height: 2688,
                        },
                    ],
                },
                {
                    name: "becoming-runa",
                    title: "Becoming Runa",
                    content: (
                        <Fragment>
                            <blockquote className="blockquote">
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
                    categories: [projectCategories[0], characterCategories[7]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/becoming-runa/",
                    downloadLink: "https://gumroad.com/l/UluBo",
                    thumbnailKey: {
                        path: "/images/gallery/becoming-runa/kyle-jorve_becoming-runa.jpg",
                        alt: "Luna stands naked and emaciated beneath the symbol of the Order of the Runa, crystalline growths covering his body as his extremities fade from existence",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/becoming-runa/kyle-jorve_becoming-runa.jpg",
                            alt: "Luna stands naked beneath the symbol of the Order of the Runa, crystalline growths covering his body as his extremities fade from existence",
                            width: 1920,
                            height: 3757,
                        },
                        {
                            source: (
                                <iframe
                                    width="1440"
                                    height="810"
                                    src="https://www.youtube.com/embed/PxoZ4MjlxOY"
                                    title="YouTube video player"
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
                    categories: [projectCategories[1], characterCategories[8]],
                    purchaseLink: "https://www.inprnt.com/gallery/kylejorve/crows/",
                    downloadLink: "https://gumroad.com/l/itBYi",
                    thumbnailKey: {
                        path: "/images/gallery/crows/kyle-jorve_crows.jpg",
                        alt: "Crow stands before a cluster of dead ravens as more fall from the sky, a dead white raven at his feet",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/crows/kyle-jorve_crows.jpg",
                            alt: "Crow stands before a cluster of dead ravens as more fall from the sky, a dead white raven at his feet",
                            width: 1920,
                            height: 3142,
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
                    categories: [
                        projectCategories[2],
                        characterCategories[9],
                        characterCategories[10],
                        characterCategories[11],
                    ],
                    thumbnailKey: {
                        path: "/images/gallery/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1.jpg",
                        alt: "Sora, Riku, and Kairi stand on a sandy beach on Destiny Island",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/kingdom-hearts-1/kyle-jorve_kingdom-hearts-1.jpg",
                            alt: "Sora, Riku, and Kairi stand on a sandy beach on Destiny Island",
                            width: 1920,
                            height: 2745,
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
                    categories: [
                        projectCategories[2],
                        characterCategories[10],
                        characterCategories[12],
                        characterCategories[13],
                    ],
                    thumbnailKey: {
                        path: "/images/gallery/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2.jpg",
                        alt: "Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; a heart-shaped moon glows overhead",
                    },
                    detailKeys: [
                        {
                            path: "/images/gallery/kingdom-hearts-2/kyle-jorve_kingdom-hearts-2.jpg",
                            alt: "Riku, Namine, and Roxas stand on a dark, destroyed beach on Destiny Island; fissures crack the landscape; Mickey stands hidden in the distance; a heart-shaped moon glows overhead",
                            width: 1920,
                            height: 2745,
                        },
                    ],
                },
            ];
        },
    };
}
