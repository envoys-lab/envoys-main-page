import React from 'react';
import { BannerBtn, BannerBtnOrange, BannerFlex, BannerIcon, BannerImg, BannerImgWrap, BannerLink, BannerLinkPos, BannerText, BannertextsWrap, BannerTitle, BannerTitleOrange, BannerWrap, Container, Flex } from './StyledComponents';
import sub from '../../assets/images/play-icon.png';
import bg from '../../assets/images/banner.svg';



const Banner:React.FC = () => {

    return (
        <BannerWrap>
            <Container>
                <Flex direction='column' align='center' justify='center' height='100%'>
                    <BannerFlex justify='space-between' align='center'>
                        <BannertextsWrap>
                            <BannerTitle>Безопасность</BannerTitle>
                            <BannerTitleOrange>Скорость</BannerTitleOrange>
                            <BannerTitle>Ликвидность</BannerTitle>
                            <BannerText>Envoys Vision - это доступность к финансовым рынкам, безопасность инв естирования в стартапы, высокая доходность для поставщиков ликвидности!</BannerText>
                            <Flex align='center' height='0' margin='0'>
                                <BannerBtnOrange>Start Stacking</BannerBtnOrange>
                                <BannerBtn>More info</BannerBtn>
                            </Flex>
            
                            <BannerLinkPos align='center'>
                                <BannerIcon src={sub}/>
                                <BannerLink href='#'>How it works?</BannerLink>
                            </BannerLinkPos>

                        </BannertextsWrap>
                        
                        <BannerImgWrap>
                            <BannerImg src={bg} alt="" />
                        </BannerImgWrap>
                    </BannerFlex>
        
                </Flex>
            </Container>
        </BannerWrap>
    )
}

export default Banner
