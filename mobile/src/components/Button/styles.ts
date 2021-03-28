import styled from "../../styles/styled-components";

export const StyledButton = styled.TouchableOpacity<{ isOutline: boolean }>`
    border: 1px solid ${ props => props.theme.colors.yellow}
    background-color: ${props => props.isOutline ? props.theme.colors.white : props.theme.colors.yellow}
    color: ${props  => props.theme.colors.grey};
    padding: 16px;
    border-radius: ${ props => props.theme.borderRadius};
    align-items: center;
`;