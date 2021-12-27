import React, {FC} from 'react';
import pdfIco from '../../assets/images/sv.svg'
import LisingHeader from "./lisingHeader";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import useCompanies from '../../hooks/useCompanies';

const Wrapper = styled.div`
  max-width: 959px;
  border: 1px solid  #E8E8EA;
  border-radius: 13px;
  background: white;
  margin-bottom: 21px;
`

const Heading = styled.div`
  padding: 23px 0 19px 25px;
  background:  #F9F9F9;
  width: 100%;
  border-radius: 13px 13px 0 0 ;
  margin-bottom: 9px;
`

const HeadingTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  /* Dark clear */

  color: #0F2B46;
`

const BanksWrapper = styled.div`
  width: 100%;
  padding: 0 46px 22px 22px;
  background: white;
  border-radius:0 0 13px 13px;
`
const BankName = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;

  color: #045599;
`

const BankItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 7px 0;
  position: relative;
  &:last-child{
    &:after{
      display: none;
    }
  }
  &:after{
    position: absolute;
    content: '';
    background: #133D65;
    height: 2px;
    border-radius: 4px;
    width: 100%;
    top:45px;
    opacity: 0.05;
    &:last-child{
      background: #000;
    }
  }
`

const PriceItems = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #133D65;
`

const Border = styled.div`
 border: 1px solid  #F9F9F9;
  border-radius: 13px;
`



const Listing : FC = () => {
    const categoryB = useCompanies("b");
    const categoryC = useCompanies("c");
    console.log(categoryC);

    return (
            <>
                <LisingHeader/>
                <Wrapper>
                    <Heading>
                        <HeadingTitle>
                          Категория <span style={{color: '#F48020', marginLeft: '10px'}}> B</span>
                        </HeadingTitle>
                        <Link to="/admin/add/b">Create</Link>
                    </Heading>
                    <BanksWrapper>
                        {
                            categoryB.map((el, idx) =>(
                                    <BankItem>
                                        <BankName to={'/allinfo/' + el.id}>{el.name}</BankName>
                                        <PriceItems>{el.paper}</PriceItems>
                                        <PriceItems>{el.lastPrice}</PriceItems>
                                        <PriceItems>{el.capitalization}</PriceItems>
                                        <PriceItems>{el.quantity}</PriceItems>
                                        <img src={el.sv} alt=""/>
                                    </BankItem>
                                )
                            )
                        }
                    </BanksWrapper>

                </Wrapper>
                <Wrapper>
                    <Heading>
                        <HeadingTitle>Категория <span style={{color: '#F48020', marginLeft: '10px'}}>C</span></HeadingTitle>
                        <Link to="/admin/add/c">Create</Link>
                    </Heading>
                    <BanksWrapper>
                        {
                            categoryC.map((el, idx) =>(
                                    <BankItem>
                                        <BankName to={'/allinfo/' + el.id}>{el.name}</BankName>
                                        <PriceItems>{el.paper}</PriceItems>
                                        <PriceItems>{el.lastPrice}</PriceItems>
                                        <PriceItems>{el.capitalization}</PriceItems>
                                        <PriceItems>{el.quantity}</PriceItems>
                                        <img src={el.sv} alt=""/>
                                    </BankItem>
                                )
                            )
                        }
                    </BanksWrapper>

                </Wrapper>
            </>
    );
};

export default Listing;