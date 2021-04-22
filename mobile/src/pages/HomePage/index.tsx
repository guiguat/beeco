import React from 'react';
import {Image} from 'react-native';
import {StyledView, PseudoDiv, HexBubble, TextWrapper, Input,  } from './styles';
import {HeadlineLight, CaptionLight} from '../../styles/fonts'
import OrderByBtn from '../../components/OrderByBtn';
import TaskCard from '../../components/TaskCard';


const HomePageHeader: React.FC = () => {
    return(
        <StyledView>
            <HexBubble source={require('../../assets/img/hex_bubble.png')}/>
            <PseudoDiv>
                <Image source={require('../../assets/img/bee_logo.png')}/>
            </PseudoDiv>
            <TextWrapper>
                <HeadlineLight>Encontre tarefas da nossa colmeia</HeadlineLight>
            </TextWrapper>
            <Input placeholder={"Busque por tarefas"}/>
            <TextWrapper>
                <CaptionLight>Ordenar por:</CaptionLight>
                <OrderByBtn>Menor preço</OrderByBtn>
                <OrderByBtn>Maior preço</OrderByBtn>
            </TextWrapper>
            <TaskCard info={{title: "Fazer uma logo para mim", minPrice: 12.98, maxPrice: 13.89, date: "22/01/21", city: "Campinas", description:"Enim cupidatat occaecat ut labore qui id tempor id proident sit amet. Excepteur mollit qui pariatur irure esse enim cillum. Quis aliqua esse aute reprehenderit. Aliqua duis officia labore duis ea.", tags:["Design", "LogoDesign", "Creativity"]}}/>      
            <TaskCard info={{title: "Fazer uma logo para mim", minPrice: 12.98, maxPrice: 13.89, date: "22/01/21", city: "Campinas", description:"Enim cupidatat occaecat ut labore qui id tempor id proident sit amet. Excepteur mollit qui pariatur irure esse enim cillum. Quis aliqua esse aute reprehenderit. Aliqua duis officia labore duis ea.", tags:["Design", "LogoDesign", "Creativity"]}}/>      
        </StyledView>
    );
}

export default HomePageHeader;