import axios from "axios";
import React from "react";
import Config from "../config";

export interface Company {
    id: number;
    name: string;
    paper: string;
    lastPrice: number;
    capitalization: number;
    quantity: number;
    sv: string;
    category: string;
    marketmaker: string;
    registrator: string;
    auditor: string;
    phone: string;
    address: string;
    ownerRank: string;
    owner: string;
    kind: string;
    branch: string;
    symbol: string;
    files: string;
    
    createdAt: string;
    updatedAt: string;
}

const useCompany = (id: number): Company | undefined => {
    const [company, setCompany] = React.useState(undefined);
    

    React.useEffect(() => {
        if(!id) return;
        axios.get(`${Config.api}/get/${id}`).then(res => {
            if(res.status == 200) {
                console.log(res.data);
                setCompany(res.data);
            }
        })
    }, [])
    return company;
}

export default useCompany;