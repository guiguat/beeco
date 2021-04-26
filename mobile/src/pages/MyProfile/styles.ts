import styled from '../../styles/styled-components';

export const Container = styled.SafeAreaView`
    padding: ${(props) => props.theme.padding};
`

export const PicNameNBio = styled.View`
    flex:1;
    margin-top: 140px;
    margin-bottom: 160px;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
`

export const StyledImage = styled.Image`
    width: 109px;
    height: 109px;
    border-radius: 55px;
`

export const MetrixSection = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
`

export const ContactSection = styled.View`
    align-items: flex-start;
    justify-content: center;
`

export const Row = styled.View`
    flex-direction: row;
`