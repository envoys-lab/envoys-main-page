import React from "react";
import styled from "styled-components";
import { Flex } from "../Banner/StyledComponents";

export const AllInfoTopWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9px;
`

export const AllInfoImg = styled.img`
    width: 14px;
`

export const AllinfoImgWrap = styled.button`
    padding: 9px 8px 6px 8px;
    border: none;
    background: #fff;
    border-radius: 7px;
    cursor: pointer;
    margin-right: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
` 

export const AllInfoTopTitle = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: rgba(19, 61, 101, 0.7);
    margin-right: auto;
`




export const AllInfoListBlock = styled.div`
    background: #fff;
    border-radius: 10px;
    border: 1px solid #E8E8EA;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
`

export const AllInfoListTitle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #133D65;
    padding: 23px 25px 19px;
    margin: 0;
    background: #F9F9F9;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
` 

export const AllInfoListWrap = styled.div`
    padding: 30px 20px;
`

export const AllInfoListFlex = styled(Flex)`

    @media (max-width: 768px) {
        flex-direction: column;
    }
`



export const AllInfoListIs = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
` 

export const AllInfoListIs2 = styled(AllInfoListIs)`
    margin-left: 20px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`   

export const AllInfoItem = styled.li`
    padding: 9px 20px;
    background: #fff;
    border-radius: 10px;
    &:nth-child(odd){
        background: #F9F9F9;
    }
` 

export const AllInfoItemTitle = styled.h5`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #133D65;
    margin: 0;
    flex: 1;
    margin: 0 5px;
` 

export const AllInfoListIcon = styled.img`
    /* width: 11px; */
    margin-right: 15px;
`
