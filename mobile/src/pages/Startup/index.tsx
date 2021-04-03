import React from 'react'
import { Container, HexBubble, WellcomeMessage } from './styles'
import { Image } from 'react-native'
import Button from '../../components/Button'

const StartupPage: React.FC = () => {
  return (
    <Container>
      <HexBubble
        source={require('../../assets/img/hex_bubble.png')}
      ></HexBubble>
      <Image source={require('../../assets/img/bee.png')} />
      <WellcomeMessage>
        Bem vindo(a), {'\n'} como deseja prosseguir?
      </WellcomeMessage>
      <Button isOutline size={{ width: '193px' }} style={{ marginBottom: 28 }}>
        Cadastrar
      </Button>
      <Button size={{ width: '193px' }}>Login</Button>
    </Container>
  )
}

export default StartupPage
