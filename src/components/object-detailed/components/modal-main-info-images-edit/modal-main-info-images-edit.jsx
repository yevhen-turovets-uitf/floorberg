import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Center, Spinner, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { DocumentFolder, Trash } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalMainInfoImagesEdit = () => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const dispatch = useDispatch();
  const [cautionRepeating, setCautionRepeating] = useState(false);
  const [cautionFormat, setCautionFormat] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [activeObject.images]);

  const onAddImage = e => {
    setCautionRepeating(false);
    setCautionFormat(false);
    const [file] = e.target.files;

    if (activeObject.images.find(elem => file.name === `${elem.name}.${elem.ext}`)) {
      setCautionRepeating(true);
    } else if (file.type.split('/')[0] !== 'image') {
      setCautionFormat(true);
    } else {
      setLoading(true);
      dispatch(objectDetailedActionCreator.updateObjectData({ files: file }));
      e.target.value = null;
    }
  };

  const onRemoveImage = name => {
    dispatch(objectDetailedActionCreator.updateObjectData({ deleteFiles: name }));
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoImagesEdit())}
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontSize: '14px',
          lineHeight: '20px',
          fontFamily: '"Ubuntu", sans-serif',
          color: '#333333'
        }}
      >
        <Modal.Header>
          <S.ModalHeaderWrapper>
            Фотографии
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          {!isLoading
            ? (
              <>
                {activeObject.images.length > 0
                  ? activeObject.images.map(item => (
                    <S.ImagesContainer key={item.url}>
                      <S.Image
                        src={item.url}
                        alt={item.name}
                      />
                      <S.DeleteContainer>
                        <Center>
                          <Button onClick={() => onRemoveImage(`${item.name}.${item.ext}`)}>
                            <Trash />
                          </Button>
                        </Center>
                      </S.DeleteContainer>
                    </S.ImagesContainer>
                  ))
                  : 'Сейчас нет добавленных фотографий, нажмите на кнопку загрузить, что бы их добавить'}
                {cautionRepeating
                  && (
                    <S.Caution>
                      Фото с таким названием уже существует
                    </S.Caution>
                  )}
                {cautionFormat
                  && (
                    <S.Caution>
                      Можно загрузить только фото
                    </S.Caution>
                  )}
              </>
            )
            : (
              <Center>
                <Spinner />
              </Center>
            )}
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoImagesEdit())}
          >
            Закрыть
          </Button>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            size="medium"
            onClick={() => {}}
          >
            <S.FileInput>
              <DocumentFolder />
              {' '}
              Загрузить
              <input
                type="file"
                accept="image/*"
                onChange={onAddImage}
                hidden
              />
            </S.FileInput>
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoImagesEdit;
