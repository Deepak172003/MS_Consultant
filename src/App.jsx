import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PlaySchool from "./pages/PlaySchool";
import StudyMaterial from "./pages/StudyMaterial";
import Marketing from "./pages/Marketing";
import HRServices from "./pages/HRServices";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play-school" element={<PlaySchool />} />
          <Route path="/study-material" element={<StudyMaterial />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/hr-services" element={<HRServices />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
