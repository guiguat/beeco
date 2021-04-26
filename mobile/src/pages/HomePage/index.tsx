import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { StyledView, Row, HexBubble, TextWrapper, Input, StyledBackGroundImage } from './styles'
import { HeadlineLight, CaptionLight, SmallLight } from '../../styles/fonts'
import OrderByBtn from '../../components/OrderByBtn'
import TaskCard, { taskCardInfo } from '../../components/TaskCard'
import { FlatList } from 'react-native-gesture-handler'

const HomePage: React.FC = () => {
  const cardsArray: taskCardInfo[] = [
    {
      title: 'Fazer uma logo para mim',
      minPrice: 12.98,
      maxPrice: 13.89,
      date: '22/01/21',
      city: 'Campinas',
      description:
        'Enim cupidatat occaecat ut labore qui id tempor id proident sit amet. Excepteur mollit qui pariatur irure esse enim cillum. Quis aliqua esse aute reprehenderit. Aliqua duis officia labore duis ea.',
      tags: ['Design', 'LogoDesign', 'Creativity'],
    },
    {
      title: 'Fazer uma logo para mim',
      minPrice: 12.98,
      maxPrice: 13.89,
      date: '22/01/21',
      city: 'Campinas',
      description:
        'Enim cupidatat occaecat ut labore qui id tempor id proident sit amet. Excepteur mollit qui pariatur irure esse enim cillum. Quis aliqua esse aute reprehenderit. Aliqua duis officia labore duis ea.',
      tags: ['Design', 'LogoDesign', 'Creativity'],
    },
    {
      title: 'Fazer uma logo para mim',
      minPrice: 12.98,
      maxPrice: 13.89,
      date: '22/01/21',
      city: 'Campinas',
      description:
        'Enim cupidatat occaecat ut labore qui id tempor id proident sit amet. Excepteur mollit qui pariatur irure esse enim cillum. Quis aliqua esse aute reprehenderit. Aliqua duis officia labore duis ea.',
      tags: ['Design', 'LogoDesign', 'Creativity'],
    },
    {
      title: 'Fazer uma logo para mim',
      minPrice: 12.98,
      maxPrice: 13.89,
      date: '22/01/21',
      city: 'Campinas',
      description:
        'Enim cupidatat occaecat ut labore qui id tempor id proident sit amet. Excepteur mollit qui pariatur irure esse enim cillum. Quis aliqua esse aute reprehenderit. Aliqua duis officia labore duis ea.',
      tags: ['Design', 'LogoDesign', 'Creativity'],
    },
  ]
  return (
    <StyledView>
      <HexBubble source={require('../../assets/img/hex_bubble.png')} />
      <Row style={{justifyContent: "space-between", alignItems:"flex-start"}}>
        <Image source={require('../../assets/img/bee_logo.png')} />
        <TouchableOpacity>
          <StyledBackGroundImage source = {require('../../assets/img/hard_code_profile_pic.png')} 
          style={{  width: 45, height: 45}}>
            <StyledBackGroundImage source={require('../../assets/img/rating_star.png')} 
            style={{  width: 22, height: 21, marginLeft: 25, marginTop: 25}}> 
              <SmallLight>5</SmallLight>
            </StyledBackGroundImage>  
          </StyledBackGroundImage>
        </TouchableOpacity>
        
      </Row>
      <TextWrapper>
        <HeadlineLight>Encontre tarefas da nossa colmeia</HeadlineLight>
      </TextWrapper>
      <Input placeholder={'Busque por tarefas'} />
      <Row style={{ marginTop: 0 }}>
        <CaptionLight>Ordenar por:</CaptionLight>
        <OrderByBtn>Menor preço</OrderByBtn>
        <OrderByBtn>Maior preço</OrderByBtn>
      </Row>
      <FlatList
        data={cardsArray}
        renderItem={({ item }: { item: taskCardInfo }) => (
          <TaskCard info={item} />
        )}
        keyExtractor={(item: taskCardInfo, index: number) => index.toString()}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </StyledView>
  )
}

export default HomePage
