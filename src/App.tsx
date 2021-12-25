import React from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BreadCrumbs />
      <div className="container">
        <Search />
      </div>
      <div className="main">
        <Banner />
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
