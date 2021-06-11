import React, { useCallback, useContext, useState } from 'react'
import StartupHeader from '../../components/StartupHeader'
import { Input } from '../../components/FormField/styles'
import {
  Container,
  FormView,
  FormField,
  FormRow,
  InputProfilePhoto,
  Content,
  PhotoContainer,
  Photo,
} from './styles'
import Button from '../../components/Button'
import { Feather } from '@expo/vector-icons'
import themes from '../../styles/theme'
import AddFotoModal from '../../components/AddFotoModal'
import { ScrollView } from 'react-native-gesture-handler'
import { ScreenProp } from '../../utils/navigation'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import { Alert } from 'react-native'
export type FieldError = { field: string; message: string }
const Signup: React.FC<ScreenProp> = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [photo, setPhoto] = useState(
    'https://fopiess.org.br/wp-content/uploads/freshizer/0b1f361e677313b6aef1865d15def4f9_default1-600-600-c-90.jpg'
  )
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<any>({})
  const { signIn } = useAuth()
  const closeModal = useCallback(() => {
    setModalVisible(!modalVisible)
  }, [modalVisible])
  async function singUp() {
    const data: any = {
      firstName,
      lastName,
      photo,
      email,
      password,
      cellphone,
    }
    if (phone.length > 0) data.phone = phone
    try {
      delete api.defaults.headers.common['Authorization']
      const res = await api.post('/users', data)
      if (res) await signIn(email, password)
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
          <StartupHeader display="CADASTRO" />
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
              <Input autoCompleteType="name" onChangeText={setFirstName} />
            </FormField>
            <FormField
              required
              field="Sobrenome"
              errorMessage={errors.lastName}
            >
              <Input autoCompleteType="name" onChangeText={setLastName} />
            </FormField>
            <FormField required field="Email" errorMessage={errors.email}>
              <Input
                autoCompleteType="email"
                keyboardType="email-address"
                onChangeText={setEmail}
              />
            </FormField>
            <FormField required field="Senha" errorMessage={errors.password}>
              <Input
                autoCompleteType="password"
                secureTextEntry={true}
                onChangeText={setPassword}
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
                />
              </FormField>
            </FormRow>
            <Button style={{ marginBottom: 20 }} onPress={singUp}>
              Salvar
            </Button>
          </FormView>
        </Content>
      </ScrollView>
    </Container>
  )
}

export default Signup
