import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Kebab } from '@skbkontur/react-ui';
import { Link as LinkIcon, Edit, OwnershipBoat } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const InfoTitle = () => {
  const {
    activeObject,
    activeLinks
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    activeLinks: store.objectDetailed.activeLinks
  }));
  const dispatch = useDispatch();

  return (
    <S.Container
      $align="center"
      $justify="space-between"
    >
      <div>
        Основная информация
      </div>
      <Kebab size="medium">
        <S.MenuItem
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoDescriptionEdit(true))}
        >
          <Edit />
          {' '}
          {activeObject.description ? 'Изменить описание' : 'Добавить описание'}
        </S.MenuItem>
        <S.MenuItem
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoLinksEdit(true))}
        >
          <LinkIcon />
          {' '}
          {activeLinks ? 'Изменить ссылки' : 'Добавить ссылки'}
        </S.MenuItem>
        <S.MenuItem
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoImagesEdit(true))}
        >
          <OwnershipBoat />
          {' '}
          {activeObject.images.length > 0 ? 'Изменить фотографии' : 'Добавить фотографии'}
        </S.MenuItem>
      </Kebab>
    </S.Container>
  );
};

export default InfoTitle;
