import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import * as gtag from "../../lib/gtag";

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
        <ThemeProvider theme={theme}>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
