import React from 'react'
import { Flex } from '../Banner/StyledComponents'
import { AllInfoItem, AllInfoItemTitle, AllInfoListIcon } from './AllInfoStyledComponents'
import icon from '../../assets/images/save.svg'

type Props = {
    name: string
    value: string
}

const AllInfoListItem:React.FC<Props> = (props) => {

    return (
        <AllInfoItem>
            <Flex justify='start'>
                <AllInfoItemTitle>{props.name}</AllInfoItemTitle>
                <AllInfoItemTitle>{props.value}</AllInfoItemTitle>
            </Flex>
        </AllInfoItem>
    )
}

export default AllInfoListItem
