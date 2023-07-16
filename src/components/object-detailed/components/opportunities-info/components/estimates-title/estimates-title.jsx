import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Kebab } from '@skbkontur/react-ui';
import { Link as LinkUI } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const EstimatesTitle = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();

  return (
    <S.Container
      $align="center"
      $justify="space-between"
    >
      <S.EstimateTitle>
        Связанные сметные расчеты
      </S.EstimateTitle>
      {activeOpportunity.status === '0'
      && (
        <Kebab
          style={{
            margin: '0 10px 0'
          }}
          size="medium"
        >
          <S.MenuItem
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityAddEstimate(true))}
          >
            <LinkUI />
            {' '}
            Привязать сметный расчет
          </S.MenuItem>
        </Kebab>
      )}
    </S.Container>
  );
};

export default EstimatesTitle;
