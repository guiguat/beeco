import React, { useState } from 'react'
import { Input } from '../../components/FormField/styles'
import {
  Container,
  FormView,
  FormField,
  FormRow,
  InputProfilePhoto,
  Content,
  HexBubble,
} from './styles'
import Button from '../../components/Button'
import { Feather } from '@expo/vector-icons'
import themes from '../../styles/theme'
import AddFotoModal from '../../components/AddFotoModal'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileHeader from '../../components/ProfileHeader'

const EditProfile: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container>
      <ProfileHeader isEdit={true} />
      <HexBubble source={require('../../assets/img/hex_bubble.png')} />
      <AddFotoModal
        statusBarTranslucent={true}
        visible={modalVisible}
        onResult={() => setModalVisible(!modalVisible)}
        onRequestClose={() => setModalVisible(!modalVisible)}
      />
      <ScrollView>
        <Content>
          <FormView>
            <InputProfilePhoto
              onPress={() => setModalVisible(true)}
              style={{ opacity: 75 }}
            >
              <Feather name="plus" size={24} color={themes.colors.grey} />
            </InputProfilePhoto>
            <FormField required field="Nome">
              <Input autoCompleteType="name" />
            </FormField>
            <FormField required field="Email">
              <Input autoCompleteType="email" keyboardType="email-address" />
            </FormField>
            <FormRow>
              <FormField required field="Celular">
                <Input autoCompleteType="tel" keyboardType="phone-pad" />
              </FormField>
              <FormField field="Telefone" style={{ marginLeft: 20 }}>
                <Input autoCompleteType="tel" keyboardType="phone-pad" />
              </FormField>
            </FormRow>
            <Button style={{ marginBottom: 20 }}>Salvar</Button>
          </FormView>
        </Content>
      </ScrollView>
    </Container>
  )
}

export default EditProfile
