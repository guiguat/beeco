import styled from '../../styles/styled-components'

export const Container = styled.View`
  padding: ${(props) => props.theme.padding};
  width: 100%;
  max-width: 326px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.white};
`
