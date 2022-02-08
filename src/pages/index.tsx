import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Vtr</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                <h1>Hello</h1>
            </main>
        </div>
    );
};

export default Home;
