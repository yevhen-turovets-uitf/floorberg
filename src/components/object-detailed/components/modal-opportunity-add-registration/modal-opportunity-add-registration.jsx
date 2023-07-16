import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Button,
  Hint,
  Radio,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalOpportunityAddRegistration = () => {
  const {
    activeOpportunity,
    materialProviders
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity,
    materialProviders: store.objectDetailed.materialProviders
  }));
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState();

  const handleSubmit = () => {
    if (radioValue) {
      dispatch(objectDetailedActionCreator.addRegistration(radioValue));
    }
    dispatch(objectDetailedActionCreator.setModalOpportunityAddRegistration());
  };

  return (
    <Modal
      width="600px"
      onClose={() => dispatch(objectDetailedActionCreator.setModalOpportunityAddRegistration())}
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
          Регистрация потенциальной сделки
        </S.ModalHeaderWrapper>
      </Modal.Header>
      <Modal.Body>
        {activeOpportunity.registrations.length > 0
          && (
            <S.ContentText>
              <b>
                Внимание!
              </b>
              {' '}
              Вы уже имеете регистрации поставщиков по данной возможности,
              если вы хотите зарегистрировать один и тот же предмет продажи
              у разных поставщиков одновременно,
              {' '}
              <b>
                это запрещено соглашением с
                поставщиками и создает конфликт интересов!
              </b>
            </S.ContentText>
          )}
        <S.ContentText>
          Выберите поставщика для регистрации
        </S.ContentText>
        {materialProviders.map(provider => (
          <S.RadioButton key={provider.company.id}>
            {activeOpportunity.registrations.find(
              registration => registration.legal.id === provider.company.id
            )
              ? (
                <Hint
                  pos="bottom left"
                  maxWidth="250px"
                  text="Данная возможность, уже имеет запрос регистрации у данного поставщика."
                  style={{
                    lineHeight: '20px',
                    fontFamily: '"Ubuntu", sans-serif'
                  }}
                >
                  <Radio
                    disabled
                  >
                    {provider.company.title}
                  </Radio>
                </Hint>
              )
              : (
                <Radio
                  checked={radioValue === provider.company.id}
                  value={provider.company.id}
                  onValueChange={value => {
                    setRadioValue(value);
                  }}
                >
                  {provider.company.title}
                  {' '}
                  <S.Comment>
                    (
                    {provider.company.comment}
                    )
                  </S.Comment>
                </Radio>
              )}
          </S.RadioButton>
        ))}
        <S.ContentText>
          Выбрав поставщика и отправив запрос, вы инициируете регистрацию сделки.
          Поставщик получив уведомление, проверит возможность регистрации.
        </S.ContentText>
        <S.ContentText>
          В результате регистрация будет подтверждена или отклонена поставщиком.
        </S.ContentText>
      </Modal.Body>
      <Modal.Footer panel>
        <ThemeContext.Provider value={FLAT_THEME}>
          <Button
            disabled={!radioValue}
            style={{
              margin: '0 10px 0 0'
            }}
            use="primary"
            size="medium"
            onClick={() => handleSubmit()}
          >
            Запросить регистрацию
          </Button>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalOpportunityAddRegistration())}
          >
            Отменить
          </Button>
        </ThemeContext.Provider>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOpportunityAddRegistration;
