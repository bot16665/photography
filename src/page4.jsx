import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// import your PNGs
import heartPng from "./assets/heart.png";
import underlinePng from "./assets/underline.png";
import messagePng from "./assets/message.png";

const steps = [
  { number: 1, title: "Onboarding", text: "We start by getting on an onboarding call to learn about you, your business, niche, target audience, goals and more." },
  { number: 2, title: "Strategy", text: "We map a content strategy, choose channels, create calendar and define KPIs for growth." },
  { number: 3, title: "Creative", text: "Design and produce high-performing creative tailored to each format and audience." },
  { number: 4, title: "Execution", text: "We publish, boost and distribute content so it reaches the right people at the right time." },
  { number: 5, title: "Optimization", text: "We A/B test, scale winning ideas and cut what doesn’t work." },
  { number: 6, title: "Scale", text: "Once signals are strong we scale paid + organic activities for sustained growth." },
];

function Step({ step, idx, total, nextRef }) {
  const ref = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // measure distance from current dot to next dot
  useLayoutEffect(() => {
    if (ref.current && nextRef?.current) {
      const currDot = ref.current.querySelector(".dot");
      const nextDot = nextRef.current.querySelector(".dot");

      if (currDot && nextDot) {
        const currY = currDot.getBoundingClientRect().top;
        const nextY = nextDot.getBoundingClientRect().top;
        setLineHeight(nextY - currY);
      }
    }
  }, [nextRef]);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6 py-20"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Dot + Animated Line */}
      <div className="flex flex-col items-center z-10 mt-6">
        {/* Dot */}
        <div className="dot w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg" />

        {/* Line (only if not last step) */}
        {idx < total - 1 && (
          <motion.div
            className="w-[2px] bg-orange-400 origin-top"
            style={{
              scaleY: lineScale,
              height: lineHeight, // dynamic height
            }}
          />
        )}
      </div>

      {/* Number + content box */}
      <div className="relative flex-1 ml-10">
        {/* Outline number */}
        <div className="absolute -left-14 -top-10 text-8xl font-extrabold text-transparent">
          <span className="text-white/0 [text-shadow:0_0_0_#fff]">
            {step.number}
          </span>
        </div>

        {/* Content box */}
        <div className="bg-[#111111] rounded-2xl p-10 shadow-inner border border-[#1a1a1a] flex flex-col justify-center">
          <h3 className="text-orange-400 font-bold text-2xl">{step.title}</h3>
          <div className="mt-3 mb-4 h-[1px] bg-gray-700" />
          <p className="text-gray-300 text-base leading-relaxed">{step.text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  const stepRefs = useRef([]);

  return (
    <div className="bg-[#0b0b0b] py-16 px-6 md:px-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div className="p-8 shadow-inner text-center relative mb-2 md:sticky md:top-20 self-start h-fit">
          <div className="flex justify-center">
            <img src={heartPng} alt="heart" className="w-6 h-6 mb-2" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <span className="text-left mr-90">Our</span>
            <span className="block mr-60">Creative</span>
            <span className="relative inline-block ">
              Journey
              <img
                src={underlinePng}
                alt="underline"
                className="absolute left-0 bottom-[-8px] w-full"
              />
            </span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base">
            The process we follow to help you GROW and SELL on social media
            that takes just 4hrs/month of your time
          </p>
          <div className="mt-6 flex justify-center">
            <button className="relative px-6 py-2 font-semibold text-white rounded-md">
              Get Started
              <span className="absolute inset-0 border border-white rounded-md translate-x-1 translate-y-1"></span>
              <span className="absolute inset-0 border border-white rounded-md"></span>
            </button>
          </div>
          <div className="ml-100 3xl:ml-120 absolute right-4">
            <img src={messagePng} alt="message" className="w-8 h-8" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-start">
          {steps.map((step, idx) => (
            <Step
              key={idx}
              step={step}
              idx={idx}
              total={steps.length}
              nextRef={stepRefs.current[idx + 1]}
              ref={(el) => (stepRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
