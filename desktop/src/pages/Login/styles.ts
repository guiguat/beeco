/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 100vh;
  @media (max-width: 800px) {
    display: flex;
    & > .bees {
      display: none;
    }
  }
  max-width: 100vw;
  overflow: hidden;
`;
export const BeeBG = styled.div`
  background-image: url('assets/hive.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  transform: scaleX(-1);
`;
export const LoginContainer = styled.div`
  position: relative;
  max-width: 48rem;
  width: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow-x: hidden;
`;
export const Bubbles = styled.img`
  position: absolute;
  max-width: 20.231rem;
  max-height: 21.36rem;
  top: 0;
  right: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  & > img {
    margin-bottom: 3rem;
  }
`;

export const Bee = styled.img`
  height: 9.1rem;
  width: 7.8rem;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 2.4rem;
`;
