import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Hint, Button, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Phone2 } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalPersonsMakeCall = () => {
  const {
    modalPersonsMakeCall
  } = useSelector(store => ({
    modalPersonsMakeCall: store.objectDetailed.modalPersonsMakeCall
  }));
  const dispatch = useDispatch();

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalPersonsMakeCall())}
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
            Исходящий вызов
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ContentTitle>
            С этой формы можно звонить!
            Нажмите на кнопку вызова и Вам на телефон поступит звонок,
            соединяющий Вас с выбранным абонентом.
          </S.ContentTitle>
          <S.Name>
            {modalPersonsMakeCall.legalPersonName}
          </S.Name>
          <S.PhonesDataContainer>
            <S.FlexContainer
              $direction="column"
            >
              {modalPersonsMakeCall.employee.phones.split(',').map(phone => (
                <S.PhoneRow
                  $align="center"
                >
                  <Button
                    style={{
                      margin: '0 15px 0 0'
                    }}
                    onClick={() => {
                      dispatch(objectDetailedActionCreator.makeCall(phone));
                    }}
                  >
                    <Phone2 />
                  </Button>
                  <div
                    $align="center"
                  >
                    {phone}
                  </div>
                </S.PhoneRow>
              ))}
            </S.FlexContainer>
            <S.NameRow
              $align="center"
            >
              <Hint
                pos="bottom left"
                maxWidth="250px"
                text={modalPersonsMakeCall.legalPersonName}
                style={{
                  lineHeight: '20px',
                  fontFamily: '"Ubuntu", sans-serif'
                }}
              >
                {`
                  ${modalPersonsMakeCall.employee.lastName} 
                  ${modalPersonsMakeCall.employee.firstName} 
                  ${modalPersonsMakeCall.employee.middleName}
                `}
              </Hint>
            </S.NameRow>
          </S.PhonesDataContainer>
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsMakeCall())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalPersonsMakeCall;
