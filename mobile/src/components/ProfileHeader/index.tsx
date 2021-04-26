import React from 'react'
import {ViewProps} from 'react-native';
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
                        <Feather name="arrow-left" size={16} color={themes.colors.grey} />
                    }
                />
                <TitleLight>{isEdit? "Alterar": "Meu"} Perfil</TitleLight>
            </Row>
            {!isEdit? <Octicons name="pencil" size={24} color="black" /> : null}
        </StyledHeader>
    );
}

export default ProfileHeader;