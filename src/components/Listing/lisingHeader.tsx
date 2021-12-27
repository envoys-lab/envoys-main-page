import React, { FC, FunctionComponent, useEffect } from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 959px;
  background: transparent;
  padding: 18px 36px 18px 68px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 806px) {
    display: none;
  }
`;

const HeaderItem = styled.div`
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  text-align: center;
  color: rgba(19, 61, 101, 0.7);
  max-width: 113px;
  &:first-child {
    margin-right: 107px;
  }
  &:nth-child(2) {
    margin-right: 30px;
  }
  &:nth-child(4) {
    margin-left: -51px;
  }
  &:nth-child(6) {
    margin-left: 19px;
  }
`;
type Props = {
  headerItem: string[];
};

const LisingHeader: FunctionComponent<Props> = (props) => {
  return (
    <Header>
      {props.headerItem.map((el: string, idx: number) => (
        <>
          <HeaderItem key={idx}>{el}</HeaderItem>
        </>
      ))}
    </Header>
  );
};

export default LisingHeader;
