import React from "react";
import Head from "next/head";
import { AstronautScene } from "../components/AstronautScene/Scene.component";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Vtr | Senior Designer</title>
                <link rel="icon" href="/favicon.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,900;1,400;1,600;1,900&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="apple-touch-icon"
                    href="https://vitor.mobi/Image.png"
                />

                <meta name="twitter:card" content="Vtr | Senior Designer" />
                <meta name="twitter:site" content="@vitor376" />
                <meta name="twitter:url" content="https://vitor.mobi" />
                <meta
                    name="twitter:title"
                    content="Vitor Pinho | Senior Designer"
                />
                <meta
                    name="twitter:description"
                    content="Vitor Pinho builds awesome things for Web and Mobile and help business around the world to rethink their strategy and build stunning experiences for their users on multiple platforms. Designed for amazing apps like WhatsGood, Nibo and WizIQ."
                />

                <meta property="og:url" content="https://vitor.mobi/" />
                <meta
                    property="og:image"
                    content="https://vitor.mobi/Image.png"
                />
                <meta
                    property="og:title"
                    content="Vitor Pinho | Senior Designer"
                />
                <meta
                    property="og:description"
                    content="Vitor Pinho builds awesome things for Web and Mobile and help business around the world to rethink their strategy and build stunning experiences for their users on multiple platforms. Designed for amazing apps like Stone, WhatsGood, Nibo and WizIQ."
                />
                <meta property="og:site_name" content="Vitor.mobi" />
                <meta property="og:type" content="portfolio" />

                <meta name="HandheldFriendly" content="true" />
                <meta name="author" content="Vitor Pinho" />
            </Head>
            <AstronautScene />
        </>
    );
};

export default Home;
