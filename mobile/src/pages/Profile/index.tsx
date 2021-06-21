import React, { useEffect, useState } from 'react'
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
import api from '../../services/api'
import { User } from '../../contexts/authContext'
import Button from '../../components/Button'
import { Linking, ToastAndroid } from 'react-native'

type metricsRes = {
  contracts: number
  tasks: number
}

const Profile: React.FC<ScreenProp> = ({ route }) => {
  const ruser = route.params?.user
  const editable = !ruser
  const { user: me, setUser } = useAuth()
  const user: User = ruser ?? me
  const [metrics, setMetrics] =
    useState<(metricsRes & { stars: string }) | null>(null)
  useEffect(() => {
    api.get<metricsRes>(`/users/metrics/${user.id}`).then(({ data: m }) => {
      api.get<User>(`/users/${user.id}`).then(({data: u}) => {
        setMetrics({
          ...m,
          stars:
            user.ratingCount > 0
              ? (user.ratingSum / user.ratingCount).toFixed(0)
              : '0',
        })
        if(editable) setUser(u)
      })
    })
  }, [user])
  const sendRating = () => {
    Linking.canOpenURL('whatsapp://send')
    .then(can => can? 
      Linking.openURL('whatsapp://send?text='+encodeURIComponent(`Olá, gostou do meu trabalho? você pode avaliar usando este link: http://192.168.15.12:3000/rating/${user.id}`)) 
      : ToastAndroid.showWithGravityAndOffset("É necessário baixar o WhatsApp", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 30))
  }
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
          {metrics?.stars ?? '...'}
        </MetrixCard>
        <MetrixCard type="tasks" style={{ marginRight: 10 }}>
          {metrics?.tasks ?? '...'}
        </MetrixCard>
        <MetrixCard type="jobsDone">{metrics?.contracts ?? '...'}</MetrixCard>
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
        {
          editable? <Button style={{marginTop: 24}} onPress={sendRating}>Enviar link de avaliação</Button> : <></>
        }
      </ContactSection>
    </Container>
  )
}

export default Profile
