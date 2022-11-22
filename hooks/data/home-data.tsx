export type HomeBioType = {
    img: {
        sources: {
            url: string;
            minScreenWidth: number;
        }[];
        mobileSource: string;
        square: string;
        alt: string;
    };
};

export const homeData = {
    get intro() {
        return {
            heroImageKey: "/images/home-hero/home-hero",
        };
    },
    get gallery() {
        return {
            itemsLimit: 4,
        };
    },
    get bio(): HomeBioType {
        return {
            img: {
                sources: [
                    {
                        url: "/images/portrait/portrait-1920.jpg",
                        minScreenWidth: 1440,
                    },
                    {
                        url: "/images/portrait/portrait-1440.jpg",
                        minScreenWidth: 1024,
                    },
                    {
                        url: "/images/portrait/portrait-1024.jpg",
                        minScreenWidth: 640,
                    },
                ],
                mobileSource: "/images/portrait/portrait-640.jpg",
                square: "/images/portrait/portrait-square-640.jpg",
                alt: "A photograph of Kyle Jorve smiling at the camera, a blurred scene of lush plant life behind him",
            },
        };
    },
};
