import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body{
     height: 100%;
     overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    #root {
	display: flex;
	flex-direction: column;
	min-height: 100%;
   position: relative;
  }
  .App {
     width: 100%;
  }
  .container {
     max-width: 990px;
     margin: 0 auto;
     padding: 0 15px;
  }
.main {
	flex: 1 0 auto;
}
.footer {
	flex: 0 0 auto;
}
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
