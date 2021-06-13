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
import useAuth from '../../hooks/useAuth'

const Profile: React.FC<ScreenProp> = ({ route }) => {
  const ruser = route.params?.user
  const editable = !ruser
  const { user: me } = useAuth()
  const user = ruser ?? me
  return (
    <Container>
      <NavigationHeader isEdit={editable}>Perfil</NavigationHeader>
      <PicNameNBio>
        <StyledImage
          source={{
            uri: user?.photo,
          }}
        />
        <TitleHeavy style={{ marginTop: 18, marginBottom: 4 }}>
          {`${user?.firstName} ${user?.lastName}`}
        </TitleHeavy>
        <CaptionLight style={{ maxWidth: 290, textAlign: 'center' }}>
          {user?.description ?? ''}
        </CaptionLight>
      </PicNameNBio>
      <MetrixSection>
        <MetrixCard type="rating" style={{ marginRight: 10 }}>
          {user?.ratingCount !== 0 ? user!.ratingSum / user!.ratingCount : 0}
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
            {user?.email}
          </BodyLight>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Feather name="phone" size={18} color={theme.colors.lightGrey} />
          <BodyLight
            color={theme.colors.lightGrey}
            style={{ marginLeft: 10, marginRight: 18 }}
          >
            {user?.cellphone}
          </BodyLight>
          {user?.phone ? (
            <>
              <Feather
                name="phone"
                size={18}
                color={theme.colors.lightGrey}
                style={{ marginRight: 10 }}
              />
              <BodyLight color={theme.colors.lightGrey}>{user.phone}</BodyLight>
            </>
          ) : (
            <></>
          )}
        </Row>
      </ContactSection>
    </Container>
  )
}

export default Profile
