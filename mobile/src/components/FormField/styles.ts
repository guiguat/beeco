import styled from "../../styles/styled-components";

export const StyledInput = styled.TextInput`
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.altGrey};
    color: ${props =>  props.theme.colors.lightGrey};
`;