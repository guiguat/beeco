import styled from '../../styles/styled-components'

export const StyledInput = styled.TextInput`
  background-color: ${(props) => props.theme.colors.lightest};
  border: 1px solid ${(props) => props.theme.colors.lighterGrey};
  color: ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 12px;
  margin-top: 4px;
  font-family: 'Archivo_400Regular';
  font-size: 12px;
  line-height: 16px;
`

export const WarningText = styled.Text`
  font-size: 8px;
  line-height: 8px;
  font-family: 'Archivo_400Regular';
  color: ${(props) => props.theme.colors.warningRed};
  margin-top: 4px;
`
