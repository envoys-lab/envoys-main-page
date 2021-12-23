import styled from "styled-components";

interface Props {
  children?: React.ReactChild | React.ReactNode;
}
export const FooterWrapper = styled.div<Props>`
  width: 100%;
  background-color: #0a1d2f;
  padding-top: 60px;
  flex: 0 0 auto;
  @media (max-width: 860px) {
    padding-top: 30px;
  }
`;

export const FooterContainer = styled.div<Props>`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const FooterTop = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const JoinWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  color: #fff;
  .join_title {
    margin: 0;
    font-size: 24px;
    line-height: 16px;
    margin-bottom: 10px;
  }
  .join_text {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
  }
  .footer_socials-wrapper {
    display: flex;
    align-items: center;
    margin: 20px 0 30px;
    img {
      width: 30px;
      height: 30px;
    }
    a {
      display: inline-block;
      margin-right: 14px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 860px) {
    margin-bottom: 30px;
    text-align: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const JoinInput = styled.input<Props>`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 10px 12px 16px;
  font-family: "Roboto", sans-serif;
  outline: none;
  border: none;
  color: #133d65;
  @media (max-width: 320px) {
    padding: 8px 6px 8px 12px;
  }
`;

export const FooterTopRight = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FooterTopRightColumn = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 30%;
  .footer_right-title {
    margin: 0;
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 22px;
    color: #fff;
  }
  .footer_right-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .footer_right-item {
    padding: 8px 0;
    a {
      text-decoration: none;
      color: #fff;
      transition: all 0.5s;
      font-size: 14px;
      &:hover {
        color: #f48020;
      }
    }
  }
  @media (max-width: 860px) {
    text-align: center;
  }
  @media (max-width: 460px) {
    width: 50%;
    text-align: left;
    &:last-child {
      margin-top: 20px;
    }
  }
  @media (max-width: 320px) {
    .footer_right-title {
      margin-bottom: 10px;
    }
    .footer_right-item {
      padding: 5px 0;
    }
  }
`;
export const Copy = styled.div<Props>`
  text-align: center;
  padding: 30px 0;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;
