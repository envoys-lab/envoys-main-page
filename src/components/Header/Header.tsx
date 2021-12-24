import React, { SetStateAction } from "react";
import {
  ActionsItem,
  ActionsWrapper,
  MenuList,
  MenuListItem,
  NavWrapper,
  AccountPopUp,
  AccountPopUpList,
  AccountPopUpListItem,
  NavInner,
  BurgerBtn,
  Languages,
} from "./HeaderStyledComponents";
import logo from "../../assets/images/logo.svg";
import openBurger from "../../assets/images/icons/openBurger.svg";
import closeBurger from "../../assets/images/icons/closeBurger.svg";
import "../../assets/fonts/css/fontello.css";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactChild | React.ReactNode;
}
const Header: React.FC<Props> = () => {
  const [activeActions, setActiveActions] = React.useState<number>(0);
  const [burger, setBurger] = React.useState(false);
  return (
    <NavWrapper>
      <NavLink to="/">
        <img src={logo} className="logo" alt="" />
      </NavLink>
      <NavInner burger={burger}>
        <MenuList>
          <MenuListItem>
            <NavLink to="/exchange">
              <span className="menu_icon icon-exchange"></span>
              <span className="menu_link-text">Exchange</span>
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            <NavLink to="/defi">
              <span className="menu_icon icon-trading"></span>
              <span className="menu_link-text">DeFi</span>
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            <NavLink to="/nft">
              <span className="menu_icon icon-profile"></span>
              <span className="menu_link-text">NFT</span>
            </NavLink>
          </MenuListItem>
        </MenuList>
        <ActionsWrapper>
          <ActionsItem
            onClick={() =>
              activeActions !== 1 ? setActiveActions(1) : setActiveActions(0)
            }
          >
            <span className="icon-profile"></span>
            <span>Account</span>
          </ActionsItem>
          {activeActions === 1 && (
            <AccountPopUp>
              <AccountPopUpList>
                <AccountPopUpListItem>
                  <span className="popUp_icon icon-wallet"></span>
                  <span>Connect wallet</span>
                </AccountPopUpListItem>
                <AccountPopUpListItem>
                  <span className="popUp_icon icon-settings"></span>
                  <span>Settings</span>
                </AccountPopUpListItem>
                <AccountPopUpListItem>
                  <span className="popUp_icon icon-sign-out"></span>
                  <span>Sign Out</span>
                </AccountPopUpListItem>
              </AccountPopUpList>
            </AccountPopUp>
          )}
          <ActionsItem
            className="actions_item"
            onClick={() =>
              activeActions !== 2 ? setActiveActions(2) : setActiveActions(0)
            }
          >
            <div className="actions_item-select">
              <svg
                className="burger_icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="#133d65"
              >
                <path d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 15.393114 5 15.800441 5.1628391 16.265625 5.5957031 C 16.730809 6.0285672 17.212234 6.7266811 17.625 7.6347656 C 17.931695 8.3094955 18.181967 9.1269971 18.398438 10 L 11.601562 10 C 11.818033 9.1269971 12.068305 8.3094955 12.375 7.6347656 C 12.787766 6.7266811 13.269191 6.0285672 13.734375 5.5957031 C 14.199559 5.1628391 14.606886 5 15 5 z M 11.087891 5.7929688 C 10.899683 6.1138664 10.718756 6.447642 10.554688 6.8085938 C 10.127113 7.7492563 9.783958 8.8280519 9.5253906 10 L 6.34375 10 C 7.4232731 8.1311295 9.0834141 6.6430191 11.087891 5.7929688 z M 18.912109 5.7929688 C 20.916586 6.6430191 22.576727 8.1311295 23.65625 10 L 20.474609 10 C 20.216042 8.8280519 19.872887 7.7492563 19.445312 6.8085938 C 19.281244 6.447642 19.100317 6.1138664 18.912109 5.7929688 z M 5.4570312 12 L 9.1855469 12 C 9.0679958 12.960136 9 13.961929 9 15 C 9 16.038071 9.0679958 17.039864 9.1855469 18 L 5.4570312 18 C 5.161063 17.053436 5 16.045845 5 15 C 5 13.954155 5.161063 12.946564 5.4570312 12 z M 11.222656 12 L 18.777344 12 C 18.907769 12.954082 19 13.947466 19 15 C 19 16.052534 18.907769 17.045919 18.777344 18 L 11.222656 18 C 11.092231 17.045919 11 16.052534 11 15 C 11 13.947466 11.092231 12.954082 11.222656 12 z M 20.814453 12 L 24.542969 12 C 24.838937 12.946564 25 13.954155 25 15 C 25 16.045845 24.838937 17.053436 24.542969 18 L 20.814453 18 C 20.932004 17.039864 21 16.038071 21 15 C 21 13.961929 20.932004 12.960136 20.814453 12 z M 6.34375 20 L 9.5253906 20 C 9.783958 21.171948 10.127113 22.250744 10.554688 23.191406 C 10.718756 23.552358 10.899683 23.886134 11.087891 24.207031 C 9.0834141 23.356981 7.4232731 21.868871 6.34375 20 z M 11.601562 20 L 18.398438 20 C 18.181967 20.873003 17.931695 21.690505 17.625 22.365234 C 17.212234 23.273319 16.730809 23.971433 16.265625 24.404297 C 15.800441 24.837161 15.393114 25 15 25 C 14.606886 25 14.199559 24.837161 13.734375 24.404297 C 13.269191 23.971433 12.787766 23.273319 12.375 22.365234 C 12.068305 21.690505 11.818033 20.873003 11.601562 20 z M 20.474609 20 L 23.65625 20 C 22.576727 21.868871 20.916586 23.356981 18.912109 24.207031 C 19.100317 23.886134 19.281244 23.552358 19.445312 23.191406 C 19.872887 22.250744 20.216042 21.171948 20.474609 20 z"></path>
              </svg>
              <span>English</span>
            </div>
            {activeActions === 2 && (
              <Languages>
                <span>Russian</span>
                <span>Kyrgyz</span>
              </Languages>
            )}
          </ActionsItem>
          <ActionsItem>
            <svg
              className="burger_icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="#133d65"
            >
              {" "}
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 10 L 24 12.800781 C 18.4 13.100781 17.449219 17.299219 17.449219 19.199219 C 17.449219 28.599219 31.150391 23.599219 31.150391 30.699219 C 31.150391 31.599219 30.950781 35.599609 25.050781 35.599609 C 24.850781 35.599609 18.749219 35.600781 18.949219 29.300781 L 16.849609 29.300781 C 17.049609 36.000781 21.3 36.899219 24 37.199219 L 24 40 L 26 40 L 26 37.199219 C 32.7 36.699219 33.150391 31.699219 33.150391 30.699219 C 33.150391 21.699219 19.449219 26.300391 19.449219 19.400391 C 19.449219 17.100391 20.350781 14.400391 25.050781 14.400391 C 29.850781 14.400391 30.450781 18.200391 30.550781 19.900391 L 32.650391 19.900391 C 32.850391 17.100391 30.850781 13.000781 26.050781 12.800781 L 26.050781 10 L 24 10 z"></path>
            </svg>
            <span>USD</span>
          </ActionsItem>
        </ActionsWrapper>
      </NavInner>
      <BurgerBtn onClick={() => setBurger(!burger)}>
        {burger ? <img src={closeBurger} /> : <img src={openBurger} />}
      </BurgerBtn>
    </NavWrapper>
  );
};

export default Header;
