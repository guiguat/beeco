import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import Button from '../../components/Button'
import NavigationHeader from '../../components/NavigationHeader'
import {
  HeadlineLight,
  TitleLight,
  BodyLight,
  BodyHeavy,
  SmallLight,
} from '../../styles/fonts'
import {
  HexBubble,
  Row,
  Tag,
  Description,
  ContactSection,
  ContactInfo,
  StyledImage,
  StyledScrollView,
} from './styles'
import themes from '../../styles/theme'
import { TouchableOpacity } from 'react-native'
import { ScreenProp } from '../../utils/navigation'

const Task: React.FC<ScreenProp> = ({ navigation }) => {
  const tags = ['Design', 'LogoDesign', 'Creativity']
  return (
    <StyledScrollView showsVerticalScrollIndicator={false}>
      <HexBubble source={require('../../assets/img/hex_bubble.png')} />
      <NavigationHeader isEdit={false}>Tarefa</NavigationHeader>
      <HeadlineLight style={{ marginTop: 25 }}>
        Fazer uma logo para mim
      </HeadlineLight>
      <Row style={{ justifyContent: 'space-between', marginTop: 12 }}>
        <BodyHeavy color={themes.colors.lightGrey}>R$ 80,00 - 120,00</BodyHeavy>
        <BodyLight color={themes.colors.lightGrey}>26/02/2021</BodyLight>
      </Row>
      <Row style={{ marginTop: 10, justifyContent: 'space-between' }}>
        <Row>
          {tags.map((value, index) =>
            value ? (
              <Tag key={index}>
                <SmallLight
                  color={themes.colors.darkYellow}
                  style={{ lineHeight: 10.5 }}
                >
                  {value}
                </SmallLight>
              </Tag>
            ) : null
          )}
        </Row>
        <BodyLight color={themes.colors.lightGrey}>Campinas - SP</BodyLight>
      </Row>

      <Description>
        <BodyLight color={themes.colors.lightGrey}>
          Ad eu nisi minim non nisi enim nostrud incididunt ad proident
          consectetur exercitation eiusmod. Ex sunt nisi officia esse. Nisi
          officia et irure in deserunt qui aliquip voluptate. Consequat pariatur
          dolor ut quis enim consectetur cillum velit ut est tempor sit.Ad eu
          nisi minim non nisi enim nostrud incididunt ad proident consectetur
          exercitation eiusmod. Ex sunt nisi officia esse. Nisi officia et irure
          in deserunt qui aliquip voluptate. Consequat pariatur dolor ut quis
          enim consectetur cillum velit ut est tempor sit.
        </BodyLight>
      </Description>
      <ContactSection>
        <HeadlineLight>Contato</HeadlineLight>
        <Row style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(themes.nav.profile)}
          >
            <StyledImage
              source={{
                uri: 'https://avatars.githubusercontent.com/u/67172695?v=4',
              }}
            />
          </TouchableOpacity>
          <ContactInfo>
            <BodyHeavy style={{ marginBottom: 4 }}>Iuri Salles</BodyHeavy>
            <>
              <BodyLight>joseDinossauro@gmail.com</BodyLight>
              <BodyLight>(19)99999-0991</BodyLight>
            </>
          </ContactInfo>
        </Row>
        <Button
          style={{
            backgroundColor: themes.colors.green,
            borderColor: themes.colors.green,
            marginTop: 20,
          }}
        >
          Ir para WhatsApp
        </Button>
        <Button style={{ marginTop: 20, marginBottom: 40 }}>
          Ligar no telefone
        </Button>
      </ContactSection>
    </StyledScrollView>
  )
}

export default Task
