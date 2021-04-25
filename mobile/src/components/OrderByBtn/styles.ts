import styled from '../../styles/styled-components'

export const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.lightOrange};
  border-radius: 10px;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`
