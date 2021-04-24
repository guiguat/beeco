import styled from '../../styles/styled-components';
import {FlatListProps} from 'react-native';

export const StyledView = styled.View`
    padding: ${(props) => props.theme.padding} 20px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 21px;
`;

export const TextWrapper = styled.View`
    flex-direction: row;
    max-width:270px;
    margin-bottom: 26px;
`;

export const HexBubble = styled.Image`
  resize-mode: contain;
  width: 155px;
  position: absolute;
  top: -58px;
  right: -48px;
  transform: scaleX(1) rotate(-60deg);
  z-index: -1;
`

export const Input = styled.TextInput`
background-color: ${(props) => props.theme.colors.lightest};
border: 1px solid ${(props) => props.theme.colors.lighterGrey};
color: ${(props) => props.theme.colors.lightGrey};
border-radius: ${(props) => props.theme.borderRadius};
padding: 12px;
margin-top: 4px;
margin-bottom: 20px;
font-family: 'Archivo_400Regular';
font-size: 12px;
width: 100%;
line-height: 16px;
`;

export const StyledFlatList = styled.FlatList<FlatListProps>`
    margin-bottom: 60px;
`;

