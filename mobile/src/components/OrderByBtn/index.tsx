import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledButton } from './styles';
import {SmallHeavy} from '../../styles/fonts';
import themes from '../../styles/theme'


const OrderByBtn: React.FC<TouchableOpacityProps> = ({
  children, ...props }) => {
  return (
    <StyledButton {...props}>
        <SmallHeavy>{children}</SmallHeavy>
    </StyledButton>
  )
}
export default OrderByBtn;