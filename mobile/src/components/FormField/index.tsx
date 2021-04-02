import React, { useState, useEffect } from 'react'
import { TextInputProps } from 'react-native'
import { SubheaderLight } from '../../styles/fonts'
import themes from '../../styles/theme'
import { StyledInput, WarningText } from './styles'

interface Props extends TextInputProps {
  required?: boolean
  errorMessage?: string
}

const FormField: React.FC<Props> = ({
  required,
  errorMessage,
  children,
  ...props
}) => {
  return (
    <>
      <SubheaderLight color={themes.colors.grey}>
        {children}
        {required ? (
          <SubheaderLight color={themes.colors.yellow}>*</SubheaderLight>
        ) : null}
      </SubheaderLight>
      <StyledInput {...props} defaultValue="" />
      {errorMessage ? <WarningText> {errorMessage} </WarningText> : null}
    </>
  )
}
export default FormField
