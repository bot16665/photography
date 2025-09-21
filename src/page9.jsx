import React from "react";
import whiteArrow from './assets/white arrow.png';
import oIcon from './assets/o.png';
import wingIcon from './assets/wing.png';
import underline from "./assets/underline.png";
import myBackgroundImage from './assets/bg.png';

function Page9() {
    return (
        <div
            className="relative min-h-screen text-white flex flex-col items-center justify-center py-20 px-4 font-[Poppins] overflow-hidden"
            style={{
                backgroundImage: `url(${myBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay box with semi-transparent background */}
            <div className="relative text-center mb-16 bg-[#111111]/50 w-[70%] min-h-[600px] p-10 rounded-2xl shadow-lg 
                flex flex-col items-center justify-center space-y-8">
                <h2 className="text-2xl md:text-4xl  font-semibold leading-snug ">
                    <span className="obsolute text-gray-400 mr-90 text-xl md:text-5xl">Take</span>
                    <span className="relative block text-5xl mr-70 md:text-6xl italic">Action</span>
                    <span className="relative block text-5xl md:text-7xl italic">
                        Today
                        <img
                            src={underline}
                            alt="underline"
                            className="absolute left-30 bottom-[-10px] w-55 max-w-[280px] md:max-w-[360px]"
                        />
                    </span>
                </h2>

                {/* Positioned PNGs */}
                <img
                    src={whiteArrow}
                    alt="white arrow"
                    className="absolute right-16 top-49 w-10 md:w-50"
                />
                <img
                    src={oIcon}
                    alt="o"
                    className=" absolute left-60 top-80 w-12 md:w-30 animate-pulse"
                />
                <img
                    src={wingIcon}
                    alt="wing"
                    className="absolute left-20 bottom-10 w-12 md:w-30"
                />

                {/* Button */}
                <div className="mt-10 flex justify-center">
                    <button className="bg-yellow-200 text-black font-medium  text-lg py-5 px-12 rounded-none 
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                     hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                     transition-all duration-300">
                        Book a Discovery Call
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Page9;
