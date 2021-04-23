import React from 'react';
import {Image, FlatList} from 'react-native';
import {StyledView, PseudoDiv, HexBubble, TextWrapper, Input,  } from './styles';
import {HeadlineLight, CaptionLight} from '../../styles/fonts'
import OrderByBtn from '../../components/OrderByBtn';
import TaskCard, {Props} from '../../components/TaskCard';



const HomePage: React.FC = () => {
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
        </StyledView>
    );
}

export default HomePage;