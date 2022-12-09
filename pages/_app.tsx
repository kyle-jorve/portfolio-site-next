import type { AppProps } from "next/app";
import { SiteContextProvider } from "../context/global";
import Layout from "../components/layout/Layout";
import DefaultHead from "../components/layout/DefaultHead";
import Script from "next/script";
import "../styles/base/_index.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SiteContextProvider>
            <Layout>
                {/* FONT AWESOME */}
                <Script src="https://kit.fontawesome.com/867df664d5.js" />
                <DefaultHead />
                <Component {...pageProps} />
            </Layout>
        </SiteContextProvider>
    );
}
