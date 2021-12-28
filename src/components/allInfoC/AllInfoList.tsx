import React from 'react'
import { Flex } from '../Banner/StyledComponents'
import AllInfoListItem from './AllInfoListItem'
import AllInfoListItem2 from './AllInfoListItem2'
import { AllInfoListTitle, AllInfoListBlock, AllInfoListIs, AllInfoListWrap, AllInfoListIs2, AllInfoListFlex } from './AllInfoStyledComponents'
import useCompany, { Company } from '../../hooks/useCompany';
import { Link } from 'react-router-dom'
import useAdmin from 'hooks/useAdmin'
import Config from 'config'

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const AllInfoList: React.FC<{id: number}> = ({id}) => {
    const company = useCompany(id);
    const editUri = "/admin/add/" + (company ? company.id : "");
    const { isAdmin } = useAdmin();
    return (
        <AllInfoListBlock>
            <AllInfoListTitle>
                {company && company.name}	{company && company.paper} 
                {isAdmin && <Link to={editUri}>Edit</Link>}
            </AllInfoListTitle>

            <AllInfoListWrap>
                <AllInfoListFlex>
                    <AllInfoListIs>
                        <AllInfoListItem name="Ценная бумага" value={company ? company.paper : ""}/>
                        <AllInfoListItem name="Торговый символ" value={company ? company.symbol : ""}/>
                        <AllInfoListItem name="Отрасаль" value={company ? company.branch : ""}/>
                        <AllInfoListItem name="Вид деятельности" value={company ? company.kind : ""}/>
                        <AllInfoListItem name="Дата листинга" value={company ? company.createdAt : ""}/>
                        <AllInfoListItem name="ФИО Руководителя" value={company ? company.owner : ""}/>
                        <AllInfoListItem name="Должность руководителя" value={company ? company.ownerRank : ""}/>
                        <AllInfoListItem name="Адрес" value={company ? company.address : ""}/>
                        <AllInfoListItem name="Телефон" value={company ? company.phone : ""}/>
                        <AllInfoListItem name="Аудитор" value={company ? company.auditor : ""}/>
                        <AllInfoListItem name="Регистратор" value={company ? company.registrator : ""}/>
                        <AllInfoListItem name="Маркет-мейкер" value={company ? company.marketmaker : ""}/>
                    </AllInfoListIs>

                    <AllInfoListIs2>
                        {company && company!.files.split(";").map(item => {
                            const fragments = item.split(".");
                            if(fragments.length !== 3) {
                                return <>Error load file {item}</>;
                            }
                            const name = b64DecodeUnicode(fragments[1]);

                            return <AllInfoListItem2 url={`${Config.api}/companies/${item}`} key={item} name={name} value={""}/>
                        })}
                    </AllInfoListIs2>
                </AllInfoListFlex>

            </AllInfoListWrap>
            

        </AllInfoListBlock>
    )
}

export default AllInfoList
