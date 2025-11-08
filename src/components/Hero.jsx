import { useState, useEffect } from "react";
import video1 from "../assets/hero1.mp4";
import bottomImage from "../assets/bottom-drip.png"; // 🖼️ your bottom image here

export default function Hero() {
  const slides = [
    {
      text: "Bursting with flavour right to the core!",
      animation: "animate-slide-left",
    },
    { text: "Yes, that’s flavour!", animation: "animate-slide-up" },
    {
      text: "Natural, gluten-free & plant-based colours!",
      animation: "animate-slide-right",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center -mt-20 sm:-mt-20">
      {/* 🎥 Background Video */}
      <video
        src={video1}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🍫 Text overlay */}
      <div className="relative z-20 px-6">
        <h1
          key={slides[current].text}
          className={`text-5xl sm:text-6xl md:text-7xl font-jelly animate-choco-wave ${slides[current].animation}`}
        >
          {slides[current].text}
        </h1>

        <p className="mt-8 text-4xl md:text-5xl font-jelly font-extrabold drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] tracking-wide">
          <span className="inline-block bg-gradient-to-r from-[#ff2e63] to-[#ff6b81] bg-clip-text text-transparent animate-slide-in-left-bounce animate-bounce-loop">
            Colorful!
          </span>{" "}
          <span className="inline-block bg-gradient-to-r from-[#0072ff] to-[#00c6ff] bg-clip-text text-transparent animate-slide-in-bottom-bounce animate-bounce-loop">
            Chewy!
          </span>{" "}
          <span className="inline-block bg-gradient-to-r from-[#00b09b] to-[#96c93d] bg-clip-text text-transparent animate-slide-in-right-bounce animate-bounce-loop">
            Irresistible!
          </span>
        </p>
      </div>

      {/* 🍫 Bottom Decorative Image */}
      <div className="absolute bottom-0 w-full z-20 hidden lg:block">
        <img
          src={bottomImage}
          alt="Chocolate drip"
          className="w-full object-cover pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
