import Head from 'next/head';
import "../scss/styles.scss"

import Header from "../components/Header";
import AddBookForm from "../components/AddBook";

import ReadingListContextProvider from "../contexts/contextReadingList";
import ReadingList from "../components/ReadingList";

export default function Home() {
    return (
        <React.StrictMode>
            <div className="container">
                <Head>
                    <title>Reading List App</title>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Overpass|Permanent+Marker"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <main className={"container"}>
                    <ReadingListContextProvider>
                        <Header/>
                        <ReadingList/>
                        <AddBookForm/>
                    </ReadingListContextProvider>
                </main>
            </div>
        </React.StrictMode>
    );
}
