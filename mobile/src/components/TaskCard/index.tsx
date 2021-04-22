import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BodyLight, SmallLight } from '../../styles/fonts'
import { StyledTaskCard, Tag } from './styles';
import themes from '../../styles/theme'

interface Props extends TouchableOpacityProps {
    info: {
        title: string,
        minPrice: number,
        maxPrice: number,
        date: string,
        city: string,
        description: string
        tags:string[]
    },
}

const TaskCard: React.FC<Props> = ({
  children,
  info,
  ...props
  }) => {
    const {title, 
        minPrice, 
        maxPrice, 
        date, 
        city, 
        description, tags} = info;
    return(
        <StyledTaskCard>
            <BodyLight>{title}</BodyLight>
            <SmallLight>${minPrice} - ${maxPrice}</SmallLight>
            <SmallLight>{city}</SmallLight>
            <SmallLight>{description}</SmallLight>
            {tags.map((tag) => tag?
                                <Tag>
                                    <SmallLight 
                                      color={themes.colors.darkYellow}
                                      style={{lineHeight: 10.5}}>
                                        {tag}
                                    </SmallLight>
                                </Tag>:"")}
        </StyledTaskCard>
    );

}
export default TaskCard;