import styled from "styled-components";
interface Props {
  children?: React.ReactChild | React.ReactNode;
  color?: string;
  margin?: string;
}
export const BreadCrumbsWrapper = styled.div<Props>`
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  @media (max-width: 560px) {
    padding: 10px 15px;
  }
`;

export const BreadCrumbsInner = styled.div<Props>`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  .breadCrumbsItem {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const BreadCrumbsText = styled.span<Props>`
  text-transform: uppercase;
  color: ${(props) => props.color || "#133D65"};
  display: inline-block;
  margin-right: ${(props) => props.margin || "0"};
  @media (max-width: 1040px) {
    font-size: 14px;
  }
  @media (max-width: 860px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (max-width: 380px) {
    font-size: 8px;
  }
`;
