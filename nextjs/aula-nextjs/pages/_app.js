import "../styles/globals.css";
import Layout from "../components/layout/multiple/Layout";
import AccountLayout from "../components/layout/multiple/AccountLayout";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/account")) {
    return (
      <AccountLayout>
        <Component {...pageProps} />
      </AccountLayout>
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
