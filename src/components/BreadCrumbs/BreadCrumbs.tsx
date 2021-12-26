import React from "react";
import {
  BreadCrumbsInner,
  BreadCrumbsText,
  BreadCrumbsWrapper,
} from "./StyledComponents";

const BreadCrumbs: React.FC = () => {
  return (
    <BreadCrumbsWrapper>
      <BreadCrumbsInner>
        <div className="breadCrumbsItem">
          <BreadCrumbsText margin="5px">KTEM:</BreadCrumbsText>
          <BreadCrumbsText color="#44AE9B">3310862</BreadCrumbsText>
        </div>
        <div className="breadCrumbsItem">
          <BreadCrumbsText margin="5px">KKTM:</BreadCrumbsText>
          <BreadCrumbsText color="#F15555">59510</BreadCrumbsText>
        </div>
        <div className="breadCrumbsItem">
          <BreadCrumbsText margin="5px">KSHY:</BreadCrumbsText>
          <BreadCrumbsText color="#44AE9B">3310862</BreadCrumbsText>
        </div>
        <div className="breadCrumbsItem">
          <BreadCrumbsText margin="5px">KETZ:</BreadCrumbsText>
          <BreadCrumbsText color="#44AE9B">3310862</BreadCrumbsText>
        </div>
        <div className="breadCrumbsItem">
          <BreadCrumbsText margin="5px">ORGT:</BreadCrumbsText>
          <BreadCrumbsText color="#F15555">3310862</BreadCrumbsText>
        </div>
      </BreadCrumbsInner>
    </BreadCrumbsWrapper>
  );
};

export default BreadCrumbs;
