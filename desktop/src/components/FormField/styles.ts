/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Label = styled.div`
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lighterGrey};
  padding: 1.4rem;
  font: ${(props) => props.theme.fonts.captionLight};
  outline: none;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const Area = styled.textarea`
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  height: 100%;
  max-height: 29.8rem;
  border: 1px solid ${(props) => props.theme.colors.lighterGrey};
  padding: 1.4rem;
  font: ${(props) => props.theme.fonts.captionLight};
  outline: none;
  color: ${(props) => props.theme.colors.lightGrey};
`;
