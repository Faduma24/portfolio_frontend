import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-6xl font-bold">Hi, I'm a Software Developer</h2>
      <p className="mt-4 text-xl max-w-2xl">
        Passionate about creating modern web applications and solving real-world
        problems using the latest technologies.
      </p>
      <button className="mt-8 px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition">
        View My Work
      </button>
    </section>
  );
};

export default Hero;
