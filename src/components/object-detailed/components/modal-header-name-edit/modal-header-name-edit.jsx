import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Input,
  Button,
  Tooltip,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import validator from 'validator';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const allowedPositions = [
  'right middle',
  'top right',
  'top center',
  'top left',
  'left middle'
];

const ModalHeaderNameEdit = () => {
  const {
    activeObject
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject
  }));
  const dispatch = useDispatch();
  const [objectName, setObjectName] = useState(activeObject.name || '');
  const [isValidName, setValidName] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(!!activeObject.name);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(objectName));

    setSubmitValid(isValid);
  }, [objectName]);

  const validateObjectName = () => {
    const isValid = !validator.isEmpty(validator.trim(objectName));

    setValidName(isValid);
  };

  const handleSubmit = () => {
    if (isSubmitValid) {
      dispatch(objectDetailedActionCreator.updateObjectData({ object: { name: objectName } }));
    }
    dispatch(objectDetailedActionCreator.setModalHeaderNameEdit());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalHeaderNameEdit())}
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
            Название
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            Название объекта:
            <Tooltip
              style={{
                fontSize: '13px',
                lineHeight: '20px',
                fontFamily: '"Ubuntu", sans-serif',
                maxWidth: '380px'
              }}
              pos="right middle"
              allowedPositions={allowedPositions}
              trigger="hover"
              render={() => (
                <div>
                  <S.InnerText>
                    Название объекта должно быть емким и понятным,
                    недопустимо добавлять в название любые данные не описывающие сам объект.
                    Объектом не может быть помещение в здании или описание возможной сделки
                  </S.InnerText>
                  <S.InnerText>
                    <div>
                      <S.RedText>Не правильно:</S.RedText>
                      {' '}
                      Поставка кровли на завод &ldquo;Звезда&ldquo;
                    </div>
                    <div>
                      <S.GreenText>Правильно:</S.GreenText>
                      {' '}
                      Судоремонтный завод &ldquo;Звезда&ldquo;
                    </div>
                  </S.InnerText>
                  <S.InnerText>
                    <div>
                      <S.RedText>Не правильно:</S.RedText>
                      {' '}
                      Спорт Зал 611,5 М2 Покрытия Pulastic
                    </div>
                    <div>
                      <S.GreenText>Правильно:</S.GreenText>
                      {' '}
                      Лыжная Спортивная школа
                    </div>
                  </S.InnerText>
                </div>
              )}
            >
              <Input
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                placeholder="Введите название"
                value={objectName}
                error={!isValidName}
                onFocus={() => setValidName(true)}
                onBlur={validateObjectName}
                onValueChange={setObjectName}
              />
            </Tooltip>
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalHeaderNameEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalHeaderNameEdit;
