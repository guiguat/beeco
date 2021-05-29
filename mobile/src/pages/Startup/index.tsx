import React from 'react'
import { Container, HexBubble, WelcomeMessage } from './styles'
import { Image } from 'react-native'
import themes from '../../styles/theme'
import Button from '../../components/Button'

const StartupPage: React.FC = ({ navigation }) => {
  return (
    <Container>
      <HexBubble
        source={require('../../assets/img/hex_bubble.png')}
      ></HexBubble>
      <Image source={require('../../assets/img/bee.png')} />
      <WelcomeMessage>
        Bem vindo(a), {'\n'} como deseja prosseguir?
      </WelcomeMessage>
      <Button
        isOutline
        size={{ width: '193px' }}
        style={{ marginBottom: 28 }}
        onPress={() => navigation.navigate(themes.nav.signup)}
      >
        Cadastrar
      </Button>
      <Button
        size={{ width: '193px' }}
        onPress={() => navigation.navigate(themes.nav.login)}
      >
        Login
      </Button>
    </Container>
  )
}

export default StartupPage
