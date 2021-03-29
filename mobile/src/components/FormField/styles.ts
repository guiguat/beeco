import styled from "../../styles/styled-components";

export const StyledInput = styled.TextInput`
    background-color: ${props => props.theme.colors.altGrey};
    border: 1px solid ${props => props.theme.colors.lighterGrey};
    color: ${props =>  props.theme.colors.lightGrey};
    border-radius: ${props => props.theme.borderRadius};
    padding: 12px;
    margin-top: 8px;
    font-family: 'Archivo_400Regular';
    font-size: 12px;
    line-height: 16px;
`;

export const WarningText = styled.Text`
    font-size: 6px;
    line-height: 8px;
    font-family: 'Archivo_400Regular';
    color: 'red';
`;