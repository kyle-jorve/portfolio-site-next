import "../styles/base/_index.css";
import type { AppProps } from "next/app";
import { SiteContextProvider } from "../context/global";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SiteContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SiteContextProvider>
    );
}
