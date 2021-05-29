import React, { useState } from 'react'
import StartupHeader from '../../components/StartupHeader'
import { Input } from '../../components/FormField/styles'
import {
  Container,
  FormView,
  FormField,
  FormRow,
  InputProfilePhoto,
  Content,
} from './styles'
import Button from '../../components/Button'
import { Feather } from '@expo/vector-icons'
import themes from '../../styles/theme'
import AddFotoModal from '../../components/AddFotoModal'
import { ScrollView } from 'react-native-gesture-handler'

const Signup: React.FC = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container>
      <AddFotoModal
        statusBarTranslucent={true}
        visible={modalVisible}
        onResult={() => setModalVisible(!modalVisible)}
        onRequestClose={() => setModalVisible(!modalVisible)}
      />
      <ScrollView>
        <Content>
          <StartupHeader display="CADASTRO" />
          <FormView>
            <InputProfilePhoto onPress={() => setModalVisible(true)}>
              <Feather name="plus" size={24} color={themes.colors.grey} />
            </InputProfilePhoto>
            <FormField required field="Nome">
              <Input autoCompleteType="name" />
            </FormField>
            <FormField required field="Email">
              <Input autoCompleteType="email" keyboardType="email-address" />
            </FormField>
            <FormField required field="Senha">
              <Input autoCompleteType="password" secureTextEntry={true} />
            </FormField>
            <FormRow>
              <FormField required field="Celular">
                <Input autoCompleteType="tel" keyboardType="phone-pad" />
              </FormField>
              <FormField field="Telefone" style={{ marginLeft: 20 }}>
                <Input autoCompleteType="tel" keyboardType="phone-pad" />
              </FormField>
            </FormRow>
            <Button
              style={{ marginBottom: 20 }}
              onPress={() => navigation.navigate(themes.nav.home)}
            >
              Salvar
            </Button>
          </FormView>
        </Content>
      </ScrollView>
    </Container>
  )
}

export default Signup
