import { store } from "@/app/store";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Not Just a Developer</title>
        <meta
          name="description"
          content="Gabriel Fortià's personal site"
          key="desc"
        />{" "}
        <meta
          name="title"
          property="og:title"
          content="Not Just a Developer by Gabriel Fortià"
        />
        <meta
          name="image"
          property="og:image"
          content="https://i.postimg.cc/0j2JrNBL/blog-UI.png"
        />
      </Head>

      <Provider store={store}>
        <main
          className={`${montserrat.variable} font-mont bg-white  w-full min-h-screen`}
        >
          <NavBar />
          <Component {...pageProps} />
          <Footer className="" />
        </main>
      </Provider>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
