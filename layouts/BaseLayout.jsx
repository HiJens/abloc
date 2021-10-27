// Next.js
import Head from "next/head";

// Partials
import { Footer, Header } from "../partials";

const BaseLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Head>
                <title>A'Bloc Coaching</title>
                <meta charSet='utf-8' />
                <meta name="description" content="Een gezonde geest in een gezond lichaam”  is waarschijnlijk een gezegde die je al veel gehoord hebt, maar er wordt vaak geen belang aan gehecht. Bij A’bloc is dit een van de kernwaardes, wat mij onderscheid van de rest." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <Header 
            />

            <main className="main">
                {children}
            </main>

            <Footer
                name="A'Bloc Coaching"
            />
        </div>
    );
};

export default BaseLayout;