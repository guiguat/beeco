import styled from '../../styles/styled-components'

export const FormFieldView = styled.View`
  width: 100%;
`

export const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.lightest};
  border: 1px solid ${(props) => props.theme.colors.lighterGrey};
  color: ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 12px;
  margin-top: 4px;
  font-family: 'Archivo_400Regular';
  font-size: 12px;
  width: 100%;
  line-height: 16px;
`

export const WarningText = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: 'Archivo_400Regular';
  color: ${(props) => props.theme.colors.warningRed};
  margin-top: 8px;
`
