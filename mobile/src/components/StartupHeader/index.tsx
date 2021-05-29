import React from 'react'
import Button from '../../components/Button'
import themes from '../../styles/theme'
import { Feather } from '@expo/vector-icons'
import { DisplayHeavy, TitleLight } from '../../styles/fonts'
import { Bee, Container, Content, HexBubble, TextWrapper } from './styles'
import { useNavigation } from '@react-navigation/native';

const StartupHeader: React.FC<{
  display: 'LOGIN' | 'CADASTRO'
  backRoute?: string
}> = ({ display }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <HexBubble source={require('../../assets/img/hex_bubble.png')} />
      <Bee source={require('../../assets/img/bee.png')} />
      <Content>
        <TextWrapper>
          <TitleLight>Continue com seu</TitleLight>
          <DisplayHeavy>{display}</DisplayHeavy>
        </TextWrapper>
        <Button
          isOutline
          style={{
            borderRadius: 20,
            width: 50,
            marginBottom: 8,
          }}
          content={
            <Feather name="arrow-left" size={16} color={themes.colors.grey} />
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Content>
    </Container>
  )
}

export default StartupHeader
