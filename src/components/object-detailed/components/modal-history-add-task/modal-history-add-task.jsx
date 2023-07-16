import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import { Modal, Input, Button, DatePicker, Checkbox, Textarea, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Clock } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalHistoryAddTask = () => {
  const {
    activeObject,
    user
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    user: store.objectList.user
  }));
  const dispatch = useDispatch();
  const [opportunitiesCheck, setOpportunitiesCheck] = useState(
    activeObject.opportunities
      .filter(
        elem => elem.status === '0'
      )
      .map(
        opportunity => ({
          ...opportunity,
          checked: false
        })
      )
  );
  const [orientedDate, setOrientedDate] = useState('');
  const [orientedTime, setOrientedTime] = useState('');
  const [opportunities, setOpportunities] = useState([]);
  const [description, setDescription] = useState('');
  const [isValidDate, setValidDate] = useState(true);
  const [isValidTime, setValidTime] = useState(true);
  const [isValidDescription, setValidDescription] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(false);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(description))
      && description.length >= 10
      && (!!Date.parse(`${orientedDate.split('.').reverse().join('-')}T${orientedTime || '00:00'}:00.000Z`)
        || !orientedDate);

    setSubmitValid(isValid);
  }, [description, orientedDate, orientedTime]);

  useEffect(() => {
    const isValid = !!Date.parse(`${orientedDate.split('.').reverse().join('-')}T00:00:00.000Z`);

    setValidDate(isValid);
  }, [orientedDate]);

  useEffect(() => {
    if (!isValidDate) {
      setOrientedTime('');
    }
  }, [isValidDate]);

  const validateTime = () => {
    const isValid = !orientedTime
      || !!Date.parse(`${orientedDate.split('.').reverse().join('-')}T${orientedTime}:00.000Z`);

    setValidTime(isValid);
  };

  const validateDescription = () => {
    const isValid = !validator.isEmpty(validator.trim(description))
      && description.length >= 10;

    setValidDescription(isValid);
  };

  const removeDate = () => {
    setOrientedDate('');
    setOrientedTime('');
    setValidDate(true);
    setValidTime(true);
  };

  const onOpportunitiesCheckChange = (value, opportunityIndex) => {
    const newOpportunitiesData = [...opportunitiesCheck];
    newOpportunitiesData[opportunityIndex].checked = value;

    setOpportunitiesCheck(newOpportunitiesData);
    setOpportunities(newOpportunitiesData
      .filter(opportunity => opportunity.checked)
      .map(opportunity => opportunity.id));
  };

  const handleSubmit = () => {
    if (isSubmitValid) {
      const dateString = orientedDate.split('.').reverse().join('-');
      let fullDate = '1970-01-01T00:00:00.000Z';

      if (dateString && orientedTime) {
        fullDate = `${dateString}T${orientedTime}:00.000Z`;
      }
      if (dateString && !orientedTime) {
        fullDate = `${dateString}T00:00:00.000Z`;
      }

      dispatch(objectDetailedActionCreator.addTask({
        ext_time: fullDate,
        from: user.id,
        to: user.id,
        opportunities,
        text: description
      }));
    }
    dispatch(objectDetailedActionCreator.setModalHistoryAddTask());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalHistoryAddTask())}
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
            Добавить задачу
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ContentTitle>
            Срок выполнения
          </S.ContentTitle>
          <S.FlexContainer
            $align="center"
          >
            <DatePicker
              style={{
                margin: '0 10px 0 0'
              }}
              value={orientedDate}
              error={!isValidDate && !!orientedDate}
              onFocus={() => setValidDate(true)}
              onValueChange={setOrientedDate}
            />
            <Input
              style={{
                margin: '0 10px 0 0',
                width: '85px'
              }}
              error={!isValidTime}
              disabled={orientedDate.length !== 10}
              rightIcon={<Clock color="#333333" />}
              value={orientedTime}
              mask="29:59"
              formatChars={{
                2: '[0-2]',
                5: '[0-5]',
                9: '[0-9]'
              }}
              placeholder="09:00"
              onFocus={() => setValidTime(true)}
              onBlur={validateTime}
              onValueChange={setOrientedTime}
            />
            <Checkbox
              checked={!orientedDate && !orientedTime}
              onValueChange={removeDate}
            >
              Без срока
            </Checkbox>
          </S.FlexContainer>
          {opportunitiesCheck.length > 0
          && (
            <>
              <S.ContentTitle>
                Отметьте связь с возможностью, если она имеется
              </S.ContentTitle>
              <div>
                {opportunitiesCheck.map((opportunity, opportunityIndex) => (
                  <S.CheckboxContainer key={opportunity.id}>
                    <Checkbox
                      disabled={opportunity.disabled}
                      checked={opportunity.checked}
                      onValueChange={value => onOpportunitiesCheckChange(value, opportunityIndex)}
                    >
                      {opportunity.name}
                    </Checkbox>
                  </S.CheckboxContainer>
                ))}
              </div>
            </>
          )}
          <S.ContentTitle>
            Описание задачи
          </S.ContentTitle>
          <Textarea
            placeholder="Введите комментарий"
            width="100%"
            resize="none"
            error={!isValidDescription}
            value={description}
            onFocus={() => setValidDescription(true)}
            onBlur={validateDescription}
            onValueChange={setDescription}
          />
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={!isSubmitValid}
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalHistoryAddTask())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalHistoryAddTask;
