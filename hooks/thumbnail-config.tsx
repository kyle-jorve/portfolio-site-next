import { ThumbnailConfigProps } from "../types/gallery-types";

export default function useThumbnailConfig(props: ThumbnailConfigProps) {
	if (props.isNew) {
		return {
			sources: [
				{
					url: `${props.thumbKey}-1024.jpg`,
					minScreenWidth: 640,
				},
			],
			mobile: {
				url: `${props.thumbKey}-640.jpg`,
			},
		};
	} else if (props.isFeatured) {
		return {
			sources: [
				{
					url: `${props.thumbKey}-640.jpg`,
					minScreenWidth: 1440,
				},
				{
					url: `${props.thumbKey}-480.jpg`,
					minScreenWidth: 640,
				},
			],
			mobile: {
				url: `${props.thumbKey}-320.jpg`,
			},
		};
	} else if (props.isDetail) {
		return {
			sources: [
				{
					url: `${props.thumbKey}-480.jpg`,
					minScreenWidth: 640,
				},
			],
			mobile: {
				url: `${props.thumbKey}-640.jpg`,
			},
		};
	} else {
		return {
			sources: [
				{
					url: `${props.thumbKey}-480.jpg`,
					minScreenWidth: 1024,
				},
			],
			mobile: {
				url: `${props.thumbKey}-320.jpg`,
			},
		};
	}
}
