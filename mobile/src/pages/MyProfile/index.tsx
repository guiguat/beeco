import React from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import MetrixCard from '../../components/MetrixCard';
import { TitleHeavy, CaptionLight, HeadlineLight, BodyLight } from '../../styles/fonts';
import theme from '../../styles/theme';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, PicNameNBio, StyledImage, MetrixSection, ContactSection, Row } from './styles';


const MyProfile: React.FC = () =>{
    return(
        <Container>
            <NavigationHeader isEdit={true}>Meu perfil</NavigationHeader>
            <PicNameNBio>
                <StyledImage source={{uri:"https://avatars.githubusercontent.com/u/67172695?v=4"}}/>
                <TitleHeavy style={{marginTop: 30, marginBottom: 6}}>Iuri Salles</TitleHeavy>
                <CaptionLight style={{maxWidth: 290, textAlign: "center"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie enim sit a, ligula justo sit adipiscing vitae. Interdum dictum lectus sed tincidunt turpis scelerisque lobortis vitae commodo.
                </CaptionLight>
            </PicNameNBio>
            <MetrixSection>
                <MetrixCard indentifier="rating" style={{marginRight: 7}}>4.6</MetrixCard>
                <MetrixCard indentifier="tasks" style={{marginRight: 7}}>300</MetrixCard>
                <MetrixCard indentifier="jobsDone">120</MetrixCard>
            </MetrixSection>
            <ContactSection>
                <HeadlineLight>Contato</HeadlineLight>
                <Row>
                    <MaterialCommunityIcons name="email-outline" size={24} color={theme.colors.lightGrey} /> 
                    <BodyLight color={theme.colors.lightGrey} style={{marginLeft: 10}}>
                        joseDinossauro@gmail.com
                    </BodyLight>
                </Row>
                <Row style={{marginTop:10}}>
                    <Entypo name="phone" size={24} color={theme.colors.lightGrey} />
                    <BodyLight color={theme.colors.lightGrey} style={{marginLeft: 10}}>
                        (19) 999199293
                    </BodyLight>
                    <Entypo name="phone" size={24} color={theme.colors.lightGrey} style={{marginLeft: 10}}/>
                    <BodyLight color={theme.colors.lightGrey} style={{marginLeft: 10}}>
                        (19) 999199293
                    </BodyLight>
                </Row>
            </ContactSection>
        </Container>
    )
}

export default MyProfile;