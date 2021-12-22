import styled from "styled-components";

interface Props {
  children?: React.ReactChild | React.ReactNode;
}

export const NavWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px 60px;
  .logo {
    width: 220px;
    height: 30px;
  }
`;
