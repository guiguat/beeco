import React from 'react'
import { Feather, Octicons} from '@expo/vector-icons'
import Button from '../Button'
import { TitleLight } from '../../styles/fonts';
import { StyledHeader, Row} from './styles';
import themes from '../../styles/theme'

interface Props {
    isEdit?: boolean
}

const NavigationHeader: React.FC<Props> = ({isEdit, children}) => {
    return(
        <StyledHeader>
            <Row>
                <Button
                    isOutline
                    style={{
                        borderRadius: 20,
                        width: 50,
                        marginRight: 20
                    }}
                    content={
                        <Feather name="arrow-left" size={16} color={themes.colors.grey} />
                    }
                />
                <TitleLight>{children}</TitleLight>
            </Row>
            {isEdit ? <Button
                    isOutline
                    style={{
                        borderRadius: 20,
                        width: 50
                    }}
                    content={
                        <Octicons name="pencil" size={16} color={themes.colors.lightGrey} />      
                    }/> : null}
        </StyledHeader>
    );
}

export default NavigationHeader;