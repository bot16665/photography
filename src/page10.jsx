import React from "react";
import question from './assets/questionmark.png';
import curve from './assets/curveline.png';
import acla from './assets/aclamation.png';
import underline from "./assets/underline.png";
import myBackgroundImage from './assets/bg.png';

function Page10() {
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

            <div className="text-center mb-16 relative">
                <h2 className="text-2xl md:text-4xl  font-semibold leading-snug ">
                    <span className="obsolute text-gray-400 mr-90 text-xl md:text-5xl">Answering</span>
                    <span className="relative block text-5xl mr-70 md:text-6xl italic">Frequent</span>
                    <span className="relative block text-5xl md:text-7xl italic">
                        Questions
                        <img
                            src={underline}
                            alt="underline"
                            className="absolute left-30 bottom-[-10px] w-90 max-w-[280px] md:max-w-[360px]"
                        />
                    </span>
                </h2>

                {/* Positioned PNGs */}
                <img
                    src={question}
                    alt="question mark"
                    className="absolute right-5 top-[-90px] w-10 md:w-20"
                />

                <img
                    src={curve}
                    alt="curve line"
                    className=" absolute left-[-110px] top-[-80px] w-12 md:w-50 animate-pulse"
                />
                <img
                    src={acla}
                    alt="aclamation mark"
                    className="absolute right-150   w-12 md:w-30"
                />

            </div>

            {/* Buttons Section */}
            <div className="mt-20">
                {/* Button 1 */}
                <button
                    className="relative flex items-center justify-center h-20 w-full px-100 
               text-white font-light rounded-xl text-left
               before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white
               before:translate-x-1 before:translate-y-1"
                >
                    <span className="absolute left-3 w-3 h-3 rounded-full bg-orange-500"></span>
                    <span className="absolute left-10">How is Visualview Media different?</span>
                    <span className="absolute right-3 text-white text-2xl">+</span>
                </button>

                {/* Button 2 */}
                <button
                    className="relative flex items-center justify-center h-20 w-full px-100 
               text-white font-light rounded-xl text-left
               before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white
               before:translate-x-1 before:translate-y-1"
                >
                    <span className="absolute left-3 w-3 h-3 rounded-full bg-orange-500"></span>
                    <span className="absolute left-10">What services do you provide?</span>
                    <span className="absolute right-3 text-white text-2xl">+</span>
                </button>

                {/* Button 3 */}
                <button
                    className="relative flex items-center justify-center h-20 w-full px-100 
               text-white font-light rounded-xl text-left
               before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white
               before:translate-x-1 before:translate-y-1"
                >
                    <span className="absolute left-3 w-3 h-3 rounded-full bg-orange-500"></span>
                    <span className="absolute left-10">Can you handle big projects?</span>
                    <span className="absolute right-3 text-white text-2xl">+</span>
                </button>

                {/* Button 4 */}
                <button
                    className="relative flex items-center justify-center h-20 w-full px-100 
               text-white font-light rounded-xl text-left
               before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white
               before:translate-x-1 before:translate-y-1"
                >
                    <span className="absolute left-3 w-3 h-3 rounded-full bg-orange-500"></span>
                    <span className="absolute left-10">Do you work internationally?</span>
                    <span className="absolute right-3 text-white text-2xl">+</span>
                </button>
            </div>




        </div>
    );
}

export default Page10;
