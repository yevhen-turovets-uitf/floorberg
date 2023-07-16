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

const ModalMainInfoAddressEdit = () => {
  const {
    activeObject,
    dadataAddresses
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    dadataAddresses: store.objectDetailed.dadataAddresses
  }));
  const dispatch = useDispatch();
  const [isHint, setHint] = useState(false);
  const [newAddress, setNewAddress] = useState(activeObject.address || '');
  const [fias, setFias] = useState('');
  const [requestAddress, setRequestAddress] = useState('');
  const [position, setPosition] = useState('');
  const [isValidAddress, setValidAddress] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(false);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(newAddress))
      && fias;

    setSubmitValid(isValid);
  }, [fias, newAddress]);

  const validateAddress = () => {
    const isValid = !validator.isEmpty(validator.trim(newAddress));

    setValidAddress(isValid);
  };

  const onObjectAddressChange = value => {
    if (!value) {
      setFias('');
    }
    setNewAddress(value);
    dispatch(objectDetailedActionCreator.updateDadataAddresses(value));
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
    setNewAddress(value);
    dispatch(objectDetailedActionCreator.updateDadataAddresses(value));
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

      dispatch(objectDetailedActionCreator.updateObjectData(requestData));
    }
    dispatch(objectDetailedActionCreator.setModalMainInfoAddressEdit());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalMainInfoAddressEdit())}
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
            Адрес
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
                value={newAddress}
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
            {isHint && activeObject.address && dadataAddresses && (
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalMainInfoAddressEdit())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalMainInfoAddressEdit;
