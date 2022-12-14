export default function useDetailImageConfig(srcPath: string | boolean) {
    if (!srcPath) return;

    const configObj = {
        sources: [
            {
                imageWidth: "1920px",
                minScreenWidth: "1440px",
            },
            {
                imageWidth: "1440px",
                minScreenWidth: "1024px",
            },
            {
                imageWidth: "1024px",
                minScreenWidth: "640px",
            },
        ],
        mobile: {
            imageWidth: "640px",
        },
    };

    return `${configObj.sources.map((src) => `(min-width: ${src.minScreenWidth}) ${src.imageWidth}`).join(", ")}, ${
        configObj.mobile.imageWidth
    }`;
}
