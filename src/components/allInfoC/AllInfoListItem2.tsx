import React from 'react'
import { Flex } from '../Banner/StyledComponents'
import { AllInfoItem, AllInfoItemTitle, AllInfoListIcon } from './AllInfoStyledComponents'
import icon from '../../assets/images/save.svg'

type Props = {
    name: string
    value: string
}

const AllInfoListItem2:React.FC<Props> = (props) => {

    return (
        <AllInfoItem>
            <Flex justify='space-between'>
                <Flex>
                    <AllInfoListIcon src={icon}/>
                    <AllInfoItemTitle>{props.name}</AllInfoItemTitle>
                </Flex>
                <AllInfoItemTitle>{props.value}</AllInfoItemTitle>
            </Flex>
        </AllInfoItem>
    )
}

export default AllInfoListItem2
