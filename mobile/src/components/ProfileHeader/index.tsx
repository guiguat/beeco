import React from 'react'
import { Feather, Octicons} from '@expo/vector-icons'
import Button from '../../components/Button'
import { TitleLight } from '../../styles/fonts';
import { StyledHeader, Row} from './styles';
import themes from '../../styles/theme'

interface Props {
    isEdit: boolean
}

const ProfileHeader: React.FC<Props> = ({isEdit}) => {
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
                        <Feather name="arrow-left" size={20} color={themes.colors.grey} />
                    }
                />
                <TitleLight>{isEdit? "Alterar": "Meu"} Perfil</TitleLight>
            </Row>
            {!isEdit? <Button
                    isOutline
                    style={{
                        borderRadius: 20,
                        width: 50
                    }}
                    content={
                        <Octicons name="pencil" size={20} color={themes.colors.lightGrey} />      
                    }/> : null}
        </StyledHeader>
    );
}

export default ProfileHeader;