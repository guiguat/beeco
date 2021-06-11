import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import FormField from '../../components/FormField'
import { Input } from '../../components/FormField/styles'
import StartupHeader from '../../components/StartupHeader'
import useAuth from '../../hooks/useAuth'
import { BodyLight } from '../../styles/fonts'
import themes from '../../styles/theme'
import { ScreenProp } from '../../utils/navigation'
import { Container, Content, LoginForm } from './styles'

const Login: React.FC<ScreenProp> = ({ navigation }) => {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  return (
    <Container>
      <StartupHeader display="LOGIN" />
      <Content>
        <LoginForm>
          <FormField required field="Email">
            <Input
              autoCompleteType="email"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </FormField>
          <FormField
            required
            field="Senha"
            style={{ marginBottom: 32, marginTop: 18 }}
          >
            <Input secureTextEntry={true} onChangeText={setPwd} />
          </FormField>
          <Button onPress={async () => await signIn(email, pwd)}>Entrar</Button>
        </LoginForm>
        <View style={{ flexDirection: 'row' }}>
          <BodyLight color={themes.colors.lightGrey}>
            Não possui uma conta?{' '}
          </BodyLight>
          <TouchableOpacity
            onPress={() => navigation.navigate(themes.nav.signup)}
          >
            <BodyLight color={themes.colors.black}>Cadastre-se</BodyLight>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  )
}

export default Login
