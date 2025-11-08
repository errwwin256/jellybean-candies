import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    issueType: "",
    productName: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    message: "",
    contactBack: "Yes",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 1000) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({
      issueType: "",
      productName: "",
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      message: "",
      contactBack: "Yes",
    });
  };

  return (
    <section
      className="relative px-4 py-12 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')", // 🖼️ Change path to your actual image
      }}
    >
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      {/* 📬 Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/95 backdrop-blur-lg rounded-[2rem] border border-white/60 shadow-[0_8px_30px_rgba(255,182,193,0.25)] p-8 sm:p-10 space-y-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,192,203,0.5)]"
      >
        {/* 🪩 Header */}
        <h2 className="text-3xl sm:text-4xl font-jelly text-center bg-gradient-to-r from-jellyPink via-jellyYellow to-jellyBlue bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-textShimmer">
          Send Us a Message
        </h2>

        {/* 🧁 Issue Type + Product Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-semibold text-jellyPink mb-2">
              Issue Type
            </label>
            <select
              name="issueType"
              value={form.issueType}
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyPink/50 transition-all group-hover:ring-jellyPink/30 text-sm"
              required
            >
              <option value="Complaint">Complaint</option>
              <option value="Compliment">Compliment</option>
              <option value="Question">Question</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className="group">
            <label className="block text-sm font-semibold text-jellyBlue mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter the product name"
              value={form.productName}
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyBlue/50 transition-all group-hover:ring-jellyBlue/30 text-sm"
              required
            />
          </div>
        </div>

        {/* 👤 Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-semibold text-jellyGreen mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyGreen/50 transition-all group-hover:ring-jellyGreen/30"
              required
            />
          </div>
          <div className="group">
            <label className="block text-sm font-semibold text-jellyGreen mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyGreen/50 transition-all group-hover:ring-jellyGreen/30"
              required
            />
          </div>
        </div>

        {/* 🏠 Address */}
        <div className="group">
          <label className="block text-sm font-semibold text-jellyYellow mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Your complete address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyYellow/50 transition-all group-hover:ring-jellyYellow/30"
            required
          />
        </div>

        {/* ✉️ Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-semibold text-jellyBlue mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyBlue/50 transition-all group-hover:ring-jellyBlue/30"
              required
            />
          </div>
          <div className="group">
            <label className="block text-sm font-semibold text-jellyPink mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g., 0912-345-6789"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyPink/50 transition-all group-hover:ring-jellyPink/30"
              required
            />
          </div>
        </div>

        {/* 💬 Message */}
        <div className="group">
          <label className="block text-sm font-semibold text-jellyGreen mb-2">
            Message (max 1000 characters)
          </label>
          <textarea
            name="message"
            placeholder="Type your message..."
            value={form.message}
            onChange={handleChange}
            rows="5"
            maxLength={1000}
            className="w-full border border-gray-200 p-3 rounded-2xl bg-white/80 shadow-inner focus:outline-none focus:ring-4 focus:ring-jellyGreen/50 transition-all resize-none group-hover:ring-jellyGreen/30"
            required
          ></textarea>
          <p className="text-right text-xs text-gray-500 mt-1">
            {form.message.length}/1000
          </p>
        </div>

        {/* 📞 Contact Me Option */}
        <div>
          <label className="block text-sm font-semibold text-jellyPurple mb-2">
            Would you like us to contact you?
          </label>
          <div className="flex gap-8 text-sm font-medium text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer hover:text-jellyPurple transition-colors">
              <input
                type="radio"
                name="contactBack"
                value="Yes"
                checked={form.contactBack === "Yes"}
                onChange={handleChange}
                className="accent-jellyPurple"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-jellyPurple transition-colors">
              <input
                type="radio"
                name="contactBack"
                value="No"
                checked={form.contactBack === "No"}
                onChange={handleChange}
                className="accent-jellyPurple"
              />
              No
            </label>
          </div>
        </div>

        {/* 🎀 Submit */}
        <button
          type="submit"
          className="relative w-full overflow-hidden bg-gradient-to-r from-jellyPink via-jellyYellow to-jellyBlue text-white font-bold py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(255,192,203,0.4)]"
        >
          <span className="relative z-10">Send Message</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-buttonShine"></span>
        </button>
      </form>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm mx-auto"
            >
              <h3 className="text-2xl font-jelly text-jellyPurple mb-3">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We’ll get back to you soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
