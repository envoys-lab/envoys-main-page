import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

const AppStyle = styled.div`
/* background: #7e7e7e; */
`


const App: React.FC = () => {
  return (
    <AppStyle>
      <Header />
      <Banner />
    </AppStyle>
  );
};

export default App;
