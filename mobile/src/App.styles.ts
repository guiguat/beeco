import styled from "./styles/styled-components";

export const Container = styled.SafeAreaView`
    padding: 20px;
    flex: 1;
    background-color: ${ props => props.theme.colors.white};
`;