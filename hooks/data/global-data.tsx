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
                    showInMobileNav: true,
                },
                {
                    pageID: "cv",
                    pageName: "CV",
                    url: "/cv",
                    showInMobileNav: true,
                },
                {
                    pageID: "shop",
                    pageName: "Shop",
                    url: "https://www.inprnt.com/gallery/kylejorve/",
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
                        url: "https://www.artstation.com/kylejorve",
                    },
                    {
                        name: "instagram",
                        label: "Instagram",
                        url: "https://www.instagram.com/kylejorve/",
                    },
                    {
                        name: "tumblr",
                        label: "Tumblr",
                        url: "https://kylejorve.tumblr.com/",
                    },
                    {
                        name: "email",
                        label: "Email",
                        url: "mailto:kyle@kylejorve.com",
                    },
                ],
                commerce: [
                    {
                        name: "patreon",
                        label: "Patreon",
                        url: "https://www.patreon.com/kylejorve",
                    },
                    {
                        name: "shop",
                        label: "Print Shop",
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
