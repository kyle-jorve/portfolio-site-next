import { SocialIconType } from "../../hooks/data/global-data";
import styles from "../../styles/layout/Social.module.css";

type SocialIconProps = {
    className?: string;
    attributes?: {
        tabIndex: number | undefined;
    };
    style?: {
        [prop: string]: string;
    };
} & SocialIconType &
    React.PropsWithChildren;

function SocialIcon(props: SocialIconProps) {
    const iconClass = props.name;
    const classes = [props.className, styles["social__item"], !props.icon && `icon icon--${iconClass}`].filter(
        (c) => c,
    );

    return (
        <a
            className={classes.join(" ")}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            title={props.name}
            aria-label={props.name}
            style={props.style}
            {...props.attributes}
        >
            {props.children}
        </a>
    );
}

export default SocialIcon;
