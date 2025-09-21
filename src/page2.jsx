import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import bg from "./assets/bg.png"; // your background

// --- Replace with your own assets ---
import img1 from "./assets/person1.jpg";
import img2 from "./assets/person2.jpg";
import img3 from "./assets/person3.jpg";
import img4 from "./assets/person4.jpg";
import img5 from "./assets/person5.jpeg";
import img6 from "./assets/person6.jpg";
import img7 from "./assets/person7.jpg";
import img8 from "./assets/person8.jpg";

import arrow from "./assets/arrow.png";
import squiggle from "./assets/squiggle.png";
import underline from "./assets/underline.png";

const partners = [
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img1 },
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img2 },
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img3 },
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img4 },
  { name: "The Testing Academy", followers: "160,545 Followers", image: img5 },
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img6 },
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img7 },
  { name: "Lazy Assassin", followers: "900,546 Followers", image: img8 },
];

export default function PartnersScrollAnim() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [offsets, setOffsets] = useState(() =>
    partners.map(() => ({ dx: 0, dy: 0 }))
  );
  const [measured, setMeasured] = useState(false);

  // Scroll progress based on the pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Measure card offsets from center
  useLayoutEffect(() => {
    function compute() {
      const cont = containerRef.current;
      if (!cont) return;
      const contRect = cont.getBoundingClientRect();
      const cx = contRect.left + contRect.width / 2;
      const cy = contRect.top + contRect.height / 2;

      const newOffsets = partners.map((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return { dx: 0, dy: 0 };
        const r = el.getBoundingClientRect();
        const cardCenterX = r.left + r.width / 2;
        const cardCenterY = r.top + r.height / 2;
        return {
          dx: cardCenterX - cx,
          dy: cardCenterY - cy,
        };
      });

      setOffsets(newOffsets);
      setMeasured(true);
    }

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Heading animation
  const headingOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.6, 1], [30, 0]);
  const headingOpacitySpring = useSpring(headingOpacity, {
    stiffness: 60,
    damping: 20,
  });
  const headingYSpring = useSpring(headingY, { stiffness: 70, damping: 24 });

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center relative">
            {/* Row 1 */}
            {partners.slice(0, 4).map((p, i) => (
              <AnimatedGridCard
                key={i}
                index={i}
                partner={p}
                offset={offsets[i]}
                scrollYProgress={scrollYProgress}
                measured={measured}
                ref={(el) => (cardRefs.current[i] = el)}
              />
            ))}

            {/* Row 2 */}
            <AnimatedGridCard
              index={4}
              partner={partners[4]}
              offset={offsets[4]}
              scrollYProgress={scrollYProgress}
              measured={measured}
              ref={(el) => (cardRefs.current[4] = el)}
            />

            {/* Heading in center */}
            <motion.div
              className="col-span-2 flex justify-center z-20"
              style={{ opacity: headingOpacitySpring, y: headingYSpring }}
            >
              <Heading arrow={arrow} squiggle={squiggle} underline={underline} />
            </motion.div>

            <AnimatedGridCard
              index={5}
              partner={partners[5]}
              offset={offsets[5]}
              scrollYProgress={scrollYProgress}
              measured={measured}
              ref={(el) => (cardRefs.current[5] = el)}
            />

            {/* Row 3 */}
            <div className="col-span-1 md:col-start-2">
              <AnimatedGridCard
                index={6}
                partner={partners[6]}
                offset={offsets[6]}
                scrollYProgress={scrollYProgress}
                measured={measured}
                ref={(el) => (cardRefs.current[6] = el)}
              />
            </div>
            <div className="col-span-1 md:col-start-3">
              <AnimatedGridCard
                index={7}
                partner={partners[7]}
                offset={offsets[7]}
                scrollYProgress={scrollYProgress}
                measured={measured}
                ref={(el) => (cardRefs.current[7] = el)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AnimatedGridCard = React.forwardRef(
  ({ partner, index, offset = { dx: 0, dy: 0 }, scrollYProgress, measured }, ref) => {
    const tx = useTransform(scrollYProgress, [0, 1], [-offset.dx, 0]);
    const ty = useTransform(scrollYProgress, [0, 1], [-offset.dy, 0]);
    const scaleMV = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.9, 1]);
    const opacityMV = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.8, 1]);

    const sx = useSpring(tx, { stiffness: 50, damping: 20 });
    const sy = useSpring(ty, { stiffness: 50, damping: 20 });
    const sScale = useSpring(scaleMV, { stiffness: 70, damping: 24 });
    const sOpacity = useSpring(opacityMV, { stiffness: 60, damping: 20 });

    return (
      <motion.div
        ref={ref}
        style={{ x: sx, y: sy, scale: sScale, opacity: measured ? sOpacity : 0 }}
        className="bg-neutral-900 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
        <p className="text-sm text-gray-400">{partner.followers}</p>
      </motion.div>
    );
  }
);

function Heading({ arrow, squiggle, underline }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <span className="text-white text-2xl md:text-4xl font-bold translate-x-2">
        Meet
      </span>

      <div className="relative mt-3 flex items-center space-x-4">
        <img src={arrow} alt="arrow" className="w-8 md:w-12 -translate-y-1" />
        <span className="text-white text-4xl md:text-6xl font-extrabold relative">
          our
          <img
            src={squiggle}
            alt="squiggle"
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 md:w-28"
          />
        </span>
        <span className="text-white text-2xl md:text-4xl font-bold">Partners</span>
      </div>

      <img src={underline} alt="underline" className="mt-2 w-28 md:w-44" />
    </div>
    
  );
}
