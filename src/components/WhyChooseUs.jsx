import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import mainImage from "../../assets/whychoose1.jpg";
import smallImage from "../../assets/whychoose1.jpg";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#111111] py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <p className="text-gray-400 text-sm mb-2">Why Choose Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            The FixinMoto <br />
            <span className="text-red-500">Difference</span>
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-base max-w-md leading-relaxed">
            Discover why FixinMoto is the trusted choice for hundreds of car owners.
          </p>

          <ul className="space-y-3 mt-6">
            {[
              "Certified and experienced technicians.",
              "Transparent pricing with no hidden charges.",
              "Advanced tools and diagnostic equipment.",
              "Fast, reliable service you can trust.",
            ].map((text, index) => (
              <li key={index} className="flex gap-3 items-start text-gray-300">
                <FaCheckCircle className="text-red-500 text-lg mt-1" />
                {text}
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 mt-8 text-sm rounded-md transition font-semibold">
            Learn More
          </button>
        </div>

        {/* Images Section */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* Large Image */}
          <div className="w-[280px] h-[260px] md:w-[380px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <img src={mainImage} className="w-full h-full object-cover" alt="Main" />
          </div>

          {/* Small Image Overlay */}
          <div className="absolute left-4 md:left-10 bottom-[-50px] 
            w-[180px] h-[130px] md:w-[220px] md:h-[160px] 
            rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img src={smallImage} className="w-full h-full object-cover" alt="Small" />
          </div>

          {/* Badge */}
          <div className="absolute top-[-20px] right-[-10px] md:right-[-20px]
            bg-red-600 text-white px-4 py-2 rounded-lg shadow-md text-center">
            <span className="text-lg md:text-xl font-bold">+15</span><br />
            <span className="text-[10px] opacity-90 md:text-xs">Years of Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
