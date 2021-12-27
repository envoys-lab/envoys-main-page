import React, { FC } from "react";
import styled from "styled-components";
import baner from "../../assets/images/banner.svg";
import logo from "../../assets/images/smolbt.jpg";
import Proposal from "../proposal/Proposal";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 61px 20px 0;
  background: white;
  border-radius: 14px;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  /* Dark clear */
  color: #0f2b46;
  @media (max-width: 760px) {
    font-size: 38px;
    line-height: 0;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
  @media (max-width: 360px) {
    font-size: 24px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #0f2b46;
  max-width: 658px;
  margin: 34px auto;
  @media (max-width: 760px) {
    font-size: 16px;
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  max-width: 300px;
  border: 1px solid #e5e5e5;
  padding: 20px 20px 30px 15px;
  border-radius: 14px;
  margin-right: 50px;
  margin-bottom: 40px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1160px) {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 1190px) {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 990px) {
    margin-top: 10px;
    &:nth-child(2) {
      margin-right: 0;
    }
  }
  @media (max-width: 760px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
  @media (max-width: 640px) {
    margin-right: 0;
  }
`;
const CardImg = styled.div`
  width: 110px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media (max-width: 381px) {
    width: 90px;
  }
`;

const CardTitle = styled.h2`
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #0f2b46;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 639px) {
    font-size: 18px;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (max-width: 480px) {
    margin-top: 0;
  }
`;

const CardListItems = styled.span`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CardListItem = styled.span`
  color: #0f2b46;
  position: relative;
  margin-left: 30px;
  @media (max-width: 639px) {
    font-size: 14px;
  }
  &::before {
    position: absolute;
    content: "₿";
    display: flex;
    font-size: 12px;
    color: white;
    align-items: center;
    justify-content: center;
    background: url(${logo});
    width: 18px;
    height: 18px;
    border-radius: 50%;
    left: -30px;
    top: 2px;
  }
`;

const About: FC = () => {
  const listItem = [
    "Получите финансированее от ведущий инвестеров",
    "Подайте заявку на участие в программе акселерация",
    "Найдите самый талантливых специалистов",
    "Публикуйте информацию о прогрессе и новостях по проекту",
  ];
  return (
    <Wrapper>
      <Title>
        Что такое <span style={{ color: "#F48020" }}>Envoys Vision</span>
      </Title>
      <Subtitle>
        Имея небольшой капитал всего в 1$, пользователи могу инвистировать так
        же, как участники рынка, имеющие более $1,000,000, путем создания общего
        пула участников, выступающих в качестве держателей токенов
      </Subtitle>
      <CardWrapper>
        <Card>
          <CardImg>
            <img width="100%" src={baner} alt="" />
          </CardImg>
          <CardTitle>Владельцам Проектов</CardTitle>
          <CardList>
            {listItem.map((el, idx) => (
              <CardListItems key={idx}>
                <CardListItem>{el}</CardListItem>
              </CardListItems>
            ))}
          </CardList>
        </Card>
        <Card>
          <CardImg>
            <img width="100%" src={baner} alt="" />
          </CardImg>
          <CardTitle>Владельцам Проектов</CardTitle>
          <CardList>
            {listItem.map((el, idx) => (
              <CardListItems key={idx}>
                <CardListItem>{el}</CardListItem>
              </CardListItems>
            ))}
          </CardList>
        </Card>
        <Card>
          <CardImg>
            <img width="100%" src={baner} alt="" />
          </CardImg>
          <CardTitle>Владельцам Проектов</CardTitle>
          <CardList>
            {listItem.map((el, idx) => (
              <CardListItems key={idx}>
                <CardListItem>{el}</CardListItem>
              </CardListItems>
            ))}
          </CardList>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

export default About;
