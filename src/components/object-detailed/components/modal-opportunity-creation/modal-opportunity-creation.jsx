import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Input,
  Button,
  Select,
  DatePicker,
  Textarea,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { Clock } from '@skbkontur/react-icons';
import validator from 'validator';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityCreation = () => {
  const {
    opportunitiesDirections
  } = useSelector(store => ({
    opportunitiesDirections: store.objectDetailed.opportunitiesDirections
  }));
  const dispatch = useDispatch();
  const [opportunityName, setOpportunityName] = useState('');
  const [opportunityType, setOpportunityType] = useState(undefined);
  const [opportunityDirection, setOpportunityDirection] = useState(undefined);
  const [opportunityCost, setOpportunityCost] = useState('');
  const [opportunityDate, setOpportunityDate] = useState('');
  const [opportunityTime, setOpportunityTime] = useState('');
  const [opportunityDescription, setOpportunityDescription] = useState('');
  const [isValidName, setValidName] = useState(true);
  const [isValidCost, setValidCost] = useState(true);
  const [isValidDate, setValidDate] = useState(true);
  const [isValidTime, setValidTime] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(false);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(opportunityName))
      && opportunityType
      && opportunityDirection
      && !validator.isEmpty(validator.trim(opportunityCost))
      && validator.isNumeric(opportunityCost, { no_symbols: true })
      && Date.parse(`${opportunityDate.split('.').reverse().join('-')}T${opportunityTime || '00:00'}:00.000Z`);

    setSubmitValid(isValid);
  }, [opportunityCost, opportunityDate, opportunityDirection, opportunityName, opportunityTime, opportunityType]);

  useEffect(() => {
    const isValid = !opportunityDate
      || !!Date.parse(`${opportunityDate.split('.').reverse().join('-')}T00:00:00.000Z`);

    setValidDate(isValid);
  }, [opportunityDate]);

  const validateTime = () => {
    const isValid = !opportunityTime
      || !!Date.parse(`${opportunityDate.split('.').reverse().join('-')}T${opportunityTime}:00.000Z`);

    setValidTime(isValid);
  };

  const validateName = () => {
    const isValid = !validator.isEmpty(validator.trim(opportunityName));

    setValidName(isValid);
  };

  const validateCost = () => {
    const isValid = !validator.isEmpty(validator.trim(opportunityCost))
      && validator.isNumeric(opportunityCost, { no_symbols: true });

    setValidCost(isValid);
  };

  const handleSubmit = () => {
    if (isSubmitValid) {
      const dateString = opportunityDate.split('.').reverse().join('-');

      dispatch(objectDetailedActionCreator.addOpportunity({
        name: opportunityName,
        type: opportunityType,
        direction: opportunityDirection,
        budget: opportunityCost,
        date: `${dateString}T${opportunityTime}:00.000Z`,
        description: opportunityDescription,
        probability: 0
      }));
    }
    dispatch(objectDetailedActionCreator.setModalOpportunityCreation());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityCreation())}
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
            Создание потенциальной возможности
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            Наименование возможности:
            <Input
              style={{
                width: '100%',
                margin: '10px 0 15px 0'
              }}
              placeholder="Введите наименование"
              value={opportunityName}
              error={!isValidName}
              onValueChange={setOpportunityName}
              onFocus={() => setValidName(true)}
              onBlur={validateName}
            />
          </S.ModalInputContainer>
          <S.ModalFlexInputContainer
            $justify="space-between"
          >
            <S.SmallInput>
              Тип:
              <Select
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                placeholder="Выберите тип"
                value={opportunityType}
                items={['Новое строительство', 'Реконструкция/ремонт']}
                onValueChange={setOpportunityType}
              />
            </S.SmallInput>
            <S.SmallInput>
              Направление:
              <Select
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                placeholder="Выберите направление"
                value={opportunityDirection}
                items={opportunitiesDirections.map(item => [item.id, item.name])}
                onValueChange={setOpportunityDirection}
              />
            </S.SmallInput>
          </S.ModalFlexInputContainer>
          <S.ModalFlexInputContainer
            $justify="space-between"
          >
            <S.SmallInput>
              Предполагаемый бюджет:
              <Input
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                placeholder="Введите примерную сумму"
                value={opportunityCost}
                error={!isValidCost}
                onValueChange={setOpportunityCost}
                onFocus={() => setValidCost(true)}
                onBlur={validateCost}
              />
            </S.SmallInput>
            <S.SmallInput>
              Дата потери актуальности:
              <DatePicker
                style={{
                  margin: '10px 10px 15px 0'
                }}
                error={!isValidDate}
                value={opportunityDate}
                onValueChange={setOpportunityDate}
              />
              <Input
                style={{
                  margin: '10px 0 15px 0',
                  width: '85px'
                }}
                error={!isValidTime}
                rightIcon={<Clock color="#333333" />}
                value={opportunityTime}
                mask="29:59"
                formatChars={{
                  2: '[0-2]',
                  5: '[0-5]',
                  9: '[0-9]'
                }}
                placeholder="09:00"
                onFocus={() => setValidTime(true)}
                onBlur={validateTime}
                onValueChange={setOpportunityTime}
              />
            </S.SmallInput>
          </S.ModalFlexInputContainer>
          <S.ModalInputContainer>
            Описание возможности
            <Textarea
              style={{
                width: '100%',
                margin: '10px 0 0 0'
              }}
              placeholder="Введите описание"
              autoResize
              value={opportunityDescription}
              onValueChange={setOpportunityDescription}
            />
          </S.ModalInputContainer>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={!isSubmitValid}
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityCreation())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalOpportunityCreation;
