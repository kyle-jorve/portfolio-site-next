import { ThumbnailConfigProps } from "../types/gallery-types";

export default function useThumbnailConfig({
	thumbKey,
	isNew = false,
	isFeatured = false,
	isDetail = false,
	isVideo = false,
}: ThumbnailConfigProps) {
	if (isNew) {
		return {
			sources: [
				{
					url: `${thumbKey}-1024.jpg`,
					minScreenWidth: 640,
				},
			],
			mobile: {
				url: `${thumbKey}-640.jpg`,
			},
		};
	} else if (isFeatured || isVideo || isDetail) {
		return {
			mobile: {
				url: `${thumbKey}-640.jpg`,
			},
		};
	} else {
		return {
			sources: [
				{
					url: `${thumbKey}-1024.jpg`,
					minScreenWidth: 1024,
				},
			],
			mobile: {
				url: `${thumbKey}-640.jpg`,
			},
		};
	}
}
