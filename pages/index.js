import Head from 'next/head';
import "../scss/styles.scss"

import Header from "../components/Header";
import AddBookForm from "../components/AddBook";

import ReadingListContextProvider from "../contexts/contextReadingList";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Reading List App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Overpass|Permanent+Marker"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <main className={"container"}>
                <React.StrictMode>
                    <ReadingListContextProvider>
                        <Header count={0}/>
                        <AddBookForm/>
                    </ReadingListContextProvider>
                </React.StrictMode>
            </main>
        </div>
    );
}
