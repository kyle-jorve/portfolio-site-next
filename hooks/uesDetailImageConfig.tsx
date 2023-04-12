export default function useDetailImageConfig(srcPath: string | undefined) {
	if (!srcPath) return undefined;

	return {
		sources: [
			{
				url: `${srcPath}-1920.jpg`,
				minScreenWidth: 1440,
			},
			{
				url: `${srcPath}-1440.jpg`,
				minScreenWidth: 1024,
			},
			{
				url: `${srcPath}-1024.jpg`,
				minScreenWidth: 640,
			},
		],
		mobile: {
			url: `${srcPath}-640.jpg`,
		},
	};
}
