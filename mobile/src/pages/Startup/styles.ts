import { TitleLight } from '../../styles/fonts'
import styled from '../../styles/styled-components'

export const Container = styled.SafeAreaView`
  padding: ${(props) => props.theme.padding};
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`
export const HexBubble = styled.Image`
  position: absolute;
  top: -16px;
  left: -56px;
`
export const WellcomeMessage = styled(TitleLight)`
  text-align: center;
  margin: 38px 0 36px;
`
