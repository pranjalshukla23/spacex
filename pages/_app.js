import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../app/store";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
  ReactGA.initialize("G-4KTDMVWTEC");
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
