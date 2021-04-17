import React from 'react'
import { Modal, ModalProps } from 'react-native'
import { CenteredView } from './styles'

const ModalView: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <Modal {...props} transparent={true}>
      <CenteredView>{children}</CenteredView>
    </Modal>
  )
}

export default ModalView
