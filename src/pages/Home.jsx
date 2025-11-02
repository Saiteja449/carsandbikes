import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import bgCar from "../../assets/homeBanner.jpg";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";

// Animation Controls
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1], // smooth
    },
  },
};

const Home = () => {
  return (
    <>
      <div
        className=" w-full pt-28 pb-32       /* Mobile vertical padding */
    sm:pt-32 sm:pb-32 /* Slightly more on tablets */
    md:pt-36 md:pb-28  md:h-screen bg-no-repeat bg-coverbg-center md:bg-right-bottom flex items-center"
        style={{ backgroundImage: `url(${bgCar})` }}
      >
        <motion.div
          className="
      container mx-auto 
      px-4 md:px-6
      text-white space-y-4 md:space-y-6
      flex flex-col justify-center
    "
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={child}
            className="
        text-3xl sm:text-4xl md:text-6xl 
        font-bold leading-tight
      "
          >
            Drive Confidently with
          </motion.h1>

          <motion.h1
            variants={child}
            className="
        text-3xl sm:text-4xl md:text-6xl 
        font-bold leading-tight text-red-500
      "
          >
            FixinMoto
          </motion.h1>

          <motion.p
            variants={child}
            className="
        text-sm sm:text-base md:text-lg
        text-gray-200
        max-w-xs sm:max-w-md md:max-w-lg
      "
          >
            Your car deserves the best care — precision, speed & reliability.
            Book your appointment today!
          </motion.p>

          <motion.div
            variants={child}
            className="
        flex flex-col sm:flex-row 
        gap-3 sm:gap-4 
        mt-4
      "
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-red-600 px-6 py-3 rounded-lg font-semibold"
            >
              Appointment Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <>
        <ServicesSection />
        <WhyChooseUs />
      </>
    </>
  );
};

export default Home;
