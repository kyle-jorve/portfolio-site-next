import type { AppProps } from "next/app";
import { SiteContextProvider } from "../context/global";
import Layout from "../components/layout/Layout";
import DefaultHead from "../components/layout/DefaultHead";
import "../styles/base/_index.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SiteContextProvider>
            <Layout>
                <DefaultHead />
                <Component {...pageProps} />
            </Layout>
        </SiteContextProvider>
    );
}
