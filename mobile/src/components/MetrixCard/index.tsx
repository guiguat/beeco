import React from 'react'
import { Feather } from '@expo/vector-icons'
import theme from '../../styles/theme'
import {
  Card,
  MeasureUnit,
  StyledCaptionLight,
  StyledDisplayHeavy,
} from './styles'
import { ViewProps } from 'react-native'

interface Props extends ViewProps {
  type: 'rating' | 'tasks' | 'jobsDone'
}

const MetrixCard: React.FC<Props> = ({ children, type, ...props }) => {
  let iconName: 'smile' | 'star' | 'check-circle' = 'smile'
  if (type === 'rating') iconName = 'star'
  else if (type === 'tasks') iconName = 'check-circle'

  return (
    <Card {...props}>
      <MeasureUnit>
        <Feather name={iconName} size={16} color={theme.colors.darkerYellow} />
        <StyledCaptionLight>Contratos</StyledCaptionLight>
      </MeasureUnit>
      <StyledDisplayHeavy>{children}</StyledDisplayHeavy>
    </Card>
  )
}

export default MetrixCard
