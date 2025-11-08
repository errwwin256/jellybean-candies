import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 sm:px-10 py-24 sm:py-32 overflow-hidden min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(255, 250, 240, 0.95), rgba(255, 230, 220, 0.85)),
          url('/images/story.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌈 Decorative Nested Vector Shapes */}
      <div className="absolute -top-32 -left-24 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100 via-pink-100 to-transparent rounded-[50%] blur-3xl opacity-70"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-yellow-200/60 via-pink-100/60 to-transparent rounded-[60%] blur-3xl"></div>

      {/* 🏷️ Title */}
      <motion.h2
        className="relative text-5xl sm:text-6xl md:text-7xl font-black mb-20 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-violet-700 via-purple-500 to-fuchsia-400 
  drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Our Story
      </motion.h2>

      {/* 1️⃣ Story Section – Left */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center gap-10 max-w-6xl mb-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 bg-gradient-to-br from-white/70 to-amber-50/60 p-10 rounded-[2.5rem] shadow-xl border border-amber-200/60 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-amber-700 mb-4 font-[Poppins]">
            Humble Beginnings
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed font-[Inter]">
            Jelly Bean Candies started as a small dream in a tiny kitchen, where
            colorful sweets brought joy to everyone who tasted them. What began
            as a passion for sugary art turned into a brand dedicated to
            spreading smiles and sweetness across the world.
          </p>
        </div>

        <motion.img
          src="/images/jell1.jpg"
          alt="Humble Beginnings"
          className="md:w-1/2 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover"
        />
      </motion.div>

      {/* 2️⃣ Story Section – Right */}
      <motion.div
        className="relative flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mb-24"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 bg-gradient-to-bl from-pink-50/70 via-rose-50/60 to-white/60 p-10 rounded-[2.5rem] shadow-xl border border-rose-200/60 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-pink-700 mb-4 font-[Poppins]">
            Dare to Dream
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed font-[Inter]">
            From a family start-up to being part of a leading confectionery
            multinational,{" "}
            <span className="font-semibold">The Jelly Bean Factory®</span> has
            championed gourmet jelly beans for over 20 years — bright colors,
            bold flavors, and 100% joy in every bite.
          </p>
        </div>

        <motion.img
          src="/images/jell2.jpg"
          alt="Dare to Dream"
          className="md:w-1/2 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover"
        />
      </motion.div>

      {/* 3️⃣ Story Section – Left */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center gap-10 max-w-6xl mb-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 bg-gradient-to-br from-amber-50/80 via-yellow-50/70 to-white/60 p-10 rounded-[2.5rem] shadow-xl border border-yellow-200/60 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-amber-700 mb-4 font-[Poppins]">
            Naturally Sweet
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed font-[Inter]">
            Every gourmet jelly bean is crafted with{" "}
            <span className="font-semibold">natural flavors</span>,{" "}
            <span className="font-semibold">vibrant colors</span>, and is{" "}
            <span className="font-semibold">gelatin-free</span> &{" "}
            <span className="font-semibold">gluten-free</span> — because candy
            should make you feel as good as it tastes.
          </p>
        </div>

        <motion.img
          src="/images/jell3.jpg"
          alt="Naturally Sweet"
          className="md:w-1/2 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover"
        />
      </motion.div>
    </section>
  );
}
