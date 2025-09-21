// src/page8.jsx
import React from 'react';

// Import your custom PNG assets
import checkmarkOrange from './assets/checkmark.png';
import lightningIcon from './assets/lightning_icon.png';
import personIcon from './assets/person_icon.png';
import squiggleIcon from './assets/squiggle_icon.png'; // ✅ NEW IMPORT
import underline from "./assets/underline.png";

// --- ADD YOUR BACKGROUND IMAGE IMPORT HERE ---
import myBackgroundImage from './assets/bg.png';

function Page8() {
  // A single, reusable ListItem component for all cards
  // Adds a bottom border as the "line" between items
  const ListItem = ({ children, textColor = 'text-gray-200' }) => (
    <li className={`flex items-center text-left ${textColor} relative pb-4`}>
      <img src={checkmarkOrange} alt="Checkmark" className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="flex-1">{children}</span>
      {/* Line under each item */}
      <span className="absolute bottom-0 left-8 right-0 h-px bg-gray-500"></span>
    </li>
  );

  const cardBaseStyles =
    "flex-1 border-2 border-transparent p-8 rounded-xl shadow-xl flex flex-col justify-between min-w-[280px] max-w-[350px] mx-auto lg:mx-0 transition-all duration-300";
  const buttonBaseStyles =
    "mt-auto px-6 py-3 rounded-full flex items-center justify-center transition-colors duration-300 font-semibold text-lg";

  return (
    <div
      className="relative min-h-screen text-white flex flex-col items-center justify-center py-20 px-4 font-[Poppins] overflow-hidden"

    style={{
        backgroundImage: `url(${myBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Decorative elements */}
      <img
        src={personIcon}
        alt="Person icon"
        className="absolute top-1/6 left-60 w-25  max-w-sm md:max-w-lg"
      />
      <img
        src={lightningIcon}
        alt="Lightning bolt"
        className="absolute right-80 top-30 w-16 md:w-20"
      />
        {/* Squiggle above Pick */}
        <img
          src={squiggleIcon}
          alt="Squiggle"
          className="absolute left-100 top-15 w-16 md:w-20"
        />

        {/* Line 1: Pick */}
       <div className="text-center mb-16 relative">
         <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
           <span className="block text-gray-400 mr-90 text-xl md:text-5xl">Pick</span>
           <span className="relative block text-5xl mr-85 md:text-6xl italic">Your</span>
           <span className="relative block text-5xl ml-10 md:text-6xl italic">
              Pricing Plans
             <img
               src={underline}
               alt="underline"
               className="absolute right-10 bottom-[-25px] w-100  max-w-sm md:max-w-lg"
             />
           </span>
         </h2>
       </div>
   

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center mt-30 items-center lg:items-stretch gap-8 w-full max-w-7xl z-10">
        {/* Growth Pack */}
        <div className={`${cardBaseStyles} `}>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-orange-500">Growth Pack</h3>
            <p className="text-gray-400 text-sm mb-4">Plan Includes:</p>
            <ul className="space-y-4 mb-8">
              <ListItem>Competitor Research</ListItem>
              <ListItem>Ideation</ListItem>
              <ListItem>Scripting</ListItem>
              <ListItem>Editing</ListItem>
              <ListItem>Distribution</ListItem>
              <ListItem>100% Client Satisfaction Guaranteed</ListItem>
            </ul>
          </div>
          <button
            className={`${buttonBaseStyles} border-2 border-white text-white hover:bg-orange-500 hover:border-orange-500`}
          >
            Start Now
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>

        {/* Inbound Funnel - Most Popular */}
        <div className="flex-1 bg-gray-200 p-8  shadow-2xl relative min-w-[300px] max-w-[380px] mx-auto lg:mx-0 flex flex-col justify-between lg:scale-110">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500  text-sm font-semibold px-4 py-1.5 rounded-full shadow-md z-20">
            Most Popular
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-orange-500">InBound Funnel</h3>
            <p className="text-gray-600 text-sm mb-4">Plan Includes:</p>
            <ul className="space-y-4 mb-8">
              <ListItem textColor="text-gray-800">Competitor Research</ListItem>
              <ListItem textColor="text-gray-800">Ideation</ListItem>
              <ListItem textColor="text-gray-800">Scripting</ListItem>
              <ListItem textColor="text-gray-800">Editing</ListItem>
              <ListItem textColor="text-gray-800">Distribution</ListItem>
              <ListItem textColor="text-gray-800">100% Client Satisfaction Guaranteed</ListItem>
              <ListItem textColor="text-gray-800">Inbound Lead Generation System setup</ListItem>
            </ul>
          </div>
          <button
            className={`${buttonBaseStyles} bg-orange-500 text-white hover:bg-orange-600 shadow-lg`}
          >
            Start Now
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>

        {/* End to End Marketing */}
        <div className={`${cardBaseStyles} hover:border-orange-500`}>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-500">End to End Marketing</h3>
            <p className="text-gray-400 text-sm mb-4">Plan Includes:</p>
            <ul className="space-y-4 mb-8">
              <ListItem>Competitor Research</ListItem>
              <ListItem>Ideation</ListItem>
              <ListItem>Scripting</ListItem>
              <ListItem>Editing</ListItem>
              <ListItem>Distribution</ListItem>
              <ListItem>100% Client Satisfaction Guaranteed</ListItem>
              <ListItem>Email Marketing setup</ListItem>
              <ListItem>Funnel Building</ListItem>
            </ul>
          </div>
          <button
            className={`${buttonBaseStyles} border-2 border-white text-white hover:bg-orange-500 hover:border-orange-500`}
          >
            Start Now
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page8;
