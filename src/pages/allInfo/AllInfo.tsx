import React from 'react'
import { useParams } from 'react-router'
import AllInfoList from '../../components/allInfoC/AllInfoList'
import AllInfoTop from '../../components/allInfoC/AllInfoTop'

const AllInfo:React.FC = () => {
    const params = useParams();
    const id = parseInt(params.id!);

    return (
        <>
            <AllInfoTop/>
            <AllInfoList id={id}/>
        </>
    )
}

export default AllInfo
