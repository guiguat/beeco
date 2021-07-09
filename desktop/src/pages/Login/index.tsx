import React from 'react';
import * as S from './styles';
import { DisplayHeavy, TitleLight } from '../../styles/fonts';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.BeeBG className="bees" />
      <S.LoginContainer>
        <S.Bubbles src="assets/hexbubbles.png" />
        <S.Header>
          <S.Bee src="assets/bee.png" />
          <TitleLight>Faça seu</TitleLight>
          <DisplayHeavy>LOGIN</DisplayHeavy>
        </S.Header>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormField label="Email" required type="email" />
          <FormField label="Senha" required type="password" />
          <Button elevated type="submit">
            Entrar
          </Button>
        </S.Form>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
