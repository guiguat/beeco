import React from 'react';
import { PressableProps } from 'react-native';
import { StyledButton } from './styles';
import {SmallHeavy} from '../../styles/fonts';


const OrderByBtn: React.FC<PressableProps> = ({children, ...props }) => {
  return (
    <StyledButton {...props}>
        <SmallHeavy>{children}</SmallHeavy>
    </StyledButton>
  )
}
export default OrderByBtn;