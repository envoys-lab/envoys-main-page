import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

const AppStyle = styled.div`
/* background: #7e7e7e; */
`


const Ddd:React.FC = () => {
  return <>dasdas</>
}

const App: React.FC = () => {
  return (
    <AppStyle>
      <Header />
      <Banner />
      <Ddd/>
    </AppStyle>
  );
};

export default App;
