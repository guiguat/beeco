/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Button = styled.button<{ padding?: string }>`
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lighterGrey};
  padding: ${(props) => props.padding ?? '1.4rem'};
  font: ${(props) => props.theme.fonts.subheaderHeavy};
  background-color: ${(props) => props.theme.colors.yellow};
  box-shadow: ${(props) => props.theme.elevation.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  outline: none;
  transition: 300ms;
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    box-shadow: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.lighterGrey} !important;
    color: ${(props) => props.theme.colors.lightGrey} !important;
    cursor: auto;
    box-shadow: none;
  }
`;
export default Button;
