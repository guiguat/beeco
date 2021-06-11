import React, { memo } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BodyLight, SmallLight } from '../../styles/fonts'
import { StyledTaskCard, Tag, RowDiv, RowDivTitle, Description } from './styles'
import themes from '../../styles/theme'

interface taskCardProps extends TouchableOpacityProps {
  info: taskCardInfo
}

export interface taskCardInfo {
  title: string
  minPrice: number
  maxPrice: number
  date: string
  city: string
  description: string
  tags: string[]
}

const TaskCard: React.FC<taskCardProps> = ({ children, info, ...props }) => {
  const { title, minPrice, maxPrice, date, city, description, tags } = info
  return (
    <StyledTaskCard {...props}>
      <RowDivTitle>
        <BodyLight>{title}</BodyLight>
        <SmallLight style={{ lineHeight: 20 }}>{date}</SmallLight>
      </RowDivTitle>
      <RowDiv style={{ marginBottom: 13, marginTop: 8 }}>
        <SmallLight style={{ marginRight: 16 }}>
          R${minPrice} - R${maxPrice}
        </SmallLight>
        <SmallLight>{city}</SmallLight>
      </RowDiv>
      <Description>
        <SmallLight>{description}</SmallLight>
      </Description>
      <RowDiv>
        {tags.map((value, index) =>
          value ? (
            <Tag key={index}>
              <SmallLight
                color={themes.colors.darkYellow}
                style={{ lineHeight: 10.5 }}
              >
                {value}
              </SmallLight>
            </Tag>
          ) : null
        )}
      </RowDiv>
    </StyledTaskCard>
  )
}
export default memo(TaskCard)
