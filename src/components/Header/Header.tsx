import React from "react";
import {
  ActionsItem,
  ActionsWrapper,
  MenuList,
  MenuListItem,
  NavWrapper,
  AccountPopUp,
  PopUpList,
  AccountPopUpListItem,
  NavInner,
  BurgerBtn,
  Languages,
  InfoWrapper,
  InfoListItem,
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
  const [activeActions, setActiveActions] = React.useState(0);
  const [burger, setBurger] = React.useState(false);
  const [lang, setLang] = React.useState("English");
  const languages = ["Russian", "Kyrgyz", "English"];
  return (
    <NavWrapper>
      <NavLink to="/">
        <img src={logo} className="logo" alt="" />
      </NavLink>
      <NavInner burger={burger}>
        <MenuList>
          <MenuListItem
            activeActions={activeActions}
            onClick={() =>
              activeActions !== 3 ? setActiveActions(3) : setActiveActions(0)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="#133D65"
              className="menu_icons1"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
            </svg>
            <span className="menu_link-text">О бирже</span>
          </MenuListItem>
          {activeActions === 3 && (
            <InfoWrapper>
              <PopUpList>
                <InfoListItem>
                  <NavLink to="/">Общая информация</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Совет директоров</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Ревизионная комиссия</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Ревизионная комиссия</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Участники торгов</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Наши партнеры</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Стратегия развития</NavLink>
                </InfoListItem>
                <InfoListItem>
                  <NavLink to="/">Стратегия развития</NavLink>
                </InfoListItem>
              </PopUpList>
            </InfoWrapper>
          )}
          <MenuListItem>
            <NavLink to="/base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
                fill="#133D65"
                className="menu_icons1"
              >
                <path d="M 6 2 C 4.895 2 4 2.895 4 4 L 4 20 C 4 21.105 4.895 22 6 22 L 18 22 C 19.105 22 20 21.105 20 20 L 20 4 C 20 2.895 19.105 2 18 2 L 6 2 z M 6 4 L 18 4 L 18 8 L 6 8 L 6 4 z M 6 10 L 18 10 L 18 14 L 6 14 L 6 10 z M 6 16 L 18 16 L 18 20 L 6 20 L 6 16 z"></path>
              </svg>
              <span className="menu_link-text">Нормативная база</span>
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            <NavLink to="/statistic">
              <svg
                width="16px"
                height="16px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#133D65"
                className="menu_icons1"
              >
                <path d="M 3.984375 2.9863281 A 1.0001 1.0001 0 0 0 3 4 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 20 21 A 1.0001 1.0001 0 1 0 20 19 L 5 19 L 5 4 A 1.0001 1.0001 0 0 0 3.984375 2.9863281 z M 18.980469 6.9902344 A 1.0001 1.0001 0 0 0 18.292969 7.2929688 L 14.984375 10.601562 L 12.691406 8.4082031 A 1.0001 1.0001 0 0 0 11.304688 8.4121094 L 7.3046875 12.28125 A 1.0001 1.0001 0 1 0 8.6953125 13.71875 L 12.003906 10.517578 L 14.308594 12.722656 A 1.0001 1.0001 0 0 0 15.707031 12.707031 L 19.707031 8.7070312 A 1.0001 1.0001 0 0 0 18.980469 6.9902344 z"></path>
              </svg>
              <span className="menu_link-text">Статистика торгов</span>
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            <NavLink to="/education">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="18px"
                height="18px"
                fill="#133D65"
                className="menu_icons1"
              >
                <path d="M62.373,38.765A3.44,3.44,0,0,0,60,36.164V25a1,1,0,0,0-.591-.912l-16-7.173a1,1,0,1,0-.818,1.824L54.325,24H33.763A4.024,4.024,0,0,0,30,22c-2.243,0-4,1.317-4,3s1.757,3,4,3a4.024,4.024,0,0,0,3.763-2H54.325L30,36.9,3.445,25,30,13.1l8.591,3.85a1,1,0,1,0,.818-1.824l-9-4.034a1,1,0,0,0-.818,0l-29,13a1,1,0,0,0,0,1.824L10,30.13V46.646a3.018,3.018,0,0,0,1.891,2.8A49.169,49.169,0,0,0,30,52.986,49.227,49.227,0,0,0,48.114,49.44,3.013,3.013,0,0,0,50,46.65V30.13l8-3.587v9.621a3.44,3.44,0,0,0-2.373,2.6L54.02,46.8A1,1,0,0,0,55,48h8a1,1,0,0,0,.98-1.2ZM30,26c-1.221,0-2-.592-2-1s.779-1,2-1,2,.592,2,1S31.221,26,30,26ZM48,46.65a1,1,0,0,1-.618.929,46.1,46.1,0,0,1-34.759,0A1,1,0,0,1,12,46.646V31.027l17.591,7.885a.994.994,0,0,0,.818,0L48,31.026ZM56.22,46l1.368-6.843a1.44,1.44,0,0,1,2.824,0L61.78,46Z"></path>
              </svg>
              <span className="menu_link-text">Учебный центр</span>
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
              <PopUpList>
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
              </PopUpList>
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
              <span>{lang}</span>
            </div>
            {activeActions === 2 && (
              <Languages>
                {languages.map((item, index) => (
                  <span
                    className={item === lang ? "selected_lang" : ""}
                    key={index}
                    onClick={() => setLang(item)}
                  >
                    {item}
                  </span>
                ))}
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
