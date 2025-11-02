import React from "react";
import { motion } from "framer-motion";
import Brakes from "../../assets/brakes.svg";
import Oil from "../../assets/oil.svg";
import Tires from "../../assets/tires.svg";

const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // faster
      delayChildren: 0.05, // less delay
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 1], // buttery smooth
    },
  },
};

const services = [
  { id: "01", title: "Engine Repair & Maintenance", image: Brakes },
  { id: "02", title: "Oil & Filter Changes", image: Oil },
  { id: "03", title: "Brake Services", image: Brakes },
  { id: "04", title: "Tire Care", image: Tires },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <p className="text-gray-400 text-sm font-medium">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-2">
              Comprehensive <br />
              <span className="text-red-500">Automotive Solutions</span>
            </h2>
          </div>

          <p className="max-w-sm text-gray-300 text-sm md:text-base leading-relaxed">
            From routine maintenance to advanced diagnostics, we’ve got all your
            automotive needs covered.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.25 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              className="
      relative rounded-xl overflow-hidden cursor-pointer
      bg-black border border-gray-800
      shadow-md shadow-black/40
      transition-all duration-500 group
    "
            >
              {/* ✅ FULL IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="
        w-full h-64 object-cover
        group-hover:scale-110 transition-transform duration-700
      "
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85"></div>

              {/* Service ID */}
              <span className="absolute top-4 left-4 text-gray-300 font-semibold text-sm tracking-wide">
                {service.id}
              </span>

              {/* Title */}
              <h3
                className="
        absolute bottom-4 left-4 
        text-white text-lg font-semibold 
        transition-colors duration-300
        group-hover:text-red-500
      "
              >
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
