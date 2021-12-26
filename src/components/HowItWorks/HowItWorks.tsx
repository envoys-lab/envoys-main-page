import React from "react";
import {
  HowItWorksText,
  HowItWorksWrapper,
  HowItWorksImg,
} from "./StyledComponents";
import howItWorksImg from "../../assets/images/howItWorks.svg";
const HowItWorks: React.FC = () => {
  return (
    <HowItWorksWrapper>
      <HowItWorksText>
        <h2 className="title">Как это работает</h2>
        <p className="subtitle">
          Майнинг ликвидности, торговля с помощью пулов или классической книги
          ордеров!
        </p>
      </HowItWorksText>
      <HowItWorksImg src={howItWorksImg} alt="" />
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
