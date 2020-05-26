import Head from 'next/head';
import "../scss/styles.scss"

import Header from "../components/Header";
import AddBook from "../components/AddBook";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>


                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Overpass|Permanent+Marker"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <main className={"container"}>
                <React.StrictMode>
                    <Header count={0}/>
                    <AddBook />
                </React.StrictMode>
            </main>

            <footer>

            </footer>
        </div>
    )
}
