import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Button,
  Textarea,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityDescriptionEdit = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();
  const [opportunityDescription, setOpportunityDescription] = useState(activeOpportunity.description || '');

  const onOpportunityDescriptionChange = value => {
    if (value.length <= 400) {
      setOpportunityDescription(value);
    }
  };

  const handleSubmit = () => {
    dispatch(objectDetailedActionCreator.changeOpportunity({
      opportunity: {
        id: activeOpportunity.id,
        description: opportunityDescription
      }
    }));
    dispatch(objectDetailedActionCreator.setModalOpportunityDescriptionEdit());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityDescriptionEdit())}
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
              <div>Описание возможности:</div>
              <div>{`${opportunityDescription.length}/400`}</div>
            </S.ContentTitle>
            <Textarea
              style={{
                width: '100%'
              }}
              placeholder="Введите описание"
              autoResize
              value={opportunityDescription}
              onValueChange={onOpportunityDescriptionChange}
            />
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityDescriptionEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalOpportunityDescriptionEdit;
