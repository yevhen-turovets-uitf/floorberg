import React from 'react';
import { useSelector } from 'react-redux';
import { CurrencyLabel } from '@skbkontur/react-ui';
import { findDirection } from 'src/helpers/search-helper';
import * as S from './styles';

const OpportunityMain = () => {
  const {
    opportunitiesDirections,
    activeOpportunity
  } = useSelector(store => ({
    opportunitiesDirections: store.objectDetailed.opportunitiesDirections,
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));

  const getDate = () => {
    const date = activeOpportunity.date.split(' ')[0].split('-').reverse().join('.');
    const timeArray = activeOpportunity.date.split(' ')[1].split(':');

    if (timeArray[0] === '00' && timeArray[1] === '00') {
      return date;
    }
    return `${date} ${timeArray[0]}:${timeArray[1]}`;
  };

  return (
    <S.Container>
      <S.RowName>
        Тип:
      </S.RowName>
      <div>
        {activeOpportunity.type}
      </div>
      {activeOpportunity.status === '0'
      && (
        <>
          <S.RowName>
            Предполагаемый бюджет:
          </S.RowName>
          <div>
            <CurrencyLabel value={activeOpportunity.budget.toFixed(2)} currencySymbol="руб." />
          </div>
        </>
      )}
      <S.RowName>
        Направление:
      </S.RowName>
      <div>
        {findDirection(opportunitiesDirections, activeOpportunity.direction)}
      </div>
      {activeOpportunity.status === '0'
      && (
        <>
          <S.RowName>
            Потеря актуальности:
          </S.RowName>
          <div>
            {getDate()}
          </div>
        </>
      )}
    </S.Container>
  );
};

export default OpportunityMain;
