import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Textarea, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalMainInfoDescriptionEdit = () => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const dispatch = useDispatch();
  const [newDescription, setNewDescription] = useState(activeObject.description || '');

  const onNewDescriptionChange = value => {
    if (value.length <= 400) {
      setNewDescription(value);
    }
  };

  const handleSubmit = () => {
    const requestData = { object: { description: newDescription } };

    dispatch(objectDetailedActionCreator.updateObjectData(requestData));
    dispatch(objectDetailedActionCreator.setModalMainInfoDescriptionEdit());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoDescriptionEdit())}
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
            Описание
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            <S.ContentTitle
              $justify="space-between"
            >
              <div>Текст описания:</div>
              <div>{`${newDescription.length}/400`}</div>
            </S.ContentTitle>
            <Textarea
              style={{
                width: '100%'
              }}
              placeholder="Введите описание"
              autoResize
              value={newDescription}
              onValueChange={onNewDescriptionChange}
            />
            <S.ModalInputContainer />

          </S.ModalInputContainer>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={() => handleSubmit()}
          >
            Сохранить
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoDescriptionEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoDescriptionEdit;
