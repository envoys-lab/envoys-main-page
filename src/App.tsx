import React from "react";
import { Route, Routes } from "react-router";
import './app.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllInfo from "./pages/allInfo/AllInfo";
import Home from "./pages/home/Home";
import Listing from "./components/Listing/Listing";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/allinfo" element={<AllInfo/>} />
            <Route path="/listing" element={<Listing/>} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
