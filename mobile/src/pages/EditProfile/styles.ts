import DefaultFormField from '../../components/FormField'
import styled from '../../styles/styled-components'
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`
export const FormView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`

export const Content = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.padding} ${(props) => props.theme.padding} 0;
`

export const FormRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 47%;
  margin-bottom: 14px;
`

export const FormField = styled(DefaultFormField)`
  margin-bottom: 18px;
  width: 100%;
`

export const InputProfilePhoto = styled.TouchableOpacity`
  padding: 42px;
  border-color: ${(props) => props.theme.colors.lightGrey};
  border-width: 1px;
  border-style: dashed;
  border-radius: 55px;
  margin-bottom: 18px;
`

export const StyledBackGroundImage = styled.ImageBackground`
  justify-content: center;
  align-items: center;
`

export const HexBubble = styled.Image`
  resize-mode: contain;
  width: 200px;
  position: absolute;
  top: -64px;
  right: -78px;
  transform: scaleX(-1) rotate(-90deg);
`
