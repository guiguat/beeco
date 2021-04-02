import styled from '../../styles/styled-components'

export const Container = styled.SafeAreaView`
  padding: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`
