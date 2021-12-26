import styled from "styled-components";

interface Props {
  children?: React.ReactChild | React.ReactNode;
}

export const HowItWorksWrapper = styled.div<Props>`
  max-width: 1330px;
  padding: 0 15px;
  margin: 0 auto;
`;
export const HowItWorksText = styled.div<Props>`
  max-width: 400px;
  margin-bottom: 120px;
  padding-left: 90px;
  color: #0f2b46;
  .title {
    font-size: 48px;
    line-height: 56px;
    margin: 0;
    margin-bottom: 35px;
  }
  .subtitle {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 1070px) {
    margin: 0 auto;
    text-align: center;
    padding-left: 0;
  }
  @media (max-width: 660px) {
    .title {
      font-size: 38px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 460px) {
    .title {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 15px;
    }
    .subtitle {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;
export const HowItWorksImg = styled.img<Props>`
  width: 100%;
`;
