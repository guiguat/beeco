import React, { useState, useEffect } from 'react'
import { TextInputProps } from 'react-native'
import { SubheaderLight } from '../../styles/fonts'
import themes from '../../styles/theme'
import { Input, WarningText, FormFieldView } from './styles'

interface Props extends TextInputProps {
  required?: boolean
  errorMessage?: string
  field: string
}

const FormField: React.FC<Props> = ({
  required,
  errorMessage,
  children,
  field,
  ...props
}) => {
  return (
    <FormFieldView {...props}>
      <SubheaderLight color={themes.colors.grey}>
        {field}
        {required ? (
          <SubheaderLight color={themes.colors.yellow}>{''} *</SubheaderLight>
        ) : null}
      </SubheaderLight>
      {children}
      {errorMessage ? <WarningText> {errorMessage} </WarningText> : null}
    </FormFieldView>
  )
}
export default FormField
