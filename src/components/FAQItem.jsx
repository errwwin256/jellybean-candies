import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => setOpen(!open)}
      className={`p-5 sm:p-6 rounded-2xl cursor-pointer select-none border transition-all duration-300 
        ${
          open
            ? "bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-50 border-amber-300 shadow-[0_0_25px_rgba(255,200,0,0.3)]"
            : "bg-white/70 border-amber-100 hover:bg-yellow-50/70"
        }`}
    >
      {/* 🔸 Header Row */}
      <div className="flex justify-between items-center">
        <h3
          className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${
            open ? "text-amber-700" : "text-yellow-700"
          }`}
        >
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-amber-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* 🔹 Expand Answer */}
      <AnimatePresence>
        {open && (
          <motion.p
            key="answer"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-sm sm:text-base text-yellow-900 leading-relaxed"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
