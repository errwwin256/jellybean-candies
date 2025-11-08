import footerBg from "../assets/footer-bg.jpg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative mt-0 text-center text-gray-800 overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🍭 Main footer content */}
      <div className="relative z-10 pt-14 pb-10 px-4 sm:px-6 md:px-10 bg-black/30 backdrop-blur-[2px] text-white rounded-t-3xl">
        {/* 🍬 Logo text */}
        <h2
          className="
    font-jelly 
    mb-4 
    text-4xl 
    sm:text-5xl 
    md:text-6xl 
    lg:text-7xl 
    leading-tight 
    flex flex-wrap justify-center
  "
        >
          {"Jelly Bean Candies".split("").map((char, i) => (
            <span
              key={i}
              className="animate-candy-pearl glossy inline-block"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p className="text-gray-100 max-w-sm sm:max-w-md mx-auto mb-6 text-sm sm:text-base font-medium drop-shadow">
          Sweetening Smiles Everywhere — Crafted in Candyville since 2000
        </p>

        {/* 💬 Follow Us section */}
        <div className="flex flex-col items-center space-y-3">
          <p className="text-base sm:text-lg font-jelly text-yellow-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
            Follow us on
          </p>

          {/* 👇 Colorful hand emoji */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <div className="text-3xl sm:text-4xl md:text-5xl animate-float bg-gradient-to-r from-jellyPink via-jellyYellow to-jellyBlue bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]">
              👇
            </div>
          </div>

          {/* 🌟 Jelly Bean Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-700/40 hover:scale-110 transition-transform duration-300"
            >
              <Facebook className="text-white" size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg shadow-pink-700/40 hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="text-white" size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg shadow-purple-700/40 hover:scale-110 transition-transform duration-300"
            >
              <Twitter className="text-white" size={22} />
            </a>

            <a
              href="#"
              className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-red-600 shadow-lg shadow-red-700/40 hover:scale-110 transition-transform duration-300"
            >
              <Youtube className="text-white" size={22} />
            </a>
          </div>
        </div>

        {/* 🧁 Footer bottom text */}
        <p className="text-gray-200 mt-8 text-xs sm:text-sm drop-shadow max-w-sm mx-auto">
          © {new Date().getFullYear()} Jelly Bean Candies — Made with ❤️ and
          Sugar.
        </p>
      </div>
    </footer>
  );
}
