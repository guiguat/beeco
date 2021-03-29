import React, {useState, useEffect} from 'react';
import { TextInputProps } from 'react-native';
import { SubheaderLight } from '../../styles/fonts';
import {StyledInput, WarningText} from './styles';

interface Props extends TextInputProps {
  isFieldRequired: boolean,
  isFieldSecure?: boolean
}

const FormField: React.FC<Props> = ({isFieldRequired, isFieldSecure, children, ...props}) => {
  const [textValue, setTextValue] = useState("");
  const [isInputWrong, setIsInputWrong] = useState("");
  useEffect(() => {
    if (textValue.trim() === "" && isFieldRequired)
      setIsInputWrong("*O Campo acima é obrigatório");
    else 
      setIsInputWrong("");
    console.log(isInputWrong);
  });
  return (
    <>
      <SubheaderLight style={ {color:'grey'} } >
        {children}
      </SubheaderLight>
      <StyledInput {...props} defaultValue=""
                  onChangeText = { text => {
                    setTextValue(text);
                  }}
                  secureTextEntry={isFieldSecure??false}> 
      </StyledInput>
      <WarningText>
        {isInputWrong}
      </WarningText>
    </>
  );
}
export default FormField;