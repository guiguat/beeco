import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SubheaderHeavy } from '../../styles/fonts';
import {StyledButton} from './styles'

interface Props extends TouchableOpacityProps {isOutline?: boolean} 

const Button: React.FC<Props> = ({isOutline, children, ...props}) => {
  return (
    <StyledButton {...props} isOutline={isOutline??false}>
      <SubheaderHeavy>{children}</SubheaderHeavy>
    </StyledButton>
  );
}
export default Button;