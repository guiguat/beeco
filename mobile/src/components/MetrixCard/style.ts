import styled from '../../styles/styled-components';
import { CaptionLight, DisplayHeavy } from '../../styles/fonts';

export const Card = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.lightBrown};
    border-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    padding: 10px ;
`

export const MeasureUnit = styled.View`
    flex-direction: row;
    margin-bottom:3px
`

export const StyledCaptionLight = styled(CaptionLight)`
    color: ${(props) => props.theme.colors.darkerYellow};
    margin-left: 6px;
`

export const StyledDisplayHeavy = styled(DisplayHeavy)`
    color: ${(props) => props.theme.colors.darkerYellow};
`