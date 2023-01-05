import styles from "../../../styles/layout/Nav.module.css";

type MainNavParentItemProps = {
    onClick: React.MouseEventHandler;
    label: string;
    id: string;
    url: string;
    totalDelay: number;
    index: number;
    navItems: {
        pageID: string;
        pageName: string;
        url: string;
    }[];
    attributes?: {
        tabIndex?: number | undefined;
    };
    style?: {
        [prop: string]: string;
    };
};

export default function MainNavParentItem(props: MainNavParentItemProps) {}
