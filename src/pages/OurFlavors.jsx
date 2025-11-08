import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🍭 List of flavors
const flavors = [
  {
    name: "Banana Split",
    desc: "Usually found frequenting the latest restaurant to hit the scene. Always asks for the dessert menu because ‘life’s too short’, right?",
  },
  {
    name: "Blueberry",
    desc: "Organized list maker to a tee! Decisive, straightforward, and gets stuff done.",
  },
  {
    name: "Bubblegum",
    desc: "Daydreamer and creative soul — your imagination never stops bubbling.",
  },
  {
    name: "Butterscotch",
    desc: "A sweet-hearted people pleaser who tries to make everyone happy.",
  },
  { name: "Grape", desc: "Wine and cheese lover — the ultimate dinner host." },
  { name: "Coconut", desc: "Adventure junkie. Adrenaline is your oxygen." },
  {
    name: "Salted Caramel",
    desc: "Sassy, stylish, and calm — nothing shakes you.",
  },
  {
    name: "French Vanilla",
    desc: "Brunch expert with poached-egg perfection skills.",
  },
  {
    name: "Candy Floss",
    desc: "Friendly and chatty — you light up every room.",
  },
  { name: "Cranberry & Apple", desc: "Zen master with endless chill." },
  {
    name: "English Blackberry",
    desc: "Tea lover and period-drama enthusiast.",
  },
  { name: "Cola", desc: "Old-school but fun — life of every gathering." },
  { name: "Forest Fruits", desc: "Peaceful hiker who thrives outdoors." },
  { name: "Apple", desc: "Organized, punctual, and always prepared." },
  { name: "Hawaiian Pineapple", desc: "Rule breaker with a tropical vibe." },
  {
    name: "Lemon & Lime",
    desc: "Fearless, full of zest, always chasing adventure.",
  },
  {
    name: "Peach Bubble Tea",
    desc: "Playful, optimistic, and always glowing.",
  },
  {
    name: "Mango",
    desc: "Nomadic soul who collects experiences like treasures.",
  },
  {
    name: "Marshmallow",
    desc: "Soft-hearted adventurer who loves cozy nights.",
  },
  { name: "Caramel Popcorn", desc: "Cinematic, funny, and full of charm." },
  { name: "Passion Fruit", desc: "Driven achiever — your energy is magnetic." },
  { name: "Peachy Pie", desc: "Dependable and loyal friend everyone loves." },
  { name: "Pear", desc: "Grounded and eco-conscious — but fun at heart." },
  {
    name: "Cherry Blossom Soda",
    desc: "Radiant and kind — pure sunshine in a bottle.",
  },
  { name: "Pink Grapefruit", desc: "Energetic morning person with sparkle." },
  {
    name: "Pomegranate",
    desc: "Funny and witty — master of memes and smiles.",
  },
  { name: "Pina Colada", desc: "Life of the party, rain or shine." },
  { name: "Raspberry Jam", desc: "Strong, bold, and unstoppable." },
  { name: "Sour Lemon", desc: "Playfully sarcastic with the best humor." },
  { name: "Kiwi", desc: "Sweet but with a kick — unexpected and fun." },
  { name: "Watermelon", desc: "Social butterfly and camera magnet." },
  {
    name: "Strawberry Smoothie",
    desc: "Balanced, sweet, and naturally charming.",
  },
  { name: "Tangerine", desc: "Vibrant entertainer who spreads joy." },
  { name: "Strawberry", desc: "Ambitious, confident, and classy." },
  {
    name: "Tropical Punch",
    desc: "Vacation soul — always ready for the beach.",
  },
  { name: "Wild Cherry", desc: "Free-spirited with rock ‘n roll vibes." },
];

// 🍬 Use same list for Jelly Bean Gallery
const jellyFlavors = [...flavors];

export default function CandyPage() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openChest = () => {
    setOpen(true);
    setTimeout(() => {
      const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
      setSelected(randomFlavor);
    }, 1000);
    setTimeout(() => {
      setSelected(null);
      setOpen(false);
    }, 6000);
  };

  return (
    <>
      {/* ================= 🎁 TREASURE CHEST SECTION ================= */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen 
  px-4 py-10 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/treasure-bg.jpg')", // 🖼️ your custom image
        }}
      >
        {/* 🌈 Background Glow Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_80%,rgba(186,230,253,0.5)_0%,transparent_80%)]"></div>

        {/* 🍏 Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wide 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-gray-900 via-zinc-800 to-black
  drop-shadow-[0_0_25px_rgba(0,0,0,0.6)]"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Candy Treasure Chest
        </motion.h1>

        {/* 🍬 Subtext */}
        <p
          className="mt-4 text-xl sm:text-2xl text-transparent bg-clip-text 
bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 
font-semibold drop-shadow-[0_0_10px_rgba(255,69,0,0.8)] max-w-md"
        >
          Tap the treasure chest to reveal your secret flavor!
        </p>

        {/* 🎁 Chest Image */}
        <motion.div
          className="relative mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openChest}
        >
          <motion.img
            src={open ? "/images/chest-open.png" : "/images/chest-closed.png"}
            alt="Treasure Chest"
            className="w-40 sm:w-56 md:w-64 cursor-pointer select-none drop-shadow-2xl mx-auto"
            animate={{
              y: open ? [0, -8, 0] : 0,
              filter: open
                ? "drop-shadow(0px 0px 20px rgba(255,182,193,0.7))"
                : "drop-shadow(0px 0px 6px rgba(255,192,203,0.4))",
            }}
            transition={{ duration: 0.8, repeat: open ? Infinity : 0 }}
          />

          {/* 🍬 Flavor Popup */}
          <AnimatePresence>
            {selected && (
              <motion.div
                key={selected.name}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="fixed inset-x-4 bottom-24 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:bottom-[18%]
  w-[90vw] sm:w-[360px] md:w-[420px]
  px-6 sm:px-8 py-6 sm:py-7 text-center
  rounded-[2.5rem] border-2 border-yellow-500/80
  backdrop-blur-2xl shadow-[0_0_40px_rgba(255,215,0,0.6),0_0_80px_rgba(255,255,100,0.3)]
  bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-200
  overflow-hidden z-50 text-yellow-900 font-semibold
  relative before:absolute before:inset-0 before:bg-gradient-to-tr 
  before:from-transparent before:via-white/40 before:to-transparent 
  before:opacity-60 before:animate-[shine_3s_linear_infinite]"
                style={{
                  maxWidth: "90%",
                }}
              >
                {/* ✨ Gloss Shine */}
                <span
                  className="absolute inset-0 bg-gradient-to-r 
        from-transparent via-white/25 to-transparent 
        translate-x-[-100%] animate-[shine_4s_infinite]"
                />

                {/* 🍭 Candy Info */}
                <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-rose-600 drop-shadow mb-2 sm:mb-3 leading-snug">
                  {selected.name}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed opacity-90 px-2 sm:px-4">
                  {selected.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= 🍬 JELLY BEAN FLAVOR GALLERY ================= */}
      <div
        className="min-h-screen flex flex-col items-center justify-center 
  relative overflow-hidden py-16 px-4
  bg-gradient-to-b from-pink-50 via-amber-50 to-rose-100"
        style={{
          backgroundImage: `
      url('/images/candy-bg.jpg'),
      linear-gradient(to bottom, #ffe4ec, #fff1d9, #ffe4ec)
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 🎨 Background Lights */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200/50 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200/40 blur-3xl rounded-full animate-pulse"></div>

        {/* 🍭 Title */}
        <motion.h1
          className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-12 tracking-wide leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 💎 Outer Glow Halo */}
          <span
            className="absolute inset-0 blur-3xl bg-gradient-to-r 
    from-sky-300/50 via-blue-400/40 to-cyan-300/40 
    rounded-xl -z-10 animate-pulse"
          ></span>

          {/* 💙 Jelly Crystal Gradient Text */}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
      from-sky-800 via-blue-800 to-cyan-500 
      drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]
      px-4 sm:px-8"
          >
            Jelly Bean Flavor Gallery
          </span>

          {/* ✨ Shine Overlay (Moving Light) */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent 
      bg-[length:200%_100%] animate-[shine_4s_linear_infinite] rounded-xl mix-blend-overlay"
            aria-hidden="true"
          />

          {/* 💧 Soft Reflective Glow */}
          <span
            className="absolute inset-0 text-transparent bg-clip-text 
      bg-gradient-to-r from-cyan-100 via-blue-200 to-sky-100 
      blur-lg opacity-70"
            aria-hidden="true"
          >
            Jelly Bean Flavor Gallery
          </span>
        </motion.h1>

        {/* 🫘 Flavor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {jellyFlavors.map((flavor, index) => {
            // 🍬 Ten vibrant candy gradients
            const gradients = [
              "from-pink-300 via-rose-200 to-yellow-200", // Strawberry Lemon Swirl
              "from-lime-200 via-green-100 to-emerald-200", // Apple Mint Pop
              "from-sky-200 via-cyan-100 to-blue-200", // Blue Raspberry Frost
              "from-amber-200 via-orange-100 to-rose-100", // Peach Cream Burst
              "from-violet-200 via-fuchsia-200 to-pink-100", // Grape Bubble Pop
              "from-yellow-200 via-amber-100 to-lime-100", // Lemon Lime Zest
              "from-teal-200 via-sky-100 to-indigo-200", // Ocean Breeze Jelly
              "from-red-200 via-orange-100 to-amber-100", // Cherry Sunrise
              "from-rose-200 via-pink-100 to-fuchsia-200", // Cotton Candy Dream
              "from-emerald-200 via-teal-100 to-lime-200", // Watermelon Frost
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={flavor.name}
                className={`rounded-3xl bg-gradient-to-br ${gradient} 
          backdrop-blur-xl border border-white/40 shadow-lg p-5 
          hover:shadow-xl hover:shadow-pink-200/70 transition-all duration-500 
          cursor-pointer group relative overflow-hidden`}
                whileHover={{ scale: 1.05, y: -6 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
              >
                {/* ✨ Hover shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <h2 className="text-xl font-extrabold text-pink-800 mb-2 drop-shadow-sm">
                  {flavor.name}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                  {flavor.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
