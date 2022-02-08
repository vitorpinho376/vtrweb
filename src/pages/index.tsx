import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";

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
            <section>
                <h1>
                    <b>Design + Technology </b>
                    can improve the world we live in.
                </h1>
            </section>
        </div>
    );
};

export default Home;
