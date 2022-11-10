import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
