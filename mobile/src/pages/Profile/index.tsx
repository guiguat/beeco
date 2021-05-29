import React from 'react'
import NavigationHeader from '../../components/NavigationHeader'
import MetrixCard from '../../components/MetrixCard'
import {
  TitleHeavy,
  CaptionLight,
  HeadlineLight,
  BodyLight,
} from '../../styles/fonts'
import theme from '../../styles/theme'
import { Feather } from '@expo/vector-icons'
import {
  Container,
  PicNameNBio,
  StyledImage,
  MetrixSection,
  ContactSection,
  Row,
} from './styles'
import { ScreenProp } from '../../utils/navigation'

const Profile: React.FC<ScreenProp> = ({ route }) => {
  const { editable = false } = route.params
  return (
    <Container>
      <NavigationHeader isEdit={editable}>Perfil</NavigationHeader>
      <PicNameNBio>
        <StyledImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/43298753?v=4',
          }}
        />
        <TitleHeavy style={{ marginTop: 18, marginBottom: 4 }}>
          Guilherme Guatura
        </TitleHeavy>
        <CaptionLight style={{ maxWidth: 290, textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie enim
          sit a, ligula justo sit adipiscing vitae. Interdum dictum lectus sed
          tincidunt turpis scelerisque lobortis vitae commodo.
        </CaptionLight>
      </PicNameNBio>
      <MetrixSection>
        <MetrixCard type="rating" style={{ marginRight: 10 }}>
          4.6
        </MetrixCard>
        <MetrixCard type="tasks" style={{ marginRight: 10 }}>
          300
        </MetrixCard>
        <MetrixCard type="jobsDone">120</MetrixCard>
      </MetrixSection>
      <ContactSection>
        <HeadlineLight>Contato</HeadlineLight>
        <Row>
          <Feather name="mail" size={18} color={theme.colors.lightGrey} />
          <BodyLight color={theme.colors.lightGrey} style={{ marginLeft: 10 }}>
            joseDinossauro@gmail.com
          </BodyLight>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Feather name="phone" size={18} color={theme.colors.lightGrey} />
          <BodyLight color={theme.colors.lightGrey} style={{ marginLeft: 10 }}>
            (19) 999199293
          </BodyLight>
          <Feather
            name="phone"
            size={18}
            color={theme.colors.lightGrey}
            style={{ marginLeft: 10 }}
          />
          <BodyLight color={theme.colors.lightGrey} style={{ marginLeft: 10 }}>
            (19) 999199293
          </BodyLight>
        </Row>
      </ContactSection>
    </Container>
  )
}

export default Profile
