import React from 'react'
import Button from '../../components/Button'
import NavigationHeader from '../../components/NavigationHeader'
import {
  HeadlineLight,
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
import { Task } from '../../components/TaskCard'
import { formatDate } from '../../utils/format'

const TaskPage: React.FC<ScreenProp> = ({ navigation, route }) => {
  const task: Task = route.params?.task ?? navigation.goBack()
  return (
    <StyledScrollView showsVerticalScrollIndicator={false}>
      <HexBubble source={require('../../assets/img/hex_bubble.png')} />
      <NavigationHeader isEdit={false}>Tarefa</NavigationHeader>
      <HeadlineLight style={{ marginTop: 25 }}>{task.title}</HeadlineLight>
      <Row style={{ justifyContent: 'space-between', marginTop: 12 }}>
        <BodyHeavy color={themes.colors.lightGrey}>
          {task.minPrice === task.maxPrice
            ? `R$${task.minPrice}`
            : `R$${task.minPrice} - R$${task.maxPrice}`}
        </BodyHeavy>
        <BodyLight color={themes.colors.lightGrey}>
          {formatDate(task.createdAt)}
        </BodyLight>
      </Row>
      <Row style={{ marginTop: 10, justifyContent: 'space-between' }}>
        <Row>
          {task.tags.split(', ').map((tag, i) => (
            <Tag key={i}>
              <SmallLight
                color={themes.colors.darkYellow}
                style={{ lineHeight: 10.5 }}
              >
                {tag}
              </SmallLight>
            </Tag>
          ))}
        </Row>
        <BodyLight color={themes.colors.lightGrey}>
          {task.location ?? 'Remoto'}
        </BodyLight>
      </Row>
      <Description>
        <BodyLight color={themes.colors.lightGrey}>
          {task.description}
        </BodyLight>
      </Description>
      <ContactSection>
        <HeadlineLight>Contato</HeadlineLight>
        <Row style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(themes.nav.profile, { user: task.owner })
            }
          >
            <StyledImage
              source={{
                uri: task.owner.photo,
              }}
            />
          </TouchableOpacity>
          <ContactInfo>
            <BodyHeavy
              style={{ marginBottom: 4 }}
            >{`${task.owner.firstName} ${task.owner.lastName}`}</BodyHeavy>
            <>
              <BodyLight>{task.owner.email}</BodyLight>
              <BodyLight>{task.owner.cellphone}</BodyLight>
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

export default TaskPage
