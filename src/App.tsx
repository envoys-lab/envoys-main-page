import React from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="main">{/* <Banner /> */}</div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
