import styled from '../../styles/styled-components';

export const StyledScrollView = styled.ScrollView`
    flex: 1;
    padding: ${(props) => props.theme.padding + ' ' + props.theme.padding} 0;
    width: 100%;
    height: 100%;
`       

export const HexBubble = styled.Image`
    margin-top:${(props) => props.theme.padding};
    resize-mode: contain;
    width: 155px;
    position: absolute;
    top: -65px;
    right: -55px;
    transform: scaleX(1) rotate(-60deg);
    z-index: -1;
`

export const Row = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const Tag = styled.View`
    border: 1px solid ${(props) => props.theme.colors.lightOrange};
    border-radius: 10px;
    padding: 5px 8px;
    margin-right: 7px;
    margin-top: 9px;
    justify-content: center;
    align-items: center;
`;

export const Description = styled.Text`
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`

export const ContactSection = styled.View`
    flex:1;
    margin-top:30px;
`

export const ContactInfo = styled.View`
    justify-content: space-between;
    margin-left: 10px;
`

export const StyledImage = styled.Image`
    border-radius: 55px;
    height: 75px;
    width: 75px;
`

