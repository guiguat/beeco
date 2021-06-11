import DefaultFormField from '../../components/FormField'
import styled from '../../styles/styled-components'
export const Container = styled.SafeAreaView`
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
  align-items: flex-start;
  justify-content: center;
  width: 47%;
  margin-bottom: 14px;
`

export const FormField = styled(DefaultFormField)`
  margin-bottom: 18px;
  width: 100%;
`

export const InputProfilePhoto = styled.TouchableOpacity<{
  hasError: string | null
}>`
  padding: 42px;
  background: transparent;
  border-color: ${(props) =>
    props.hasError
      ? props.theme.colors.warningRed
      : props.theme.colors.lightGrey};
  border-width: 1px;
  border-style: dashed;
  border-radius: 55px;
`
export const Photo = styled.Image`
  opacity: 0.6;
  height: 110px;
  width: 110px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 110px;
`
export const PhotoContainer = styled.View<{ photo: string }>`
  max-width: 110px;
  max-height: 110px;
  position: relative;
  margin-bottom: 18px;
  width: 100%;
  border-radius: 55px;
  background-color: ${(props) =>
    props.photo.trim().length > 0 ? props.theme.colors.grey : 'transparent'};
`
