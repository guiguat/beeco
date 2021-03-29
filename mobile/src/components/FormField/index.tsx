import React, {useState, useEffect} from 'react';
import { TextInputProps } from 'react-native';
import { SubheaderLight } from '../../styles/fonts';
import { Pallete } from '../../styles/theme';
import {StyledInput, WarningText} from './styles';

interface Props extends TextInputProps {
  required?: boolean,
  errorMessage?: string,
}

const FormField: React.FC<Props> = (
  {required, errorMessage, children, ...props}) => {
  return (
    <>
      <SubheaderLight color={Pallete.grey} >
        {children}
        {required? <SubheaderLight color={Pallete.yellow}>*</SubheaderLight> : null}
      </SubheaderLight>
      <StyledInput {...props} defaultValue=""/>
      {
        errorMessage ? <WarningText> {errorMessage} </WarningText> : null
      }
    </>
  );
}
export default FormField;