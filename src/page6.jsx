import React from "react";
import bg from "./assets/bg.png"; 
import underlinePng from "./assets/underline.png";
import trophyPng from "./assets/trophy.png"; // replace with your icon
import notePng from "./assets/note.png"; // replace with your icon
import strokePng from "./assets/stroke.png"; // replace with your icon

export default function Page6() {
  const caseStudies = [
    { name: "KENNY JO", result: "Multiple Sponsorships" },
    { name: "THE TESTING ACADEMY", result: "Multiple Viral videos" },
   
  ];

  return (
    <div
      className="relative py-20 px-6 md:px-12 font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0b0b0b",
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Orange decorations */}
        <img
          src={strokePng}
          alt="stroke"
          className="absolute left-40 top-1/3 w-16 md:w-30"
        />
        <img
          src={trophyPng}
          alt="trophy"
          className="absolute right-36  w-16 md:w-30"
        />
        <img
          src={notePng}
          alt="note"
          className="absolute right-32 top-1/3 w-14 md:w-30"
        />

        {/* Heading */}
        <h2 className="text-white font-extrabold leading-tight mb-16">
          <span className="block text-gray-400 mr-90 text-xl md:text-5xl">Read</span>
          <span className="relative block text-5xl mr-70 md:text-6xl italic">
            Detailed 
          </span>  
            <span className="relative block text-5xl md:text-6xl italic">
            Case Studies
            <img
              src={underlinePng}
              alt="underline"
              className="absolute right-95 bottom-[-20px] w-95  max-w-sm md:max-w-lg"
            />
          </span>  
          
        </h2>

        {/* Case Studies List */}
        <div className="space-y-4 text-left mt-50 ">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-700 pb-4"
            >
              <span className="text-white uppercase">{item.name}</span>
              <span className="text-white">{item.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
