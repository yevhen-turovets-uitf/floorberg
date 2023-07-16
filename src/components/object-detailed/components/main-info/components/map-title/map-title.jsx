import React from 'react';
import { useDispatch } from 'react-redux';
import { Kebab } from '@skbkontur/react-ui';
import { HomeOffice, MapPin } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const MapTitle = () => {
  const dispatch = useDispatch();

  return (
    <S.Container
      $align="center"
      $justify="space-between"
    >
      <div>
        Местонахождение
      </div>
      <Kebab size="medium">
        <S.MenuItem
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoAddressEdit(true))}
        >
          <HomeOffice />
          {' '}
          Изменить местонахождение
        </S.MenuItem>
        <S.MenuItem
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoMapEdit(true))}
        >
          <MapPin />
          {' '}
          Изменить на карте
        </S.MenuItem>
      </Kebab>
    </S.Container>
  );
};

export default MapTitle;
