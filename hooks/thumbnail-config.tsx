type ThumbnailConfigProps = {
	isNew?: boolean;
	isFeatured?: boolean;
	isDetail?: boolean;
	thumbnailKey: {
		path: string;
	};
};

export default function useThumbnailConfig(props: ThumbnailConfigProps) {
	return props.isNew
		? {
				sources: [
					{
						url: `${props.thumbnailKey.path}-1024.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey.path}-640.jpg`,
				},
		  }
		: props.isFeatured
		? {
				sources: [
					{
						url: `${props.thumbnailKey.path}-640.jpg`,
						minScreenWidth: 1440,
					},
					{
						url: `${props.thumbnailKey.path}-480.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey.path}-320.jpg`,
				},
		  }
		: props.isDetail
		? {
				sources: [
					{
						url: `${props.thumbnailKey.path}-480.jpg`,
						minScreenWidth: 640,
					},
				],
				mobile: {
					url: `${props.thumbnailKey.path}-640.jpg`,
				},
		  }
		: {
				sources: [
					{
						url: `${props.thumbnailKey.path}-480.jpg`,
						minScreenWidth: 1024,
					},
				],
				mobile: {
					url: `${props.thumbnailKey.path}-320.jpg`,
				},
		  };
}
