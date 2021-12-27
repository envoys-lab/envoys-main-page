import React from "react";
import {
  PropocalItem,
  PropocalitemImg,
  PropocalitemText,
  PropocalitemTitle,
  ProposalList,
  ProposalWrap,
} from "./PStyles";
import icon1 from "../../assets/images/fiat-light.png";
import icon2 from "../../assets/images/low-fees-light.png";
import icon3 from "../../assets/images/security-light.png";
import icon4 from "../../assets/images/spot-dark.png";
import { Link } from "react-router-dom";

const Proposal: React.FC = () => {
  const [info, setinfo] = React.useState([
    {
      title: "Торговля стала проще",
      text: "Покупайте, продавайте, управляйте и торгуйте более 150 криптовалютами (включая Bitcoin, BNB и Ethereum). Увеличьте свою прибыль с Envoys Vision",
      img: icon4,
    },
    {
      title: "Удобный процесс торговли",
      text: "Наши комиссии и привлекательная VIP-программа превзошли всех конкурентов. Наслаждайтесь одними из самых низких комиссий за транзакции в криптовалюте.",
      img: icon2,
    },
    {
      title: "Высочайшие стандарты безопасности",
      text: "Наши комплексные меры безопасности защищают ваши данные и активы от всех рисков.",
      img: icon3,
    },
    {
      title: "Минимальные суммы для покупки",
      text: "С Envoys Vision вы можете купить Bitcoin или любую другую криптовалюту на сумму от 15 долларов. Используйте свою дебетовую или кредитную карту. Начните торговлю уже сегодня.",
      img: icon1,
    },
  ]);
  return (
    <ProposalWrap>
      <ProposalList>
        {info.map((item, index) => {
          return (
            // <Link key={index} to='#'>
            <PropocalItem key={index}>
              <PropocalitemImg src={item.img} />
              <PropocalitemTitle>{item.title}</PropocalitemTitle>
              <PropocalitemText>{item.text}</PropocalitemText>
            </PropocalItem>
            // </Link>
          );
        })}
      </ProposalList>
    </ProposalWrap>
  );
};

export default Proposal;
