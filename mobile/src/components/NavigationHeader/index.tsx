import React from 'react'
import { Feather, Octicons} from '@expo/vector-icons'
import Button from '../Button'
import { TitleLight } from '../../styles/fonts';
import { StyledHeader, Row} from './styles';
import themes from '../../styles/theme'
import { useNavigation } from '@react-navigation/native';

interface Props {
    isEdit?: boolean
}

const NavigationHeader: React.FC<Props> = ({isEdit, children}) => {
    const navigation = useNavigation();
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
                    onPress={() => {
                        navigation.goBack();
                    }}
                    
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
                    }
                    onPress={() => {
                        navigation.navigate(themes.navSnippets.editProfile);
                    }}/> : null}
        </StyledHeader>
    );
}

export default NavigationHeader;