import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Button,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalMainInfoMapEditAcception = () => {
  const {
    activeObject,
    modalMainInfoMapEditAcception
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    modalMainInfoMapEditAcception: store.objectDetailed.modalMainInfoMapEditAcception
  }));
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(objectDetailedActionCreator.updateObjectData({
      object: {
        address: modalMainInfoMapEditAcception.address,
        fiasGUID: modalMainInfoMapEditAcception.fiasGUID
      }
    }));
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoMapEditAcception())}
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
            Изменился адрес
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.InnerText>
            Входе изменения координат нахождения объекта, мы получили новый адрес:
          </S.InnerText>
          <S.InnerText>
            <S.GreyText>Новый:</S.GreyText>
            {' '}
            <S.BoldText>
              {modalMainInfoMapEditAcception.fullAddress}
            </S.BoldText>
            <br />
            <S.GreyText>Текущий:</S.GreyText>
            {' '}
            {activeObject.address}
          </S.InnerText>
          <S.InnerText>
            Подтверить изменения? Или текущий адрес был верным?
          </S.InnerText>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={() => {
              handleSubmit();
              dispatch(objectDetailedActionCreator.setModalMainInfoMapEditAcception());
            }}
          >
            Подтвердить изменения
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoMapEditAcception())}
          >
            Оставить текущий адрес
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoMapEditAcception;
