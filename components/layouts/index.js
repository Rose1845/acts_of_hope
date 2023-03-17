import Navbar from "../navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "../footer";
function Layout({ children }) {
  return (
    <div className="">
      <SessionProvider>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </div>
  );
}
export default Layout;
