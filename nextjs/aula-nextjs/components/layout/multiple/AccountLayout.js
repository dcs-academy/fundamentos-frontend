import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

export default function AccountLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container accountLayout">
        <main>{children}</main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
