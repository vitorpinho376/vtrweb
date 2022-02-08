import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Vtr</title>
                <link rel="icon" href="/favicon.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <Hero />
        </div>
    );
};

export default Home;
