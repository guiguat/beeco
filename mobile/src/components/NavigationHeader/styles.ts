import styled from '../../styles/styled-components'

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.padding};
`

export const Row = styled.View`
  flex-direction:row;
  justify-content: flex-start;
  align-items: center;
`