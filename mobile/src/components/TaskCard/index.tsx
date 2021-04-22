import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BodyLight, SmallLight } from '../../styles/fonts'
import { StyledTaskCard } from './styles';

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
            {tags.map((tag) => tag?<SmallLight>{tag}</SmallLight>:"")}
        </StyledTaskCard>
    );

}
export default TaskCard;