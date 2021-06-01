import React from 'react'
import { ModalProps } from 'react-native'
import { onChange } from 'react-native-reanimated'
import { SubheaderHeavy } from '../../styles/fonts'
import Button from '../Button'
import FormField from '../FormField'
import { Input } from '../FormField/styles'
import ModalView from '../ModalView'

import { Container } from './styles'

const AddFotoModal: React.FC<
  ModalProps & {
    errorMessage: string | null
    onResult: () => void
    onChange: (t: string) => void
  }
> = (props) => {
  return (
    <ModalView {...props} animationType="fade">
      <Container>
        <SubheaderHeavy>Adicionar foto</SubheaderHeavy>
        <FormField
          required
          field="URL"
          style={{ marginTop: 20, marginBottom: 24 }}
          errorMessage={props.errorMessage}
        >
          <Input keyboardType="url" onChangeText={props.onChange} />
        </FormField>
        <Button onPress={() => props.onResult()}>Adicionar</Button>
      </Container>
    </ModalView>
  )
}

export default AddFotoModal
