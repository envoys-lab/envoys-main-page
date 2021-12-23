import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main"></div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </>
  );
};

export default App;
