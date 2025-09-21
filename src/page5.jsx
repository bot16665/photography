import React from "react";
import { motion } from "framer-motion";

// Import your orange PNGs and background
import clapPng from "./assets/clap.png";
import raysPng from "./assets/rays.png";
import megaphonePng from "./assets/megaphone.png";
import underlinePng from "./assets/underline.png";
import bg from "./assets/bg.png"; // your background

// Import person images (replace with your actual files)
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";
import person5 from "./assets/person5.jpeg";
import person6 from "./assets/person6.jpg";
import person7 from "./assets/person7.jpg";
import person8 from "./assets/person8.jpg";
import person9 from "./assets/person9.jpeg";
import person10 from "./assets/person10.jpg";

// Example testimonial data
const testimonials = [
  {
    id: 1,
    name: "Lazy Assassin",
    text: "Visualview Media is helping me run 5+ YouTube channels successfully for 3+ years.",
    img: person1,
    bg: "bg-blue-200",
  },
  {
    id: 2,
    name: "Emeka",
    text: "They helped me achieve a consistent 50% MOM growth for my personal brand.",
    img: person2,
    bg: "bg-green-200",
  },
  {
    id: 3,
    name: "Sophia",
    text: "The team transformed my content strategy completely. They’re a dream team!",
    img: person3,
    bg: "bg-yellow-200",
  },
  {
    id: 4,
    name: "James",
    text: "I never thought growing online presence could be so easy until I worked with them.",
    img: person4,
    bg: "bg-pink-200",
  },
  {
    id: 5,
    name: "Olivia",
    text: "Their creative approach helped me increase engagement by 70% in two months.",
    img: person5,
    bg: "bg-purple-200",
  },
  {
    id: 6,
    name: "Daniel",
    text: "Professional, consistent, and extremely helpful. Highly recommend them.",
    img: person6,
    bg: "bg-red-200",
  },
  {
    id: 7,
    name: "Mia",
    text: "From ideation to execution, they handle everything with perfection.",
    img: person7,
    bg: "bg-teal-200",
  },
  {
    id: 8,
    name: "Chris",
    text: "They’ve been a complete game-changer for my business strategy.",
    img: person8,
    bg: "bg-orange-200",
  },
  {
    id: 9,
    name: "Ava",
    text: "Love their consistency and the quality of work delivered every single week.",
    img: person9,
    bg: "bg-indigo-200",
  },
  {
    id: 10,
    name: "Noah",
    text: "If you’re serious about content, this is the team you want on your side.",
    img: person10,
    bg: "bg-lime-200",
  },
];

// Testimonial card
const TestimonialCard = ({ img, text, name, bg }) => (
  <div className="flex bg-[#111111] rounded-xl overflow-hidden shadow-lg min-w-[500px] h-[300px] mx-4">
    {/* Left: Person Image */}
    <div className="w-1/2 h-full">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover rounded-l-xl"
      />
    </div>
    {/* Right: Testimonial Text */}
    <div className={`w-1/2 p-4 ${bg}`}>
      <p className="text-sm italic mb-3">“{text}”</p>
      <h4 className="font-bold">- {name}</h4>
    </div>
  </div>
);


export default function ClientsSection() {
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
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Orange PNG decorations */}
        <img
          src={raysPng}
          alt="rays"
          className="absolute left-100  w-16 md:w-20"
        />
        <img
          src={clapPng}
          alt="clap"
          className="absolute mt-20 left-50 w-16 md:w-20"
        />
        <img
          src={megaphonePng}
          alt="megaphone"
          className="absolute right-10  w-20 md:w-30"
        />

        {/* Heading */}
        <h2 className="text-white  font-extrabold leading-tight mb-30">
          <span className="block text-gray-400 text-xl md:text-2xl">Hear it</span>
          <span className="right-20  text-5xl md:text-6xl italic">From</span>
          <span className="relative block text-5xl md:text-6xl italic">
            Our Clients
            <img
              src={underlinePng}
              alt="underline"
              className="absolute right-100 bottom-[-12px] w-full max-w-xs md:max-w-md mx-auto"
            />
          </span>
        </h2>

        {/* Row 1 - scroll right */}
        <motion.div
          className="flex mb-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard key={`row1-${index}`} {...t} />
          ))}
        </motion.div>

        {/* Row 2 - scroll left */}
        <motion.div
          className="flex"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard key={`row2-${index}`} {...t} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
