import React from "react";
<<<<<<< HEAD
import './app.css';
=======
import About from "./components/About/About";
>>>>>>> 1f5b6c6e855d3f64450bffcd828a47e2f00dad80
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
