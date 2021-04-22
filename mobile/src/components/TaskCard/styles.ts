import styled from '../../styles/styled-components';

export const StyledTaskCard = styled.TouchableOpacity`
    padding: 12.7px 16px;
    margin: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.lighterGrey};
    background-color: ${(props) => props.theme.colors.white};
`;