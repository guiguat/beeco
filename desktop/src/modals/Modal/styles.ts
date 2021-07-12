/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 59.6rem;
  overflow-x: hidden;
  border-radius: ${props=>props.theme.borderRadius};
  box-shadow: ${props=>props.theme.elevation.el4};
  `;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
  max-width: 75rem;
`;
