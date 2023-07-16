import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Input,
  Button,
  Select,
  DatePicker,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { Clock } from '@skbkontur/react-icons';
import validator from 'validator';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityDataEdit = () => {
  const {
    opportunitiesDirections,
    activeOpportunity
  } = useSelector(store => ({
    opportunitiesDirections: store.objectDetailed.opportunitiesDirections,
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();
  const [opportunityName, setOpportunityName] = useState(activeOpportunity.name);
  const [opportunityType, setOpportunityType] = useState(activeOpportunity.type);
  const [opportunityDirection, setOpportunityDirection] = useState(activeOpportunity.direction);
  const [opportunityCost, setOpportunityCost] = useState(`${activeOpportunity.budget}`);
  const [opportunityDate, setOpportunityDate] = useState(
    activeOpportunity.date.split(' ')[0].split('-').reverse().join('.')
  );
  const [opportunityTime, setOpportunityTime] = useState(
    () => {
      const timeArray = activeOpportunity.date.split(' ')[1].split(':');

      return `${timeArray[0]}:${timeArray[1]}`;
    }
  );
  const [isValidName, setValidName] = useState(true);
  const [isValidCost, setValidCost] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(true);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(opportunityName))
      && opportunityType
      && opportunityDirection
      && !validator.isEmpty(validator.trim(opportunityCost))
      && validator.isNumeric(opportunityCost, { no_symbols: true })
      && Date.parse(`${opportunityDate.split('.').reverse().join('-')}T${opportunityTime || '00:00'}:00.000Z`);

    setSubmitValid(isValid);
  }, [opportunityCost, opportunityDate, opportunityDirection, opportunityName, opportunityTime, opportunityType]);

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

      dispatch(objectDetailedActionCreator.changeOpportunity({
        opportunity: {
          id: activeOpportunity.id,
          name: opportunityName,
          type: opportunityType,
          direction: opportunityDirection,
          budget: opportunityCost,
          date: `${dateString}T${opportunityTime}:00.000Z`
        }
      }));
    }
    dispatch(objectDetailedActionCreator.setModalOpportunityCreation());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityDataEdit())}
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
                value={opportunityDate}
                onValueChange={setOpportunityDate}
              />
              <Input
                style={{
                  margin: '10px 0 15px 0',
                  width: '85px'
                }}
                rightIcon={<Clock color="#333333" />}
                value={opportunityTime}
                mask="29:59"
                formatChars={{
                  2: '[0-2]',
                  5: '[0-5]',
                  9: '[0-9]'
                }}
                placeholder="09:00"
                onValueChange={setOpportunityTime}
              />
            </S.SmallInput>
          </S.ModalFlexInputContainer>
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityDataEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalOpportunityDataEdit;
