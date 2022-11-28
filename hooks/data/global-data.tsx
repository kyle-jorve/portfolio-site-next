import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation, faInstagram, faTumblr, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faAt, faBagShopping, faTableCellsLarge, faUserTie } from "@fortawesome/free-solid-svg-icons";
import GumroadIcon from "../../components/icons/Gumroad";

export type SocialIconType = {
    name: string;
    url: string;
    icon?: JSX.Element;
    label?: string;
};

export type SocialIconsType = {
    standard: SocialIconType[];
    commerce: SocialIconType[];
};

export default function useGlobalData() {
    return {
        get email() {
            return "kyle@kylejorve.com";
        },
        get recentWorkLimit() {
            return 4;
        },
        get nav() {
            return [
                {
                    pageID: "home",
                    pageName: "Home",
                    url: "/",
                },
                {
                    pageID: "gallery",
                    pageName: "Gallery",
                    url: "/gallery",
                    icon: <FontAwesomeIcon icon={faTableCellsLarge} />,
                    showInMobileNav: true,
                },
                {
                    pageID: "cv",
                    pageName: "CV",
                    url: "/cv",
                    icon: <FontAwesomeIcon icon={faUserTie} />,
                    showInMobileNav: true,
                },
                {
                    pageID: "shop",
                    pageName: "Shop",
                    url: "https://www.inprnt.com/gallery/kylejorve/",
                    icon: <FontAwesomeIcon icon={faBagShopping} />,
                    showInMobileNav: true,
                },
                {
                    pageID: "patreon",
                    pageName: "Support My Work",
                    url: "https://www.patreon.com/kylejorve",
                },
            ];
        },
        get socialIcons(): SocialIconsType {
            return {
                standard: [
                    {
                        name: "artstation",
                        label: "Artstation",
                        icon: <FontAwesomeIcon icon={faArtstation} />,
                        url: "https://www.artstation.com/kylejorve",
                    },
                    {
                        name: "instagram",
                        label: "Instagram",
                        icon: <FontAwesomeIcon icon={faInstagram} />,
                        url: "https://www.instagram.com/kylejorve/",
                    },
                    {
                        name: "tumblr",
                        label: "Tumblr",
                        icon: <FontAwesomeIcon icon={faTumblr} />,
                        url: "https://kylejorve.tumblr.com/",
                    },
                    {
                        name: "email",
                        label: "Email",
                        icon: <FontAwesomeIcon icon={faAt} />,
                        url: "mailto:kyle@kylejorve.com",
                    },
                ],
                commerce: [
                    {
                        name: "patreon",
                        label: "Patreon",
                        icon: <FontAwesomeIcon icon={faPatreon} />,
                        url: "https://www.patreon.com/kylejorve",
                    },
                    {
                        name: "shop",
                        label: "Print Shop",
                        icon: <FontAwesomeIcon icon={faBagShopping} />,
                        url: "https://www.inprnt.com/gallery/kylejorve/",
                    },
                    {
                        name: "gumroad",
                        label: "Gumroad Shop",
                        icon: <GumroadIcon />,
                        url: "https://gumroad.com/kylejorve",
                    },
                ],
            };
        },
    };
}
