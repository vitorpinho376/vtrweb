import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import * as gtag from "../../lib/gtag";
import Analytics from "../components/Analytics/Analytics";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyle />
            <Analytics />
        </>
    );
};

export default MyApp;
