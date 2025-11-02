import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future Routes */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/appointment" element={<Appointment />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
