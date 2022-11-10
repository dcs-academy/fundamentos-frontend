import "../styles/globals.css";
import Layout from "../components/layout/multiple/Layout";

function MyApp({ Component, pageProps, router }) {
  const CustomLayout = Component.layout || Layout;

  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp;
