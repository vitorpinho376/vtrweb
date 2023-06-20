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

                <meta
                    name="twitter:card"
                    content="Vtr | Senior Design Technologist"
                />
                <meta name="twitter:site" content="@vitor376" />
                <meta name="twitter:url" content="https://vitor.mobi" />
                <meta
                    name="twitter:title"
                    content="Vitor Pinho | Senior Design Technologist"
                />
                <meta
                    name="twitter:description"
                    content="Meet Vitor Pinho, the design technologist who seamlessly blends creativity and technical expertise. With over 12 years of experience and a portfolio showcasing collaborations with renowned companies like Stone, Carta, Origin, and Whatsgood, Pinho bridges the gap between design and development. From translating visionary concepts into practical solutions to creating intuitive user experiences, Pinho leverages design systems and front-end technologies to deliver exceptional results. Partner with Pinho today and unleash the power of design + technology for your digital endeavors."
                />

                <meta property="og:url" content="https://vitor.mobi/" />
                <meta
                    property="og:image"
                    content="https://vitor.mobi/Image.png"
                />
                <meta
                    property="og:title"
                    content="Vitor Pinho | Senior Design Technologist"
                />
                <meta
                    property="og:description"
                    content="Meet Vitor Pinho, the design technologist who seamlessly blends creativity and technical expertise. With over 12 years of experience and a portfolio showcasing collaborations with renowned companies like Stone, Carta, Origin, and Whatsgood, Pinho bridges the gap between design and development. From translating visionary concepts into practical solutions to creating intuitive user experiences, Pinho leverages design systems and front-end technologies to deliver exceptional results. Partner with Pinho today and unleash the power of design + technology for your digital endeavors."
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
