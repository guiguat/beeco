import React from 'react';
import { TextInputProps } from 'react-native';
import { SubheaderLight } from '../../styles/fonts';
import {StyledInput} from './styles';

const FormField: React.FC<TextInputProps> = ({children, ...props}) => {
  return (
    <>
      <SubheaderLight style={ {color:'grey'} } >
        {children}
      </SubheaderLight>
      <StyledInput {...props}> </StyledInput>
    </>
  );
}
export default FormField;