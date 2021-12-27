import React from "react";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { Route, Routes } from "react-router";
import AllInfo from "./pages/allInfo/AllInfo";
import Home from "./pages/home/Home";
import Listing from "./components/Listing/Listing";

const App: React.FC = () => {
  const [activeActions, setActiveActions] = React.useState(0);
  return (
    <div className="App" onClick={() => setActiveActions(0)}>
      <Header
        activeActions={activeActions}
        setActiveActions={setActiveActions}
      />
      <BreadCrumbs />
      <div className="container">
        <Search />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allinfo"
            element={
              <div className="container">
                <AllInfo />
              </div>
            }
          />
          <Route
            path="/listing"
            element={
              <div className="container">
                <Listing />
              </div>
            }
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
