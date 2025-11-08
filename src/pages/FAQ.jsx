import { motion } from "framer-motion";
import FAQItem from "../components/FAQItem";

const faqList = [
  {
    question: "Are your jelly beans gluten-free?",
    answer:
      "Yes! All our jelly beans are gluten-free and made with care for everyone to enjoy.",
  },
  {
    question: "Do you offer custom flavors?",
    answer:
      "Absolutely! Contact us for special event or seasonal flavor requests.",
  },
  {
    question: "Where are your candies made?",
    answer:
      "All our sweets are made with love in our candy workshop in Pampanga, Philippines.",
  },
  {
    question: "Do you deliver nationwide?",
    answer: "Yes! We ship across the Philippines — fresh and fast!",
  },
];

export default function FAQ() {
  return (
    <section
      className="relative flex flex-col items-center min-h-screen px-6 sm:px-10 py-20 
      bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-100 overflow-hidden"
    >
      {/* 🍬 Floating Glow Bubbles */}
      <div className="absolute -top-12 left-0 w-48 h-48 bg-amber-200/40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-300/30 blur-3xl rounded-full animate-pulse"></div>

      {/* 🟡 Title */}
      <motion.div
        className="mb-20 sm:mb-24 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-400 
          drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-yellow-800/90 font-medium max-w-lg mx-auto">
          Got questions about your favorite jelly treats? Here are the answers!
        </p>
      </motion.div>

      {/* 💬 FAQ List Container */}
      <motion.div
        className="w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-amber-100/60 
        shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-[2rem] p-6 sm:p-10 space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {faqList.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <FAQItem {...faq} />
          </motion.div>
        ))}
      </motion.div>

      {/* 🌈 Decorative Shapes */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-yellow-200 to-amber-100 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-gradient-to-tr from-amber-100 to-yellow-50 rounded-full blur-3xl opacity-70"></div>
    </section>
  );
}
