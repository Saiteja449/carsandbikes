import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-black text-white font-[Poppins]">
      <Header />
      <main className="pt-20 px-6 md:px-12">{children}</main>
    </div>
  );
};

export default MainLayout;
