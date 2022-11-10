import "../styles/globals.css";
import Layout from "../components/layout/multipleFn/Layout";

function MyApp({ Component, pageProps, router }) {
  const getLayout =
    Component.getLayout || ((page) => <Layout children={page} />);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
