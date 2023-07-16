import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@skbkontur/react-ui';
import { Add } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const OpportunityDescription = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();

  if (!activeOpportunity.description) {
    return (
      <S.InfoEmpty
        $align="center"
        $justify="space-between"
      >
        <Button
          disabled={!(activeOpportunity.status === '0')}
          onClick={() => {
            if (activeOpportunity.status === '0') {
              dispatch(objectDetailedActionCreator.setModalOpportunityDescriptionEdit(true));
            }
          }}
        >
          <Add />
          {' '}
          Добавить описание
        </Button>
        <S.InfoHelpText>
          Добавьте описание данной возможности,
          это поможет Вам лучше понимать и помнить ситуацию по возможной сделке
        </S.InfoHelpText>
      </S.InfoEmpty>
    );
  }
  return (
    <S.Container>
      {activeOpportunity.description}
    </S.Container>
  );
};

export default OpportunityDescription;
