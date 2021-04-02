import React from 'react'
import { SubheaderLight } from '../../styles/fonts'
import { Container } from './style'
import { Image } from 'react-native'

const StartupPage: React.FC = () => {
  return (
    <Container>
      <Image source={require('../../assets/img/bee.png')}></Image>
      <SubheaderLight>hello world</SubheaderLight>
    </Container>
  )
}

export default StartupPage
