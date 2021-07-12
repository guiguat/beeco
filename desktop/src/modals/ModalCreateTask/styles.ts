/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  @media (max-width: 800px) {
    & > .bees {
      display: none;
    }
  }
  padding:2rem;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const Header = styled.div`
    justify-content: space-between;
    display: flex;
    max-width: 75rem;
`;

export const Form = styled.form`
  max-width:75rem;
  padding: 1rem 2rem 1rem 0;
  display: flex;
`;
export const DivLeft = styled.div `
  float: left;
  width: 35rem;
  margin-right: 1.8rem;
`;
export const DivRight = styled.div `
  float: right;
  width: 35rem;
`;

export const Bee = styled.img`
  height: 4.1rem;
  width: 2.8rem;
  cursor: pointer;
  margin-left: 1rem;
`;

export const Tags = styled.div`
  display: flex ;
  align-items: center;
  justify-content: space-between;
`;

export const Bees = styled.div`
  display: flex ;
  vertical-align: middle;
  align-items: center;

`;




