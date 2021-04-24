import styled from '../../styles/styled-components';

export const StyledTaskCard = styled.TouchableOpacity`
    padding: 12.7px 16px;
    margin: 20px;
    width:100%;
    border: 1px solid ${(props) => props.theme.colors.lighterGrey};
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.lightest};
`;

export const Tag = styled.View`
    border: 1px solid ${(props) => props.theme.colors.lightOrange};
    border-radius: 10px;
    padding: 5px 8px;
    margin-right: 7px;
    margin-top: 9px;
    justify-content: center;
    align-items: center;
`;

export const RowDiv = styled.View`;
    flex-direction: row;
`;

export const RowDivTitle = styled.View`;
    flex-direction: row;
    justify-content: space-between;
`;

export const Description = styled.Text`
    max-width: 305px;
`;