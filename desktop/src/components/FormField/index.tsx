/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes } from 'react';
import { SubheaderLight } from '../../styles/fonts';
import theme from '../../styles/theme';

import * as S from './styles';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => {
  return (
    <S.Container>
      <S.Label>
        <SubheaderLight>{label}</SubheaderLight>
        {props.required ? (
          <SubheaderLight color={theme.colors.yellow} style={{ marginLeft: 5 }}>
            *
          </SubheaderLight>
        ) : (
          <></>
        )}
      </S.Label>
      <S.Input type={props.type ?? 'text'} {...props} />
    </S.Container>
  );
};

export default FormField;
