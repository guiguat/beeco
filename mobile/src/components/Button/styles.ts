import styled from "../../styles/styled-components";

export const Button = styled.Button<{isOutline: boolean}>`
    border-color: ${ props => props.theme.colors.grey};
    border: ${props => props.isOutline ? 1:0};
    background-color: ${props => props.isOutline ? props.theme.colors.white : props.theme.yellow}
    color: ${props  => props.theme.colors.grey};
`;

// font: ${props => props.theme.subheaderHeavyFont};