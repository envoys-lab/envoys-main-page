import styled from "styled-components";

interface Props {
  activeActions?: number;
  burger?: boolean;
  children?: React.ReactChild | React.ReactNode;
}

export const NavWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 60px;
  font-size: 14px;
  color: #133d65;
  .logo {
    width: 220px;
    height: 30px;
  }
  @media (max-width: 1210px) {
    padding: 15px 10px 15px 15px;
  }
  @media (max-width: 768px) {
    padding: 15px 10px 15px 15px;
    .logo {
      width: 160px;
      height: 20px;
    }
  }
`;
export const NavInner = styled.div<Props>`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  transition: all 0.3s;
  @media (max-width: 1210px) {
    width: 74%;
  }
  @media (max-width: 768px) {
    width: 72%;
  }
  @media (max-width: 1100px) {
    position: absolute;
    width: 240px;
    height: 100vh;
    right: ${(props) => (props.burger ? "0" : "-200%")};
    top: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0;
    padding: 40px 10px 0;
    z-index: 1;
    -webkit-box-shadow: -10px 0px 20px -14px rgb(0 0 0 / 79%);
    box-shadow: -10px 0px 20px -14px rgb(0 0 0 / 79%);
  }
`;
export const BurgerBtn = styled.button<Props>`
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: none;
  background-color: transparent;
  border: none;
  z-index: 100;
  img {
    width: 100%;
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;
export const MenuList = styled.ul<Props>`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
  }
`;

export const MenuListItem = styled.li<Props>`
  padding: 0 10px;
  text-decoration: none;
  color: ${(props) => (props.activeActions == 3 ? "#f48020" : "#133d65")};
  display: flex;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: #f48020;
    .menu_icons1 {
      opacity: 1;
      fill: #f48020;
    }
  }
  a {
    text-decoration: none;
    color: #133d65;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    &:hover {
      color: #f48020;
    }
  }
  .menu_icons1 {
    opacity: 0.3;
    margin-right: 10px;
    fill: ${(props) => (props.activeActions == 3 ? "#f48020" : "#133d65")};
    opacity: ${(props) => (props.activeActions == 3 ? "1" : "0.3")};
    transition: all 0.5s;
  }
  @media (max-width: 1100px) {
    padding: 10px 0;
    .menu_icon {
      margin-right: 0;
    }
  }
`;

export const ActionsWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  position: relative;
  .actions_item-select {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    .actions_item {
      flex-direction: column;
    }
  }
`;

export const ActionsItem = styled.div<Props>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  border-left: 1px solid #e5e5e5;
  position: relative;
  transition: all 0.5s;
  .burger_icons {
    width: 15px;
    height: 15px;
    margin-right: 3px;
    display: none;
  }
  &:hover {
    color: #f48020;
    .burger_icons {
      fill: #f48020;
    }
  }
  &:first-child {
    border-left: none;
  }
  .icon-profile {
    font-size: 16px;
    margin-right: 6px;
  }
  @media (max-width: 1100px) {
    border-left: none;
    padding: 10px 0 10px 4px;
    &:first-child {
      padding: 0 0 10px;
    }
    .burger_icons {
      display: block;
      margin-right: 10px;
    }
  }
`;

export const AccountPopUp = styled.div<Props>`
  position: absolute;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  background-color: #fff;
  left: 0;
  bottom: -10px;
  transform: translateY(100%);
  z-index: 10;
  @media (max-width: 1100px) {
    position: relative;
    width: 100%;
    bottom: 0;
    transform: translateY(0);
    box-shadow: none;
  }
`;
export const PopUpList = styled.ul<Props>`
  padding: 0;
  margin: 0;
  list-style: none;
  .popUp_icon {
    margin-right: 10px;
    font-size: 16px;
  }
  @media (max-width: 1100px) {
    .popUp_icon {
      margin-right: 0;
    }
  }
`;
export const AccountPopUpListItem = styled.li<Props>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: #f48020;
  }
  @media (max-width: 1100px) {
    padding: 10px 0;
  }
`;

export const Languages = styled.div<Props>`
  position: absolute;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  background-color: #fff;
  width: 66px;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  color: #133d65;
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 10;
  span {
    padding: 0 0 10px;
    cursor: pointer;
    &:first-child {
      padding: 10px 0 10px;
    }
    &:hover {
      color: #f48020;
    }
  }
  .selected_lang {
    color: #f48020;
  }
  @media (max-width: 1100px) {
    position: relative;
    width: 100%;
    transform: translateY(0);
    box-shadow: none;
    text-align: left;
    span {
      padding-left: 25px;
      &:first-child {
        padding: 10px 0 10px 25px;
      }
    }
  }
`;

export const InfoWrapper = styled.div<Props>`
  position: absolute;
  left: 0;
  bottom: -10px;
  transform: translateY(100%);
  border-radius: 14px;
  background-color: #fff;
  padding: 14px 20px 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  z-index: 10;
  @media (max-width: 1100px) {
    position: relative;
    transform: translateY(0);
    box-shadow: none;
    bottom: 0;
    padding: 10px 10px 10px;
  }
`;

export const InfoListItem = styled.li<Props>`
  padding: 10px 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: #133d65;
    opacity: 0.05;
    border-radius: 4px;
  }
  &:last-child {
    &::after {
      width: 0;
      height: 0;
    }
  }
  a {
    text-decoration: none;
    color: #0f2b46;
    padding-left: 15px;
    transition: all 0.5s;
    &:hover {
      color: #f48020;
    }
  }
`;
