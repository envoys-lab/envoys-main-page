import styled from "styled-components";

export const ProposalWrap = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 15px;
  padding-bottom: 20px; 
`

export const ProposalList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);

    a{
        text-decoration: none;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
  }
  @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
        text-align:center;
  }
`

export const PropocalItem = styled.li`
    flex: 1;
    padding: 10px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgb(0 0 0 / 6%); 
`

export const PropocalitemImg = styled.img`
    width: 70px;
    margin: 0 auto;
`

export const PropocalitemTitle = styled.h3`
  font-size: 16px;
  font-style: normal;
font-weight: 500;
  margin: 24px 0 10px;
  color: #0f2b46;
  
`

export const PropocalitemText = styled.p`
  font-size: 14px;
  margin: 0;
color: #0f2b46;
`
