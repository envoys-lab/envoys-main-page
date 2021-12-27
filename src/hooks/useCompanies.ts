import axios from "axios";
import React from "react";
import Config from "../config";

interface Company {
    id: number
    name: string;
    paper: string;
    lastPrice: number;
    capitalization: number;
    quantity: number;
    sv: string;
}

const useCompanies = (category: string): Company[] => {
    const [companies, setCompanies] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${Config.api}/list/0/${category}`).then(res => {
            setCompanies(res.data);
        })
    }, [])
    return companies;
}

export default useCompanies;