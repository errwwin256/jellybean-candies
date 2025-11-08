import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🛒 Import Cart Context
import { CartProvider } from "../context/CartContext";

// Pages
import Home from "../pages/Home";
import OurBeans from "../pages/OurBeans";
import Buy from "../pages/Buy";
import OurFlavors from "../pages/OurFlavors";
import OurStory from "../pages/OurStory";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    // 🛍️ Wrap the whole router with CartProvider
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {/* 🧩 Add padding-top to push content below the fixed navbar */}
          <main className="flex-grow bg-gradient-to-b from-pink-50 to-white pt-[6.5rem] md:pt-[5rem]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-beans" element={<OurBeans />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/our-flavors" element={<OurFlavors />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
