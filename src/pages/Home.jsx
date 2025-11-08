import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";

// Example images (replace with real images or URLs)
import img1 from "../assets/flavor1.png";
import img2 from "../assets/flavor2.png";
import img3 from "../assets/flavor3.png";
import img4 from "../assets/flavor4.png";

export default function Home() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const { scrollY } = useViewportScroll();

  // Auto Carousel Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // 🎈 Slight vertical parallax (bubbles move slower than scroll)
  const parallaxY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="text-center bg-gradient-to-b from-pink-50 via-white to-yellow-50 overflow-hidden">
      {/* 🌈 Hero Section */}
      <Hero />

      {/* 🍬 Animated Intro Section */}
      <section className="relative px-6 pt-24 pb-20 overflow-hidden rainbow-bg">
        {/* ✨ Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-4xl md:text-6xl font-jelly mt-12 bg-[linear-gradient(180deg,#fff,#ffb6c1,#ff7eb9,#ffde59,#ffb6c1)] bg-clip-text text-transparent tracking-wide [text-shadow:_2px_3px_0_rgba(0,0,0,0.3),_4px_6px_0_rgba(0,0,0,0.15)] drop-shadow-[0_5px_10px_rgba(0,0,0,0.4)] transform perspective-[900px]"
        >
          Taste the Rainbow of Happiness!
        </motion.h2>

        {/* 🍬 Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative z-10 text-[#FFF8E7] mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
        >
          Welcome to{" "}
          <span className="font-jelly text-white/90 animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            Jelly Bean Candies
          </span>{" "}
          — where every bite bursts with{" "}
          <span className="font-jelly text-[#FFE066] tracking-wide drop-shadow-[0_0_10px_rgba(255,224,102,0.8)] animate-bounce-slow">
            FLAVOR
          </span>
          ,{" "}
          <span className="font-jelly text-[#FF4C4C] tracking-wide drop-shadow-[0_0_12px_rgba(255,76,76,0.8)] animate-bounce-slower">
            FUN
          </span>
          , and{" "}
          <span className="font-jelly text-[#3ECFFF] tracking-wide drop-shadow-[0_0_10px_rgba(62,207,255,0.9)] animate-bounce-slow">
            COLOR!
          </span>{" "}
          Our beans are made with love, joy, and just the right amount of sugar
          sparkle.
        </motion.p>
      </section>

      {/* 🍡 Modern “36 Huge Flavours” Carousel Section */}
      <section className="relative py-24 bg-gradient-to-b from-amber-200 via-lime-100 to-sky-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Title + Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-jelly text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 drop-shadow-lg">
              36 Huge Flavours
            </h2>
            <div className="mt-8 max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed space-y-5">
              <p>
                We have taken some of the greatest flavours in the world and
                infused them into our fancy little jelly beans, meaning every
                bean bursts with an exciting flavour waiting to tantalise your
                senses.
              </p>
              <p>
                From the tropical delight of{" "}
                <span className="font-semibold text-jellyYellow">Mango</span> to
                the joyous combination of{" "}
                <span className="font-semibold text-red-600">
                  Cranberry & Apple
                </span>
                , you can enjoy the explosion of tangy, zesty, and sweet fruit
                flavours — all without harmful additives.
              </p>
              <p>
                With just one jar, you can experience desserts from candy floss
                to fluffy marshmallows, and drinks like{" "}
                <span className="font-semibold text-red-500">
                  Strawberry Smoothie
                </span>{" "}
                and{" "}
                <span className="font-semibold text-amber-700">
                  Pina Colada
                </span>
                . 🍹
              </p>
            </div>
          </motion.div>

          {/* 🎠 3D Carousel */}
          <div className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-purple-400/40 bg-gradient-to-br from-purple-800 via-purple-600 to-indigo-700 shadow-[0_0_40px_rgba(168,85,247,0.6)] perspective-[1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, rotateY: 10, scale: 1.02 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -10, scale: 1.02 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex justify-center items-center w-full h-[550px] md:h-[650px] bg-gradient-to-br from-purple-900/70 to-indigo-800/60 backdrop-blur-xl"
              >
                <img
                  src={images[current]}
                  alt={`Flavour ${current + 1}`}
                  className="max-h-full max-w-full object-contain rounded-[2rem] drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transform transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* 🌸 Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-gradient-to-r from-fuchsia-400 to-violet-300 scale-125 shadow-[0_0_15px_rgba(217,70,239,0.9)]"
                      : "bg-purple-200/70 hover:bg-purple-300/90"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 🌌 Subtext + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-center mt-14"
          >
            <p className="text-2xl md:text-3xl font-jelly text-violet-600 drop-shadow-[0_2px_8px_rgba(139,92,246,0.5)]">
              We dare you to go on a mind-boggling taste adventure
            </p>
            <a
              href="/buy"
              className="inline-block mt-8 px-12 py-4 bg-gradient-to-r from-violet-500 via-purple-600 to-fuchsia-500 text-white text-lg font-semibold rounded-full shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-110 hover:shadow-[0_0_35px_rgba(192,132,252,0.8)] hover:from-fuchsia-500 hover:to-violet-600 transition-all duration-500 ease-out"
            >
              Find Your Favourites Now!
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🍬 Our Story Section with Floating Rainbow Bubbles */}
      <section className="relative py-24 px-8 md:px-20 bg-gradient-to-r from-pink-100 via-white to-amber-100 overflow-hidden">
        {/* 🌈 Floating Glassy Rainbow Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[
            {
              color: "from-red-400 to-pink-300",
              left: "10%",
              size: "w-16 h-16",
              delay: 0,
              duration: 18,
            },
            {
              color: "from-orange-400 to-yellow-300",
              left: "25%",
              size: "w-14 h-14",
              delay: 3,
              duration: 20,
            },
            {
              color: "from-yellow-300 to-lime-200",
              left: "40%",
              size: "w-12 h-12",
              delay: 5,
              duration: 22,
            },
            {
              color: "from-green-400 to-emerald-300",
              left: "55%",
              size: "w-20 h-20",
              delay: 7,
              duration: 24,
            },
            {
              color: "from-sky-400 to-cyan-300",
              left: "70%",
              size: "w-14 h-14",
              delay: 2,
              duration: 19,
            },
            {
              color: "from-indigo-400 to-blue-300",
              left: "85%",
              size: "w-16 h-16",
              delay: 4,
              duration: 21,
            },
            {
              color: "from-purple-400 to-pink-400",
              left: "50%",
              size: "w-24 h-24",
              delay: 6,
              duration: 26,
            },
          ].map((bubble, i) => (
            <motion.div
              key={i}
              className={`absolute ${bubble.size} bg-gradient-to-br ${bubble.color} rounded-full mix-blend-screen backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.4)] border border-white/30`}
              style={{ bottom: "-20%", left: bubble.left }}
              animate={{
                y: ["0%", "-150%"], // 🎈 Upward float
                x: ["0%", i % 2 === 0 ? "15%" : "-15%"], // gentle side sway
                scale: [1, 1.25, 1],
                opacity: [0.8, 1, 0.7],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bubble.delay,
              }}
            >
              {/* ✨ Light reflections inside bubble */}
              <div className="absolute top-[20%] left-[25%] w-[40%] h-[40%] rounded-full bg-white/70 blur-md opacity-60" />
              <div className="absolute inset-0 rounded-full bg-white/40 blur-[8px] opacity-40" />
            </motion.div>
          ))}
        </div>

        {/* 🧁 Foreground Content */}
        <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="text-4xl md:text-5xl font-jelly text-pink-500 drop-shadow-[0_3px_8px_rgba(249,168,212,0.6)]"
          >
            {"Our Story".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 500, damping: 12 },
                  },
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-800 leading-relaxed font-light max-w-3xl mx-auto"
          >
            The Jelly Bean Factory is on a mission to help you say yes! Yes to
            flavour. Yes to adventure. Yes to life. When did this mission begin,
            we hear you ask? Well, it began in 1998 in Dublin, Ireland — with a
            father and son duo who dared to be different.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
