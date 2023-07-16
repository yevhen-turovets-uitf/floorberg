import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import {
  Modal,
  Button,
  Input,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityAddEstimate = () => {
  const {
    activeOpportunity,
    findedEstimate
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity,
    findedEstimate: store.objectDetailed.findedEstimate
  }));
  const dispatch = useDispatch();
  const [estimateId, setEstimateId] = useState('');
  const [isValidEstimate, setValidEstimate] = useState(true);

  const [, cancel] = useDebounce(
    () => {
      dispatch(objectDetailedActionCreator.getFindedEstimate(estimateId));
    },
    500,
    [estimateId]
  );

  useEffect(() => () => cancel(), [cancel]);

  useEffect(() => () => dispatch(objectDetailedActionCreator.getFindedEstimate()), [dispatch]);

  const validateEstimateId = () => {
    const isValid = !!findedEstimate;

    setValidEstimate(isValid);
  };

  const handleSubmit = () => {
    if (findedEstimate) {
      dispatch(objectDetailedActionCreator.addEstimate(activeOpportunity.id, findedEstimate));
    }
    dispatch(objectDetailedActionCreator.setModalOpportunityAddEstimate());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityAddEstimate())}
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
            Привязка сметного расчета
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            Укажите сметный расчет:
            <Input
              style={{
                width: '130px',
                margin: '0 0 0 15px'
              }}
              error={!isValidEstimate}
              placeholder="Введите номер"
              value={estimateId}
              onFocus={() => setValidEstimate(true)}
              onBlur={validateEstimateId}
              onValueChange={setEstimateId}
            />
          </S.ModalInputContainer>
          <div>
            После ввода номер сметы и установления связи расчета
            с потенциальной возможностью сделки, будет открыт доступ
            к скачиванию сметного расчета и коммерческого предложения.
          </div>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={!(findedEstimate && isValidEstimate)}
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={() => handleSubmit()}
          >
            Установить связь
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityAddEstimate())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalOpportunityAddEstimate;
