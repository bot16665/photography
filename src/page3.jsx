import React from "react";
import { motion } from "framer-motion";

// Import your videos/thumbnails and orange icons
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import video5 from "./assets/video5.mp4";
import crown from "./assets/crown.png";
import hand from "./assets/hand.png";
import underline from "./assets/underline.png";

const Page3 = () => {
  return (
    <section className="w-full min-h-[160vh] bg-black flex flex-col items-center justify-start relative overflow-hidden ">
      {/* Video Grid */}
      <div className="relative w-full max-w-9xl h-[140vh] flex items-center justify-center mt-30">
        {/* --- Title Block Positioned Above Center Video --- */}

<div className="absolute top-[15%] flex flex-col items-center text-center">
  {/* Top Row */}
  <div className="flex items-center gap-6 text-gray-400 text-lg md:text-xl">
    <span className="text-xl md:text-5xl font-semibold text-gray-400 ">videos</span>
    <img src={hand} alt="hand" className="w-8 h-8" />
    <img src={crown} alt="crown" className="w-8 h-8" />
  </div>

  {/* Heading */}
  <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-snug  mr-40">
    That Grab <br />
    <span className="relative inline-block ml-60">
      Attention
      {/* Underline image */}
      <img
        src={underline}
        alt="underline"
        className="absolute left-0 bottom-[-10px] w-full max-w-[280px] md:max-w-[360px]"
      />
    </span>
  </h1>
</div>


        {/* Top Left */}
        <motion.div
          initial={{ rotate: -10, y: -20 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-[5%] left-[10%] w-64 h-96 border border-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-full border-8 border-black rounded-3xl overflow-hidden">
            <video src={video1} autoPlay loop muted className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Top Right */}
        <motion.div
          initial={{ rotate: 10, y: -20 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-[5%] right-[10%] w-64 h-96 border border-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-full border-8 border-black rounded-3xl overflow-hidden">
            <video src={video2} autoPlay loop muted className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Center */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-[40%] w-[28rem] h-[18rem] border border-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-full border-8 border-black rounded-3xl overflow-hidden">
            <video src={video5} autoPlay loop muted className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          initial={{ rotate: -5, y: 40 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-[5%] left-[12%] w-64 h-96 border border-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-full border-8 border-black rounded-3xl overflow-hidden">
            <video src={video3} autoPlay loop muted className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ rotate: 5, y: 40 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-[5%] right-[12%] w-64 h-96 border border-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-full border-8 border-black rounded-3xl overflow-hidden">
            <video src={video4} autoPlay loop muted className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
     
    </section>

  );
};

export default Page3;
