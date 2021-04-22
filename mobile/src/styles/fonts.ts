import styled from './styled-components'
import themes from './theme'
interface FontProps {
  color?: string
}
export const DisplayHeavy = styled.Text<FontProps>`
  font-family: 'Saira_700Bold';
  font-size: 36px;
  line-height: 48px;
  color: ${(props) => props.color ?? themes.colors.grey};
`
export const HeadlineLight = styled.Text<FontProps>`
  font-family: 'Saira_400Regular';
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.color ?? themes.colors.grey};
`
export const TitleHeavy = styled.Text<FontProps>`
    font-family: Saira_700Bold';
    font-size: 20px;
    line-height: 28px;
    color: ${(props) => props.color ?? themes.colors.grey}
`
export const TitleLight = styled.Text<FontProps>`
  font-family: 'Saira_400Regular';
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.color ?? themes.colors.grey};
`
export const SubheaderLight = styled.Text<FontProps>`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color ?? themes.colors.grey};
`
export const SubheaderHeavy = styled.Text<FontProps>`
  font-family: 'Archivo_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color ?? themes.colors.grey};
`
export const BodyLight = styled.Text<FontProps>`
  font-family: 'Saira_400Regular';
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color ?? themes.colors.grey};
`

export const SmallLight = styled.Text<FontProps>`
  font-family: 'Archivo_400Regular';
  font-size: 10px;
  line-height: 14px;
  color: ${(props) => props.color ?? themes.colors.lightGrey};
`
// font: ${props => props.theme.subheaderHeavyFont};
