import Head from 'next/head'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <main className={"container"}>
                <h1>Todo App</h1>
                <p>You have XXX todos</p>




            </main>

            <footer>

            </footer>
        </div>
    )
}
