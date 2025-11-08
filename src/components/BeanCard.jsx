import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function BeanCard({ name, color, image, flavor }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ name, color, image, flavor }); // 🔥 triggers toast from CartContext
    setAdded(true);

    // Reset button after 1.2s
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 border border-white/30 flex flex-col justify-between"
    >
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-36 sm:h-40 md:h-48 object-contain mx-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <h3 className="text-lg sm:text-xl font-jelly text-jellyPurple mt-4 mb-1 leading-tight">
          {name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-1 sm:px-2">
          {flavor}
        </p>
      </div>

      {/* 🎨 Animated Add to Cart Button */}
      <motion.button
        onClick={handleAdd}
        whileTap={{ scale: 0.9 }}
        animate={added ? { scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] } : {}}
        transition={{ duration: 0.6 }}
        className={`mt-4 ${
          added
            ? "bg-gradient-to-r from-jellyGreen to-jellyYellow"
            : "bg-gradient-to-r from-jellyPink to-jellyBlue"
        } text-white text-sm sm:text-base px-5 py-2 sm:py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all`}
      >
        {added ? "Added to Cart!" : "Add to Cart"}
      </motion.button>
    </motion.div>
  );
}
