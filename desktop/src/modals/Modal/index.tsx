/* eslint-disable prettier/prettier */
import React from 'react';
import { FiX } from 'react-icons/fi';
import * as S from './styles';
import { TitleHeavy } from '../../styles/fonts';
import theme from '../../styles/theme';

const Modal: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <S.Container>
      <S.Header>
        <TitleHeavy>{title}</TitleHeavy>
        <FiX size="26" cursor="pointer" color={theme.colors.lightGrey} />
      </S.Header>
      {children}
    </S.Container>
  );
};

export default Modal;
