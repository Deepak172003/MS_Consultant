import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import RevealOnScroll from "./RevealOnScroll";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      {/* key= remounts on navigation so the page-enter fade plays every time */}
      <main key={pathname} className="page-enter">
        {children}
      </main>
      <RevealOnScroll />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
