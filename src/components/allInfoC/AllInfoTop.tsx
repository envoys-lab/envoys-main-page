import React from 'react'
import { AllInfoImg, AllinfoImgWrap, AllInfoTopTitle, AllInfoTopWrap } from './AllInfoStyledComponents'
import back from '../../assets/images/Back.svg'


function AllInfoTop() {
    return (
        <AllInfoTopWrap>
            <AllinfoImgWrap>
                <AllInfoImg src={back}/>
            </AllinfoImgWrap>

            <AllInfoTopTitle>Общая информация</AllInfoTopTitle>
            <AllInfoTopTitle>Раскрытие информации</AllInfoTopTitle>
        </AllInfoTopWrap>
    )
}

export default AllInfoTop
