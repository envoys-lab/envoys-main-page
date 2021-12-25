import React from 'react'
import AllInfoList from '../../components/allInfoC/AllInfoList'
import AllInfoTop from '../../components/allInfoC/AllInfoTop'
import { Container } from './AllInfoStyle'
import { AllInfoWrap } from './AllInfoStyle'

const AllInfo:React.FC = () => {
    return (
        <AllInfoWrap>
            <Container>
                <AllInfoTop/>
                <AllInfoList/>
            </Container>
        </AllInfoWrap>
    )
}

export default AllInfo
