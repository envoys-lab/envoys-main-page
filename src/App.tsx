import React from "react";
import { Route, Routes } from "react-router";
import './app.css';
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllInfo from "./pages/allInfo/AllInfo";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allinfo" element={<AllInfo/>} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
