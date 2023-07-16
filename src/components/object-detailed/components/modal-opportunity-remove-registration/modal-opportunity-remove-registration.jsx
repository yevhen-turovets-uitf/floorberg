/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Button,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import {
  Loading,
  DocumentCheck,
  DocumentCheck2
} from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityAddRegistration = () => {
  const {
    activeOpportunity,
    modalOpportunityRemoveRegistration
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity,
    modalOpportunityRemoveRegistration: store.objectDetailed.modalOpportunityRemoveRegistration
  }));
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(objectDetailedActionCreator.removeRegistration(modalOpportunityRemoveRegistration.id));
    dispatch(objectDetailedActionCreator.setModalOpportunityRemoveRegistration());
  };

  return (
    <Modal
      width="600px"
      onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityRemoveRegistration())}
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
          Отмена регистрации
        </S.ModalHeaderWrapper>
      </Modal.Header>
      <Modal.Body>
        <S.ContentText>
          {modalOpportunityRemoveRegistration.legal.title}
        </S.ContentText>
        <S.ContentText>
          {modalOpportunityRemoveRegistration.state === 0
          && (
            <S.Confirmed $red>
              <Loading />
              {' '}
              <div>
                Ожидает подтверждения
                {' '}
                <S.Comment>
                  {modalOpportunityRemoveRegistration.comment}
                </S.Comment>
              </div>
            </S.Confirmed>
          )}
          {modalOpportunityRemoveRegistration.state === 1
          && (
            <S.Confirmed>
              <DocumentCheck />
              {' '}
              <div>
                Возможность зарегистрирована
                {' '}
                <S.Comment>
                  {modalOpportunityRemoveRegistration.comment}
                </S.Comment>
              </div>
            </S.Confirmed>
          )}
          {modalOpportunityRemoveRegistration.state === 2
          && (
            <S.Confirmed $red>
              <DocumentCheck2 />
              {' '}
              <div>
                В регистрации отказано
                {' '}
                <S.Comment>
                  {modalOpportunityRemoveRegistration.comment}
                </S.Comment>
              </div>
            </S.Confirmed>
          )}
        </S.ContentText>
        <S.ContentText>
          Вы можете отменить регистрацию, поставщик получит соответствующее уведомление от нашего бота.
        </S.ContentText>
      </Modal.Body>
      <Modal.Footer panel>
        <ThemeContext.Provider value={FLAT_THEME}>
          <Button
            style={{
              margin: '0 10px 0 0'
            }}
            use="danger"
            size="medium"
            onClick={() => handleSubmit()}
          >
            Отменить регистрацию
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityRemoveRegistration())}
          >
            Отменить
          </Button>
        </ThemeContext.Provider>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOpportunityAddRegistration;
