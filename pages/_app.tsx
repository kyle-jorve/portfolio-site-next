import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SiteContextProvider } from "../context/global";
import Layout from "../components/layout/Layout";
import "../styles/base/_index.css";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const isDetailPage = router.query.itemID !== undefined;

    return (
        <SiteContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SiteContextProvider>
    );
}
