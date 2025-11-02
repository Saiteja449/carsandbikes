import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 py-4 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white font-bold text-2xl sm:text-3xl">
          FixinMoto<span className="text-red-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white font-medium text-base lg:text-lg">
          <li className="cursor-pointer hover:text-red-400">About Us</li>
          <li className="cursor-pointer hover:text-red-400">Appointment</li>
          <li className="cursor-pointer hover:text-red-400">Pages</li>
        </ul>

        {/* Login Button (Desktop) */}
        <button className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
          Login
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl relative z-[100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-2xl font-semibold z-40
        transition-all duration-500 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"}`}
      >
        <ul className="flex flex-col items-center gap-8">
          <li className="cursor-pointer hover:text-red-400 transition">About Us</li>
          <li className="cursor-pointer hover:text-red-400 transition">Appointment</li>
          <li className="cursor-pointer hover:text-red-400 transition">Pages</li>
        </ul>

        <button className="bg-red-500 hover:bg-red-600 px-10 py-3 rounded-lg font-semibold text-lg transition">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
