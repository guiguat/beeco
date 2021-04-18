import styled from '../../styles/styled-components'

export const CenteredView = styled.SafeAreaView`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.padding};
  flex: 1;
  background-color: rgba(60, 60, 60, 0.74);
`
