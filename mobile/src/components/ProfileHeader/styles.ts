import styled from '../../styles/styled-components'

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.padding} ${(props) => props.theme.padding} 0;
`

export const Row = styled.View`
  flex-direction:row;
  justify-content: flex-start;
  align-items: center;
`