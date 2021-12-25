import React from 'react'
import { AllInfoImg, AllinfoImgWrap, AllInfoTopTitle, AllInfoTopWrap } from './AllInfoStyledComponents'
import back from '../../assets/images/Back.svg'
import { NavLink } from 'react-router-dom'


function AllInfoTop() {
    return (
        <AllInfoTopWrap>
            <NavLink to='/listing'>
                <AllinfoImgWrap>
                    <AllInfoImg src={back}/>
                </AllinfoImgWrap>
            </NavLink>

            <AllInfoTopTitle>Общая информация</AllInfoTopTitle>
            <AllInfoTopTitle>Раскрытие информации</AllInfoTopTitle>
        </AllInfoTopWrap>
    )
}

export default AllInfoTop
