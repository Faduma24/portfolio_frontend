import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-purple-900 py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
        <p className="mt-4 text-lg text-gray-300">
          I'm currently open to freelance and full-time opportunities. Let's
          talk!
        </p>
        <a
          href="mailto:email@example.com"
          className="mt-6 inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
