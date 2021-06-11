import React from 'react'
import { Feather } from '@expo/vector-icons'
import Button from '../Button'
import { TitleLight } from '../../styles/fonts'
import { StyledHeader, Row } from './styles'
import themes from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../../hooks/useAuth'

interface Props {
  isEdit?: boolean
}

const NavigationHeader: React.FC<Props> = ({ isEdit, children }) => {
  const navigation = useNavigation()
  const { signOut } = useAuth()
  return (
    <StyledHeader>
      <Row>
        <Button
          isOutline
          style={{
            borderRadius: 20,
            width: 50,
            marginRight: 20,
          }}
          content={
            <Feather name="arrow-left" size={16} color={themes.colors.grey} />
          }
          onPress={() => {
            navigation.goBack()
          }}
        />
        <TitleLight>{children}</TitleLight>
      </Row>
      {isEdit ? (
        <Row>
          <Button
            isOutline
            style={{
              borderRadius: 20,
              width: 50,
              marginRight: 18,
            }}
            content={
              <Feather
                name="edit-2"
                size={16}
                color={themes.colors.lightGrey}
              />
            }
            onPress={() => {
              navigation.navigate(themes.nav.editProfile)
            }}
          />
          <Button
            isOutline
            style={{
              borderRadius: 20,
              width: 50,
            }}
            content={
              <Feather
                name="log-out"
                size={16}
                color={themes.colors.lightGrey}
              />
            }
            onPress={async () => {
              await signOut()
            }}
          />
        </Row>
      ) : null}
    </StyledHeader>
  )
}

export default NavigationHeader
