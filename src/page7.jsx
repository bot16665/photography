import React from "react";

// --- Import your gifs/icons here ---
import viralGrowth from "./assets/viralGrowth.gif";
import personalised from "./assets/personalised.gif";
import time from "./assets/time.gif";
import leads from "./assets/leads.gif";
import growth from "./assets/growth.gif";
import results from "./assets/results.gif";

// extra orange pngs
import wave from "./assets/wave.png";
import underline from "./assets/underline.png";
import stars from "./assets/stars.png";

// background
import bg from "./assets/bg2.png";

export default function Page7() {
  return (
    <div
      className="relative bg-black text-white font-[Poppins] py-20 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background orange PNGs */}
      <img
        src={wave}
        alt="wave"
        className="absolute left-180 top-20 w-50 md:w-40 animate-pulse"
      />
      <img
        src={stars}
        alt="stars"
        className="absolute left-80 top-50 w-16 md:w-20"
      />

      {/* Heading Section */}
     <div className="text-center mb-16 relative">
  <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
    <span className="block text-gray-400 mr-90 text-xl md:text-5xl">Our</span>
    <span className="relative block text-5xl mr-50 md:text-6xl italic">Exclusive</span>
    <span className="relative block text-5xl md:text-6xl italic">
      Benefits
      <img
        src={underline}
        alt="underline"
        className="absolute right-120 bottom-[-20px] w-70  max-w-sm md:max-w-lg"
      />
    </span>
  </h2>
</div>


      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        <div>
          <img src={viralGrowth} alt="Viral Growth" className="mx-auto w-50 h-45" />
          <p className="mt-4">Viral Growth</p>
        </div>
        <div>
          <img src={personalised} alt="Personalised Strategies" className="mx-auto w-50 h-45" />
          <p className="mt-4">Personalised Strategies</p>
        </div>
        <div>
          <img src={time} alt="Just 1 hour/week" className="mx-auto w-50 h-45" />
          <p className="mt-4">Just 1 hour/week of your time</p>
        </div>
        <div>
          <img src={leads} alt="Lead Generation" className="mx-auto w-50 h-45" />
          <p className="mt-4">Lead Generation Machine</p>
        </div>
        <div>
          <img src={growth} alt="Growth across platform" className="mx-auto w-50 h-45" />
          <p className="mt-4">Growth across platform</p>
        </div>
        <div>
          <img src={results} alt="Guaranteed Results" className="mx-auto w-50 h-45" />
          <p className="mt-4">Guaranteed Results</p>
        </div>
      </div>
    </div>
  );
}
