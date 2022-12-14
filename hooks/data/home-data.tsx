export type HomeBioType = {
    img: {
        path: string;
        width: number;
        height: number;
        squarePath: string;
        alt: string;
    };
};

export default function useHomeData() {
    return {
        get intro() {
            return {
                heroImagePath: "/images/home-hero/home-hero.jpg",
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
                    path: "/images/portrait/portrait.jpg",
                    squarePath: "/images/portrait/portrait-square.jpg",
                    alt: "A photograph of Kyle Jorve smiling at the camera, a blurred scene of lush plant life behind him",
                    width: 1920,
                    height: 1280,
                },
            };
        },
    };
}
