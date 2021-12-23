import styled from "styled-components";

interface Props {
  children?: React.ReactChild | React.ReactNode;
}
export const FooterWrapper = styled.div<Props>`
  width: 100%;
  background-color: #0a1d2f;
  padding-top: 60px;
  flex: 0 0 auto;
`;

export const FooterContainer = styled.div<Props>`
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterTop = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
      margin-right: 14px;
    }
  }
`;

export const JoinInput = styled.input<Props>`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 10px 12px 16px;
  font-family: "Roboto", sans-serif;
  outline: none;
  border: none;
`;

export const FooterTopRight = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
export const FooterTopRightColumn = styled.div<Props>`
  display: flex;
  flex-direction: column;
  max-width: 178px;
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
`;
export const Copy = styled.div<Props>`
  text-align: center;
  padding: 30px 0;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;
