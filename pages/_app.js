import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../app/store";
import ReactGA from "react-ga4";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  ReactGA.initialize("G-L0YG4TF47K");
  return (
    <>
      <Head>
        <title>Your title</title>
        <meta name='description' content='Your description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5WXQDJQH');
      `}
      </Script>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
