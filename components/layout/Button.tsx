import { useContext, forwardRef } from "react";
import SiteContext from "../../context/global";
import { ButtonProps } from "../../types/global-types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ children = null, tabIndex = undefined, ...otherProps },
	ref,
) {
	const context = useContext(SiteContext);

	return (
		<button
			tabIndex={context.lightboxStatus === "open" ? -1 : tabIndex}
			ref={ref}
			{...otherProps}
		>
			{children}
		</button>
	);
});

export default Button;
