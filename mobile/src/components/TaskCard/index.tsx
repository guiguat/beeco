import React, { memo } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BodyLight, SmallLight } from '../../styles/fonts'
import { StyledTaskCard, Tag, RowDiv, RowDivTitle, Description } from './styles'
import themes from '../../styles/theme'
import { User } from '../../contexts/authContext'
import { useCallback } from 'react'
import { formatDate } from '../../utils/format'

interface taskCardProps extends TouchableOpacityProps {
  task: Task
}

export interface Task {
  id: string
  freelancer?: User
  owner: User
  status: number
  title: string
  minPrice: number
  maxPrice: number
  createdAt: string
  location: string
  description: string
  tags: string
}

const TaskCard: React.FC<taskCardProps> = ({ children, task, ...props }) => {
  return (
    <StyledTaskCard {...props}>
      <RowDivTitle>
        <BodyLight>{task.title}</BodyLight>
        <SmallLight style={{ lineHeight: 20 }}>
          {formatDate(task.createdAt)}
        </SmallLight>
      </RowDivTitle>
      <RowDiv style={{ marginBottom: 13, marginTop: 8 }}>
        <SmallLight style={{ marginRight: 16 }}>
          {task.minPrice === task.maxPrice
            ? `R$${task.minPrice}`
            : `R$${task.minPrice} - R$${task.maxPrice}`}
        </SmallLight>
        <SmallLight>{task.location ?? 'Remoto'}</SmallLight>
      </RowDiv>
      <Description>
        <SmallLight>{task.description}</SmallLight>
      </Description>
      <RowDiv>
        {task.tags?.split(', ').map((tag, i) => (
          <Tag key={i}>
            <SmallLight
              color={themes.colors.darkYellow}
              style={{ lineHeight: 10.5 }}
            >
              {tag}
            </SmallLight>
          </Tag>
        ))}
      </RowDiv>
    </StyledTaskCard>
  )
}
export default TaskCard
