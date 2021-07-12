/* eslint-disable prettier/prettier */
import React from 'react';
import { FiPlus } from "react-icons/fi";
import * as S from './styles';
import { SubheaderLight } from '../../styles/fonts';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Modal from '../Modal';


const ModalCreateTask: React.FC = () => {
  return (
    <Modal title="Criar nova tarefa">

      <S.Form>
        <S.DivLeft>
          <FormField label="Título" required type="text" />
          <FormField label="Localização" type="text" />
          <FormField
            label="Descrição"
            required
            area
            style={{ maxHeight: 120 }}
          />
        <S.Bees>
          <SubheaderLight>Abelha</SubheaderLight>
          <S.Bee src="assets/bees.svg" />
        </S.Bees>
        </S.DivLeft>
        <S.DivRight>
          <S.Tags>
            <FormField label="Tags" required type="text" />
            <Button padding="1.3rem" style={{ marginLeft:10 }} type="button">
              <FiPlus size={26} color={theme.colors.lightGrey}/>
            </Button>
          </S.Tags>
          <FormField label="" type="" />
          <FormField label="Preço mínimo" required type="text" />
          <FormField label="Preço máximo" required type="text" />
          <Button type="submit" expanded>
            Salvar
          </Button>
        </S.DivRight>
      </S.Form>
    </Modal>
  );
};

export default ModalCreateTask;
