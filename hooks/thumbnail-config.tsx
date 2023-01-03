type ThumbnailConfigProps = {
    isNew?: boolean;
    isFeatured?: boolean;
    isDetail?: boolean;
};

export default function useThumbnailConfig(props: ThumbnailConfigProps) {
    const configObj = props.isNew
        ? {
              sources: [
                  {
                      imageWidth: "1024px",
                      minScreenWidth: "640px",
                  },
              ],
              mobile: {
                  imageWidth: "100vw",
              },
          }
        : props.isFeatured
        ? {
              sources: [
                  {
                      imageWidth: "524px",
                      minScreenWidth: "1440px",
                  },
                  {
                      imageWidth: "33vw",
                      minScreenWidth: "640px",
                  },
              ],
              mobile: {
                  imageWidth: "50vw",
              },
          }
        : props.isDetail
        ? {
              sources: [
                  {
                      imageWidth: "480px",
                      minScreenWidth: "640px",
                  },
              ],
              mobile: {
                  imageWidth: "66vw",
              },
          }
        : {
              sources: [
                  {
                      imageWidth: "480px",
                      minScreenWidth: "1024px",
                  },
              ],
              mobile: {
                  imageWidth: "50vw",
              },
          };

    return `${configObj.sources.map((src) => `(min-width: ${src.minScreenWidth}) ${src.imageWidth}`).join(", ")}, ${
        configObj.mobile.imageWidth
    }`;
}
