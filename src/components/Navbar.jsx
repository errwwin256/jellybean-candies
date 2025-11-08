import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", color: "text-jellyPink" },
    { name: "Our Beans", path: "/our-beans", color: "text-jellyBlue" },
    { name: "Cart", path: "/buy", color: "text-jellyYellow" },
    { name: "Flavors", path: "/our-flavors", color: "text-jellyGreen" },
    { name: "Story", path: "/our-story", color: "text-jellyPurple" },
    { name: "FAQ", path: "/faq", color: "text-jellyOrange" },
    { name: "Contact", path: "/contact", color: "text-jellyRed" },
  ];

  return (
    <nav
      className={`navbar fixed w-full top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-white/30"
          : "bg-white/30 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* 🍬 Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-jellyPink via-jellyYellow to-jellyBlue blur-[1px]" />
            <div className="flex space-x-[1px] font-jelly text-3xl sm:text-4xl px-5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-sm">
              {["J", "e", "l", "l", "y", " ", "B", "e", "a", "n", "s"].map(
                (letter, i) => (
                  <span
                    key={i}
                    className={`text-${
                      [
                        "jellyPink",
                        "jellyBlue",
                        "jellyYellow",
                        "jellyGreen",
                        "jellyPurple",
                        "jellyPink",
                        "jellyBlue",
                        "jellyYellow",
                        "jellyGreen",
                        "jellyPurple",
                      ][i % 10]
                    } inline-block hover:-translate-y-1 hover:scale-110 transition-transform duration-200`}
                  >
                    {letter}
                  </span>
                )
              )}
            </div>
          </div>
        </Link>

        {/* 💻 Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-jelly text-lg tracking-tight items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative ${
                  link.color
                } transition-all duration-300 hover:-translate-y-1 hover:scale-110 inline-block ${
                  location.pathname === link.path ? "opacity-80" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Toggle */}
        <button
          className="md:hidden p-3 rounded-full bg-gradient-to-r from-jellyPink via-jellyYellow to-jellyBlue text-white shadow-md hover:scale-110 transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg shadow-md border-t border-white/30">
          <ul className="flex flex-col items-center py-5 gap-3 font-jelly text-lg sm:text-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`${link.color} hover:-translate-y-1 hover:scale-110 transition-transform duration-200`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
