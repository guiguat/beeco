import styled from '../../styles/styled-components'

export const StyledView = styled.SafeAreaView`
  flex: 1;
  padding: ${(props) => props.theme.padding + ' ' + props.theme.padding} 0;
  background-color: ${(props) => props.theme.colors.white};
`

export const Row = styled.View`
  flex-direction: row;
  margin: 20px 0;
`

export const TextWrapper = styled.View`
  flex-direction: row;
  max-width: 270px;
  margin-bottom: 20px;
`

export const HexBubble = styled.Image`
  resize-mode: contain;
  width: 155px;
  position: absolute;
  top: -58px;
  right: -48px;
  transform: scaleX(1) rotate(-60deg);
  z-index: -1;
`

export const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.lightest};
  border: 1px solid ${(props) => props.theme.colors.lighterGrey};
  color: ${(props) => props.theme.colors.lightGrey};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 12px;
  margin-top: 4px;
  margin-bottom: 20px;
  font-family: 'Archivo_400Regular';
  font-size: 12px;
  width: 100%;
  line-height: 16px;
`

export const StyledBackGroundImage = styled.ImageBackground`
  justify-content: center;
  align-items: center;
`
