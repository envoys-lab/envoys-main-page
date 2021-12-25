import React from 'react';
import styled from "styled-components";

const Header = styled.header`
  max-width: 959px;
  background:transparent;
  padding: 18px 0 18px 68px;
  display: flex;
 
`

const HeaderItem = styled.div`
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  text-align: center;
  color: rgba(19, 61, 101, 0.7);
  max-width: 133px;
  &:first-child{
    margin-right: 186px;
  }
  &:nth-child(2){
    margin-right: 69px;
  }
  &:nth-child(3){
    margin-right: 5px;
  }
  &:nth-child(4){
    margin-right: 67px;
  }
  &:nth-child(5){
    margin-right: 80px;
  }
`

const LisingHeader = () => {
    const headerItem = ['Эмитет', 'Бумага','Ценная последней сделки,com','Капитализация млн,com','Кол-во ЦБ','Анкета']
    return (
        <Header>
            {
                headerItem.map((el , idx) =>
                <HeaderItem key={idx}>{el}</HeaderItem>
                )
            }
        </Header>
    );
};

export default LisingHeader;