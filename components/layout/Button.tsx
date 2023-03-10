import { useContext } from "react";
import SiteContext from "../../context/global";
import { ButtonProps } from "../../types/global-types";

export default function Button({
	children = null,
	tabIndex = undefined,
	...otherProps
}: ButtonProps) {
	const context = useContext(SiteContext);

	return (
		<button
			tabIndex={context.lightboxStatus === 'open' ? -1 : undefined}
			{...otherProps}
		>
			{children}
		</button>
	)
}