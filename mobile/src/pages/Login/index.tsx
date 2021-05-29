import React from 'react'
import { Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import FormField from '../../components/FormField'
import { Input } from '../../components/FormField/styles'
import StartupHeader from '../../components/StartupHeader'
import { BodyLight } from '../../styles/fonts'
import themes from '../../styles/theme'
import { Container, Content, LoginForm } from './styles'

const Login: React.FC = ({navigation}) => {
  return (
    <Container>
      <StartupHeader display="LOGIN" />
      <Content>
        <LoginForm>
          <FormField required field="Email">
            <Input autoCompleteType="email" keyboardType="email-address" />
          </FormField>
          <FormField
            required
            field="Senha"
            style={{ marginBottom: 32, marginTop: 18 }}
          >
            <Input secureTextEntry={true} />
          </FormField>
          <Button onPress={() => navigation.navigate(themes.navSnippets.home)}>
            Entrar
          </Button>
        </LoginForm>
        <View style={{ flexDirection: 'row' }}>
          <BodyLight color={themes.colors.lightGrey}>
            Não possui uma conta?{' '}
          </BodyLight>
          <TouchableOpacity
          onPress={() => navigation.navigate(themes.navSnippets.signup)}>
            <BodyLight color={themes.colors.black}>Cadastre-se</BodyLight>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  )
}

export default Login
