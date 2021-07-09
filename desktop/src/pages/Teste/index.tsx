import React from 'react';
import ModalTeste from '../../modals/ModalTeste';

import { Container } from './styles';

const Teste: React.FC<{ component: React.FC }> = ({ component: Component }) => {
  return (
    <Container>
      <Component />
    </Container>
  );
};

export default Teste;
