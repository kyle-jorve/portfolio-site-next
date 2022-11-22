import type { AppProps } from "next/app";
import { Fragment } from "react";
import DefaultHead from "../components/layout/DefaultHead";
import "../styles/base/_index.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <DefaultHead />
            <Component {...pageProps} />
        </Fragment>
    );
}
