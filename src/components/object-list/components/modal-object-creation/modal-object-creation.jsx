import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Input,
  Textarea,
  Button,
  Tooltip,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import validator from 'validator';
import { objectListActionCreator } from 'src/store/actions';
import * as S from './styles';

const allowedPositions = [
  'right middle',
  'top right',
  'top center',
  'top left',
  'left middle'
];

const ModalObjectCreation = () => {
  const {
    dadataAddresses
  } = useSelector(store => ({
    dadataAddresses: store.objectList.dadataAddresses
  }));
  const dispatch = useDispatch();
  const [isHint, setHint] = useState(false);
  const [address, setAddress] = useState('');
  const [objectName, setObjectName] = useState('');
  const [description, setDescription] = useState('');
  const [fias, setFias] = useState('');
  const [requestAddress, setRequestAddress] = useState('');
  const [position, setPosition] = useState('');
  const [isValidName, setValidName] = useState(true);
  const [isValidAddress, setValidAddress] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(false);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(objectName))
      && !validator.isEmpty(validator.trim(address))
      && fias;

    setSubmitValid(isValid);
  }, [objectName, address, fias]);

  const validateAddress = () => {
    const isValid = !validator.isEmpty(validator.trim(address));

    setValidAddress(isValid);
  };

  const validateObjectName = () => {
    const isValid = !validator.isEmpty(validator.trim(objectName));

    setValidName(isValid);
  };

  const onObjectAddressChange = value => {
    if (!value) {
      setFias('');
    }
    setAddress(value);
    dispatch(objectListActionCreator.updateDadataAddresses(value));
  };

  const onDescriptionChange = value => {
    if (value.length <= 400) {
      setDescription(value);
    }
  };

  const onSelectAddress = suggestion => {
    const { data, value } = suggestion;
    const location = [];

    if (data.street) {
      location.push(`${data.street_type}. ${data.street}`);
    }
    if (data.house) {
      location.push(`${data.house_type}. ${data.house}`);
    }
    if (data.flat) {
      location.push(`${data.flat_type}. ${data.flat}`);
    }
    setAddress(value);
    dispatch(objectListActionCreator.updateDadataAddresses(value));
    setRequestAddress(location.join(', '));
    setFias(
      data.city_fias_id
        || data.settlement_fias_id
        || data.area_fias_id
        || data.region_fias_id
        || ''
    );
    if (data.geo_lat && data.geo_lon) {
      setPosition(`${data.geo_lat},${data.geo_lon}`);
    }
  };

  const hintDelay = () => {
    setTimeout(() => {
      setHint(false);
    }, 250);
  };

  const handleSubmit = () => {
    if (isSubmitValid) {
      let positionData = {};
      const baseData = {
        address: requestAddress,
        name: objectName,
        description,
        fiasGUID: fias
      };

      if (position) {
        positionData = {
          points: [{
            id: 0,
            position
          }]
        };
      }

      const requestData = { object: { ...baseData, ...positionData } };

      dispatch(objectListActionCreator.createObject(requestData));
      dispatch(objectListActionCreator.setActivePage(1));
    }
    dispatch(objectListActionCreator.setModalObjectCreation());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectListActionCreator.setModalObjectCreation())}
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
            Создание объекта
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            Адрес объекта:
            <Tooltip
              style={{
                fontSize: '13px',
                lineHeight: '20px',
                fontFamily: '"Ubuntu", sans-serif',
                maxWidth: '360px'
              }}
              pos="right middle"
              allowedPositions={allowedPositions}
              trigger="hover"
              render={() => (
                <div>
                  <S.InnerText>
                    Если адрес известен, укажите его, если неизвестен или его
                    еще не существует, укажите здесь населенный пункт.
                  </S.InnerText>
                  <S.InnerText>
                    В случае нахождения объекта не в населенном пункте,
                    например это мост или дорожная развязка, укажите район
                    региона в котором он находится.
                  </S.InnerText>
                </div>
              )}
            >
              <Input
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                placeholder="Введите адрес"
                value={address}
                error={!isValidAddress}
                onValueChange={onObjectAddressChange}
                onFocus={() => {
                  setHint(true);
                  setValidAddress(true);
                }}
                onBlur={() => {
                  hintDelay();
                  validateAddress();
                }}
              />
            </Tooltip>
            {isHint && address && dadataAddresses.length > 0 && (
              <S.VariantsContainer>
                {dadataAddresses.map(item => (
                  <S.VariantsItem
                    key={item.value}
                    onClick={() => onSelectAddress(item)}
                  >
                    {item.value}
                  </S.VariantsItem>
                ))}
              </S.VariantsContainer>
            )}
          </S.ModalInputContainer>
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
          <S.ModalInputContainer>
            <S.ContentTitle
              $justify="space-between"
            >
              <div>Описание объекта:</div>
              <div>{`${description.length}/400`}</div>
            </S.ContentTitle>
            <Textarea
              style={{
                width: '100%',
                margin: '10px 0 15px 0'
              }}
              placeholder="Введите описание"
              autoResize
              value={description}
              onValueChange={onDescriptionChange}
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
            onClick={() => dispatch(objectListActionCreator.setModalObjectCreation())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalObjectCreation;
