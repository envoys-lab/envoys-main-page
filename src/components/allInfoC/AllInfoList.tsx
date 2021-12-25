import React from 'react'
import { Flex } from '../Banner/StyledComponents'
import AllInfoListItem from './AllInfoListItem'
import AllInfoListItem2 from './AllInfoListItem2'
import { AllInfoListTitle, AllInfoListBlock, AllInfoListIs, AllInfoListWrap, AllInfoListIs2, AllInfoListFlex } from './AllInfoStyledComponents'

function AllInfoList() {
    const [info, setInfo] = React.useState([
        ['Ценная бумага','Акция простая'],
        ['Торговые символы', 'MAIR'],
        ['Отрасль', 'Воздушный транспорт'],
        ['Вид деятельности', 'Наземное аэропортовое обеспечение воздушных судов и обслуживание пассажиров и багажа'],
        ['Дата прохождения листинга', '2008-07-22 00:00:00'],
        ['ФИО руководителя', 'Шаршеев Бакыт Октябрович'],
        ['Должность руководителя', 'Председатель Правления'],
        ['Адрес', '720062, г.Бишкек, аэропорт "Манас"'],
        ['Телефон / Факс', '69 30 17, 69 31 09'],
        ['Аудитор', 'ЗАО "В. Якобс-Аудит"'],
        ['Регистратор', 'ОсОО "Реестродержатель Медина"'],
        ['Маркет-мейкер', 'Нет'],
    ])

    const [info2, setInfo2] = React.useState([
        ['Бухгалтерский Баланс', ''],
        ['Листинговый проспект', 'Архив'],
        ['Отчет о финансовых результатах', 'Архив'],
        ['Отчет о движении денежных средств', 'Архив'],
        ['Отчет об изменениях в капитале', 'Архив'],
        ['Аудиторское заключение', 'Архив'],
        ['Кодекс корпоративного управления', 'Архив'],
    ])


    return (
        <AllInfoListBlock>
            <AllInfoListTitle>ОАО Оптима Банк	Акция простая</AllInfoListTitle>

            <AllInfoListWrap>
                <AllInfoListFlex>
                    <AllInfoListIs>
                        {info.map((item, index) => {
                            return <AllInfoListItem key={index} name={item[0]} value={item[1]}/>
                        })}
                    </AllInfoListIs>

                    <AllInfoListIs2>
                        {info2.map((item, index) => {
                            return <AllInfoListItem2 key={index} name={item[0]} value={item[1]}/>
                        })}
                    </AllInfoListIs2>
                </AllInfoListFlex>

            </AllInfoListWrap>
            

        </AllInfoListBlock>
    )
}

export default AllInfoList
