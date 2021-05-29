import styled from '../../styles/styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${(props) => props.theme.padding};
  background-color: ${(props) => props.theme.colors.white};
`

export const PicNameNBio = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`

export const StyledImage = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 55px;
`

export const MetrixSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`

export const ContactSection = styled.View`
  align-items: flex-start;
  justify-content: center;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
