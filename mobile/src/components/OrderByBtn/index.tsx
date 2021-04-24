import React from 'react';
import { PressableProps } from 'react-native';
import { StyledButton } from './styles';
import {SmallHeavy} from '../../styles/fonts';
import themes from '../../styles/theme'


const OrderByBtn: React.FC<PressableProps> = ({children, ...props }) => {
  return (
    <StyledButton {...props}>
        <SmallHeavy color={themes.colors.darkYellow}>{children}</SmallHeavy>
    </StyledButton>
  )
}
export default OrderByBtn;