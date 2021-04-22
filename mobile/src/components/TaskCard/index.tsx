import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BodyLight, SmallLight } from '../../styles/fonts'
import { StyledTaskCard, Tag, PseudoDiv, PseudoDivTitle, Description } from './styles';
import themes from '../../styles/theme'

interface Props extends TouchableOpacityProps {
    info: {
        title: string,
        minPrice: number,
        maxPrice: number,
        //Precisamos decidir se data sera recebido como um dateTime ou string
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
        description, 
        tags} = info;
    return(
        <StyledTaskCard {...props}>
            <PseudoDivTitle>
                <BodyLight>{title}</BodyLight>
                <SmallLight style={{lineHeight: 20}}>{date}</SmallLight>
            </PseudoDivTitle>
            <PseudoDiv style={{marginBottom: 13, marginTop: 8}}>
                <SmallLight style={{marginRight: 16}}>R${minPrice} - R${maxPrice}</SmallLight>
                <SmallLight>{city}</SmallLight>
            </PseudoDiv>
            <Description>
                <SmallLight>{description}</SmallLight>
            </Description>
            <PseudoDiv>
                {tags.map((value, index) =>
                    value? <Tag key={index}>
                            <SmallLight 
                            color={themes.colors.darkYellow}
                            style={{lineHeight: 10.5}}>
                                {value}
                            </SmallLight>
                        </Tag>:"")}
            </PseudoDiv>
        </StyledTaskCard>
    );

}
export default TaskCard;