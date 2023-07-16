import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalMainInfoImagePreview = () => {
  const {
    activeObject,
    modalMainInfoImagePreview
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    modalMainInfoImagePreview: store.objectDetailed.modalMainInfoImagePreview
  }));
  const dispatch = useDispatch();
  const switchImage = index => {
    if (index < 0) {
      dispatch(objectDetailedActionCreator.setModalMainInfoImagePreview(activeObject.images.length - 1));
    } else if (index > activeObject.images.length - 1) {
      dispatch(objectDetailedActionCreator.setModalMainInfoImagePreview(0));
    } else {
      dispatch(objectDetailedActionCreator.setModalMainInfoImagePreview(index));
    }
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="60vw"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoImagePreview())}
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontSize: '14px',
          lineHeight: '20px',
          fontFamily: '"Ubuntu", sans-serif',
          color: '#333333'
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <S.BodyWrapper
            $align="center"
            $justify="space-between"
          >
            <S.ArrowLeft onClick={() => switchImage(modalMainInfoImagePreview - 1)} />
            <img
              src={activeObject.images[modalMainInfoImagePreview].url}
              alt={activeObject.images[modalMainInfoImagePreview].name}
            />
            <S.ArrowRight onClick={() => switchImage(modalMainInfoImagePreview + 1)} />
          </S.BodyWrapper>
        </Modal.Body>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoImagePreview;
