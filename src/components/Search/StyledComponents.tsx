import styled from "styled-components";
import searchIcon from "../../assets/images/icons/search.svg";

interface Props {
  children?: React.ReactChild | React.ReactNode;
}

export const SearchWrapper = styled.div<Props>`
  padding: 0 25px;
  border: 1px solid #e8e8ea;
  box-sizing: border-box;
  margin: 28px 0;
  border-radius: 14px;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 580px) {
    margin: 15px 0;
    padding: 0 15px;
  }
`;

export const SearchInput = styled.input<Props>`
  width: 100%;
  padding: 16px 10px 16px 28px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center left;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  outline: none;
  border: none;
  color: #133d65;
  @media (max-width: 480px) {
    padding: 8px 10px 8px 28px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
