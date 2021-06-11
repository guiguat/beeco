import React, { useCallback, useState } from 'react'
import { Input } from '../../components/FormField/styles'
import {
  Container,
  FormView,
  FormField,
  FormRow,
  Content,
  HexBubble,
} from './styles'
import Button from '../../components/Button'
import { Feather } from '@expo/vector-icons'
import themes from '../../styles/theme'
import AddFotoModal from '../../components/AddFotoModal'
import { ScrollView } from 'react-native-gesture-handler'
import NavigationHeader from '../../components/NavigationHeader'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import { Alert, ToastAndroid } from 'react-native'
import { FieldError } from '../Signup'
import { InputProfilePhoto, Photo, PhotoContainer } from '../Signup/styles'

const EditProfile: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { user, setUser } = useAuth()
  const [photo, setPhoto] = useState(user?.photo ?? '')
  const [firstName, setFirstName] = useState(user?.firstName ?? '')
  const [lastName, setLastName] = useState(user?.lastName ?? '')
  const [description, setDescription] = useState(user?.description ?? '')
  const [email, setEmail] = useState(user?.email ?? '')
  const [cellphone, setCellphone] = useState(user?.cellphone ?? '')
  const [phone, setPhone] = useState(user?.phone ?? '')
  const [errors, setErrors] = useState<any>({})

  const closeModal = useCallback(() => {
    setModalVisible(!modalVisible)
  }, [modalVisible])

  async function edit() {
    let data: any = {
      firstName,
      lastName,
      photo,
      email,
      description,
      cellphone,
      phone,
    }
    data = Object.keys(data)
      .filter((k) => data[k]?.trim().length > 0 || data[k])
      .reduce((a, k) => ({ ...a, [k]: data[k] }), {})

    try {
      const { data: res } = await api.patch('/users', data)
      setUser(res)
      ToastAndroid.showWithGravityAndOffset(
        'Informações alteradas com sucesso',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        20
      )
    } catch (err) {
      if (!err.response?.data) Alert.alert(err.toString())
      setErrors(
        err.response.data.fields?.reduce((p: any, f: FieldError) => {
          p[f.field] = f.message
          return p
        }, {})
      )
    }
  }
  return (
    <Container>
      <NavigationHeader isEdit={false}>Alterar Perfil</NavigationHeader>
      <HexBubble source={require('../../assets/img/hex_bubble.png')} />
      <AddFotoModal
        errorMessage={errors.photo}
        statusBarTranslucent={true}
        visible={modalVisible}
        onResult={closeModal}
        onChange={useCallback((t) => setPhoto(t), [])}
        onRequestClose={closeModal}
      />
      <ScrollView>
        <Content>
          <FormView>
            <PhotoContainer photo={photo}>
              <Photo resizeMode="contain" source={{ uri: photo }} />
              <InputProfilePhoto
                onPress={() => setModalVisible(true)}
                hasError={errors.photo}
              >
                <Feather
                  name="plus"
                  size={24}
                  color={
                    photo.trim().length > 0
                      ? themes.colors.white
                      : themes.colors.grey
                  }
                />
              </InputProfilePhoto>
            </PhotoContainer>
            <FormField required field="Nome" errorMessage={errors.firstName}>
              <Input
                autoCompleteType="name"
                onChangeText={setFirstName}
                value={firstName}
              />
            </FormField>
            <FormField
              required
              field="Sobrenome"
              errorMessage={errors.lastName}
            >
              <Input
                autoCompleteType="name"
                onChangeText={setLastName}
                value={lastName}
              />
            </FormField>
            <FormField
              required
              field="Sobre mim"
              errorMessage={errors.description}
            >
              <Input
                multiline={true}
                maxLength={140}
                onChangeText={setDescription}
                value={description}
              />
            </FormField>
            <FormField required field="Email" errorMessage={errors.email}>
              <Input
                autoCompleteType="email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </FormField>
            <FormRow>
              <FormField
                required
                field="Celular"
                errorMessage={errors.cellphone}
              >
                <Input
                  autoCompleteType="tel"
                  keyboardType="phone-pad"
                  onChangeText={setCellphone}
                  value={cellphone}
                />
              </FormField>
              <FormField
                field="Telefone"
                style={{ marginLeft: 20 }}
                errorMessage={errors.phone}
              >
                <Input
                  autoCompleteType="tel"
                  keyboardType="phone-pad"
                  onChangeText={setPhone}
                  value={phone}
                />
              </FormField>
            </FormRow>
            <Button style={{ marginBottom: 20 }} onPress={edit}>
              Alterar
            </Button>
          </FormView>
        </Content>
      </ScrollView>
    </Container>
  )
}

export default EditProfile
