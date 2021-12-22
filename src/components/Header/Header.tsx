import React from "react";
import { NavWrapper } from "./StyledComponents";
import logo from "../../assets/images/logo.svg";
import "../../assets/fonts/css/fontello.css";

const Header: React.FC = () => {
  return (
    <NavWrapper>
      <img src={logo} className="logo" alt="" />
    </NavWrapper>
  );
};

export default Header;
