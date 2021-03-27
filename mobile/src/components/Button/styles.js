import styled from 'styled-components/native';

export const Button = styled.button`
    border-color: ${props => props.theme.grey};
    border: ${props => props.isOutline ? 1:0};
    background-color: ${props => props.isOutline ? props.theme.white : props.theme.yellow}
    font: ${props => props.theme.subheaderHeavyFont};
    color: ${props  => props.theme.grey};
`;