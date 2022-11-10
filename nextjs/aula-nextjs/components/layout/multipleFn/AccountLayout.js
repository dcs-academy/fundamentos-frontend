import { getLayout as getSiteLayout } from "./Layout";
import Sidebar from "../Sidebar";

export default function AccountLayout({ children }) {
  return (
    <>
      <div className="container accountLayout">
        <main>{children}</main>
        <Sidebar />
      </div>
    </>
  );
}

export const getLayout = (page) =>
  getSiteLayout(<AccountLayout>{page}</AccountLayout>);
