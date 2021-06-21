import React from 'react'
import { Image, TouchableOpacity, RefreshControl } from 'react-native'
import {
  StyledView,
  Row,
  HexBubble,
  TextWrapper,
  Input,
  StyledBackGroundImage,
  StyledBackGroundProfile,
} from './styles'
import { HeadlineLight, CaptionLight, SmallLight } from '../../styles/fonts'
import OrderByBtn from '../../components/OrderByBtn'
import TaskCard, { Task } from '../../components/TaskCard'
import { ScrollView } from 'react-native-gesture-handler'
import themes from '../../styles/theme'
import { ScreenProp } from '../../utils/navigation'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'
import api from '../../services/api'
import { useEffect } from 'react'

type TaskPage = {
  content: Task[]
  pageable: {
    pageNumber: number
    pageSize: number
  }
  totalPages: number
  totalElements: number
  numberOfElements: number
}

const HomePage: React.FC<ScreenProp> = ({ navigation }) => {
  const { user } = useAuth()
  const [refreshing, setRefreshing] = React.useState(false)
  const [taskPage, setTaskPage] = useState<TaskPage | null>(null)
  const filter = {
    page: 0,
    size: 100,
    dir: 'DESC',
  }
  const [search, setSearch] = useState('')
  const fetchPage = (dir?: 'DESC' | 'ASC') => {
    const params: any = { ...filter, dir: dir ?? filter.dir }
    if (search.trim().length > 0) params.s = search
    setRefreshing(true)
    return api.get<TaskPage>('/tasks', { params }).then((res) => {
      setTaskPage(res.data)
      setRefreshing(false)
    })
  }

  useEffect(() => {
    fetchPage()
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: themes.colors.white }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={fetchPage}
          colors={[themes.colors.yellow]}
        />
      }
    >
      <StyledView>
        <HexBubble source={require('../../assets/img/hex_bubble.png')} />
        <Row
          style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <Image source={require('../../assets/img/bee_logo.png')} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(themes.nav.profile, { editable: true })
            }
          >
            <StyledBackGroundProfile
              style={{ width: 45, height: 45, borderRadius: 24 }}
            >
              <Image
                style={{
                  position: 'absolute',
                  width: 45,
                  height: 45,
                  borderRadius: 24,
                }}
                source={{ uri: user?.photo }}
              ></Image>
              <StyledBackGroundImage
                source={require('../../assets/img/rating_star.png')}
                style={{ width: 22, height: 21, marginLeft: 25, marginTop: 25 }}
              >
                <SmallLight>
                  {user?.ratingCount !== 0
                    ? (user!.ratingSum / user!.ratingCount).toFixed(0)
                    : 0}
                </SmallLight>
              </StyledBackGroundImage>
            </StyledBackGroundProfile>
          </TouchableOpacity>
        </Row>
        <TextWrapper>
          <HeadlineLight>Encontre tarefas da nossa colmeia</HeadlineLight>
        </TextWrapper>
        <Input
          placeholder={'Busque por tarefas'}
          onChangeText={setSearch}
          value={search}
          onBlur={() => fetchPage()}
        />
        <Row style={{ marginTop: 0 }}>
          <CaptionLight>Ordenar por:</CaptionLight>
          <OrderByBtn
            onPress={() => {
              fetchPage('ASC')
            }}
          >
            Menor preço
          </OrderByBtn>
          <OrderByBtn
            onPress={() => {
              fetchPage('DESC')
            }}
          >
            Maior preço
          </OrderByBtn>
        </Row>

        {taskPage?.content?.map((task, i) => (
          <TaskCard
            key={i}
            task={task}
            onPress={() => navigation.navigate(themes.nav.task, { task })}
          />
        ))}
      </StyledView>
    </ScrollView>
  )
}

export default HomePage
