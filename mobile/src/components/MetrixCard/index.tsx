import React from 'react';
import { ViewProps } from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { Card, MeasureUnit, StyledCaptionLight, StyledDisplayHeavy } from './style';

interface Props extends ViewProps {
    indentifier:"rating" | "tasks" | "jobsDone"
}

const MetrixCard: React.FC<Props> = ({children, indentifier}) =>{
    if( indentifier === "rating" ){
        return(
            <Card>
               
               <MeasureUnit>
                   <AntDesign name="star" size={16}  color={theme.colors.darkerYellow}/>
                   <StyledCaptionLight  >
                       Estrelas
                    </StyledCaptionLight>
               </MeasureUnit>
               <StyledDisplayHeavy >{children}</StyledDisplayHeavy>
            </Card>
        );
    }
    else if( indentifier === "tasks" ){
        return(
            <Card>
                <MeasureUnit>
                    <FontAwesome name="check-circle" size={16}  color={theme.colors.darkerYellow}/>
                    <StyledCaptionLight >Estrelas</StyledCaptionLight>
                </MeasureUnit>
                <StyledDisplayHeavy >{children}</StyledDisplayHeavy>
         </Card>
        );
    }
    else {
        return(
            <Card>
                <MeasureUnit>
                    <FontAwesome5 name="smile" size={16}  color={theme.colors.darkerYellow}/>
                    <StyledCaptionLight>Estrelas</StyledCaptionLight>
                </MeasureUnit>
                <StyledDisplayHeavy>{children}</StyledDisplayHeavy>
            </Card>
        );
    }

}

export default MetrixCard;