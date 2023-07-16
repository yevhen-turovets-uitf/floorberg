import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@skbkontur/react-ui';
import { OwnershipBoat } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const InfoImages = ({
  resizeYMap
}) => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const dispatch = useDispatch();

  if (activeObject.images.length <= 0) {
    return (
      <S.InfoEmpty
        $align="center"
        $justify="space-between"
      >
        <Button
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoImagesEdit(true))}
        >
          <OwnershipBoat />
          {' '}
          Добавить фотографии
        </Button>
        <S.InfoHelpText>
          Вы можете добавить фотографии и другие полезные изображения
        </S.InfoHelpText>
      </S.InfoEmpty>
    );
  }
  return (
    <S.Container
      $wrap="wrap"
    >
      {activeObject.images.map((elem, index) => (
        <S.InfoImageContainer
          key={elem.url}
          onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoImagePreview(index))}
        >
          <S.InfoImage
            src={elem.url}
            alt={elem.name}
            onLoad={resizeYMap}
            onError={resizeYMap}
          />
        </S.InfoImageContainer>
      ))}
    </S.Container>
  );
};

InfoImages.propTypes = {
  resizeYMap: PropTypes.func.isRequired
};

export default InfoImages;
