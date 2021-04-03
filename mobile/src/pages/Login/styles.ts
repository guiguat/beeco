import styled from '../../styles/styled-components'

export const Container = styled.SafeAreaView`
  padding: ${(props) => props.theme.padding};
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`
export const Content = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 36px;
`

export const LoginForm = styled.KeyboardAvoidingView`
  align-items: center;
  width: 100%;
  justify-content: center;
`
