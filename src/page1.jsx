import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "./assets/logo.png";     // your logo
import dollar from "./assets/dollar.png"; // your $ icon
import bg from "./assets/bg.png";         // your background
import gifO from "./assets/your-gif.gif"; // your GIF for "o"


function Hero() {
  const [count, setCount] = useState(150200);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let current = 150200173;
      const target = current + Math.floor(Math.random() * 30 + 15); // add 15–45
      const interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) clearInterval(interval);
      }, 30);
    }
  }, [inView]);

  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Logo */}
      <div className="mb-10">
        <img src={logo} alt="Logo" className="w-20 h-20" />
      </div>

      {/* Headline */}
      <h1 className="text-4x1 sm:text-2xl md:text-8xl font-extrabold text-center leading-snug font-['Poppins']">
        Crafting C
        <span className="relative inline-block w-12 h-12 align-middle mx-1">
          {/* "O" Shape with GIF masked inside */}
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <img src={gifO} alt="gif o" className="w-full h-full object-cover" />
          </span>
          <span className="invisible">o</span>
        </span>
        ntent that <br />
        {/* Animate whole phrase */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center flex-wrap gap-2"
        >
          actually{" "}
          {/* Highlight only makes money */}
          <span className="bg-white text-black px-4 py-1 rounded-3xl inline-flex items-center">
            makes money
            <img
              src={dollar}
              alt="dollar"
              className="w-20 h-20 ml-2 inline-block"
            />
          </span>
        </motion.span>
      </h1>

      {/* Subtext */}
      <motion.p
        className="text-gray-300 mt-6 text-center max-w-2xl font-bold font-['Poppins']"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        We grow personal brands by 2–5x and build inbound and outbound lead
        gen systems for founders and online service providers in 90–120 days,
        guaranteed
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        {/* First button */}
        <button className="relative px-10 py-3 text-white rounded-md font-semibold
              before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white
              before:translate-x-1 before:translate-y-1">
          Get Started
        </button>

        {/* Second button */}
        <button className="relative px-20 py-3 text-white rounded-md font-semibold flex items-center gap-3
              before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white
              before:translate-x-1 before:translate-y-1">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          How We do it →
        </button>
      </motion.div>

      {/* Second page */}
      <div
        ref={ref}
        className="mt-40 text-center bg-black bg-opacity-50 p-8 rounded-2xl h-[400px] w-[1280px]"
      >
        <h2 className="text-6xl font-extrabold mb-4 poppins">Our Impact</h2>

        {/* Animated Number */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-orange-400 text-9xl font-bold mx-auto"
        >
          {count.toLocaleString()}
        </motion.p>

        <p className="text-white text-3xl mt-10 poppins">Organic Views</p>
        <p className="text-white text-3xl mt-10 font-extrabold poppins">
          and counting...
        </p>
      </div>
      <partners/>
    </div>
  );
}

export default Hero;
