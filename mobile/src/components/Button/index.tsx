import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { SubheaderHeavy } from '../../styles/fonts'
import { StyledButton } from './styles'

interface Props extends TouchableOpacityProps {
  isOutline?: boolean
  content?: any
  size?: { width?: string; height?: string }
}

const Button: React.FC<Props> = ({
  isOutline,
  content,
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} isOutline={isOutline ?? false}>
      {content ?? <SubheaderHeavy>{children}</SubheaderHeavy>}
    </StyledButton>
  )
}
export default Button
