import styled, { keyframes } from "styled-components";

interface Props {
  children?: React.ReactChild | React.ReactNode;
  justify?: string;
  align?: string;
  direction?: string;
  margin?: string;
  height?: string;
}

export const Flex = styled.div<Props>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

export const BannerFlex = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const BannertextsWrap = styled.div`
  margin-top: 5%;
  width: auto;

  @media (max-width: 768px) {
    order: 1;
    width: 60%;
    margin: 1rem auto 0 auto;
  }
`;

export const BannerImgWrap = styled.div`
  margin: 1rem 0;
  position: relative;
  @media (max-width: 768px) {
    order: 0;
    margin-top: 1rem;
    max-width: 400px;
  }
`;

export const BannerTitle = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  margin: 0;
  padding: 0;
  color: #0f2b46;
  @media (max-width: 960px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const BannerTitleOrange = styled(BannerTitle)`
  color: #f48020;
  width: 400px;

  &::before {
    content: "";
    display: inline-block;
    width: 172px;
    height: 3px;
    background: #f48020;
    margin: 0px 13px 14px 0;
    @media (max-width: 960px) {
      width: 110px;
    }
    @media (max-width: 425px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const BannerText = styled.p`
  max-width: 530px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #0f2b46;
  margin-top: 24px;
  margin-bottom: 34px;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
  }
`;

export const BannerBtnOrange = styled.button`
  outline: none;
  border: none;
  color: #fff;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  padding: 12px 27px 12px 22px;
  background: #f48020;
  border-radius: 5px;
  cursor: pointer;
`;

export const BannerBtn = styled(BannerBtnOrange)`
  margin-left: 17px;
  background: #f9f9f9;
  color: #133d65;
  padding: 12px 20px 12px 15px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BannerImg = styled.img`
  max-width: 100%;
  /* animation: ${rotate} 5s linear infinite; */
`;

export const BannerIcon = styled.img`
  width: 32px;
`;

export const BannerLink = styled.a`
  color: #133d65;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #133d65;
  margin-left: 10px;
  text-decoration: none;
`;

export const BannerLinkPos = styled(Flex)`
  margin-top: 20vh;
  @media (max-width: 1180px) {
    margin-top: 50px;
  }
`;
