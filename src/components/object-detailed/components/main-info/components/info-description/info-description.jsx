import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@skbkontur/react-ui';
import { Add } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const InfoDescription = () => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const dispatch = useDispatch();

  if (!activeObject.description) {
    return (
      <S.InfoEmpty
        $align="center"
        $justify="space-between"
      >
        <Button
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoDescriptionEdit(true))}
        >
          <Add />
          {' '}
          Добавить описание
        </Button>
        <S.InfoHelpText>
          Добавьте описание данного объекта.
          Здесь не следует указывать потенциальные возможности для продаж,
          только описание самого объекта
        </S.InfoHelpText>
      </S.InfoEmpty>
    );
  }
  return (
    <S.Container>
      {activeObject.description}
    </S.Container>
  );
};

export default InfoDescription;
