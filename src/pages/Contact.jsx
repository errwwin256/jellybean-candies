import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      className="relative px-5 pt-10 pb-0 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/candy-bg.jpg')", // 🖼️ change path as needed
      }}
    >
      {/* 🌈 Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      {/* 📬 Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-jelly text-jellyPurple mb-4 drop-shadow-md">
          Get in Touch
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          We’d love to hear from you! Whether you’re craving a new flavor or
          want to partner with us — drop us a sweet message below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
