import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Hint, Button, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Phone2 } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalHistoryMakeCall = () => {
  const {
    legalPersonsWithEmployees,
    opportunitiesWithPersons
  } = useSelector(store => ({
    legalPersonsWithEmployees: store.objectDetailed.legalPersonsWithEmployees,
    opportunitiesWithPersons: store.objectDetailed.opportunitiesWithPersons
  }));
  const dispatch = useDispatch();
  const [activePersons] = useState(() => {
    const data = [...legalPersonsWithEmployees];

    opportunitiesWithPersons.forEach(
      opportunity => opportunity.legalPersonsWithEmployees.forEach(
        legalPerson => {
          const findedPerson = data.find(elem => elem.legalPerson === legalPerson.legalPerson);

          if (findedPerson) {
            data[data.indexOf(findedPerson)] = {
              ...data[data.indexOf(findedPerson)],
              activeEmployees: [
                ...data[data.indexOf(findedPerson)].activeEmployees,
                ...legalPerson.activeEmployees.filter(
                  elem => !data[data.indexOf(findedPerson)].activeEmployees.find(
                    item => item.id === elem.id
                  )
                )
              ]
            };
          } else if (!findedPerson) {
            data.push(legalPerson);
          }
        }
      )
    );

    return data;
  });

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalHistoryMakeCall())}
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
          {activePersons.find(
            legalPerson => legalPerson.activeEmployees.find(
              employee => employee.phones
            )
          )
            ? activePersons.map(legalPerson => (
              <Fragment key={legalPerson.id}>
                {legalPerson.activeEmployees.length > 0
                && (
                  <>
                    <S.Name>
                      {legalPerson.legalPersonName}
                    </S.Name>
                    <S.PhonesDataContainer>
                      {legalPerson.activeEmployees.map(employee => (
                        <Fragment key={employee.id}>
                          <S.FlexContainer
                            $direction="column"
                          >
                            {employee.phones.split(',').map(phone => (
                              <S.PhoneRow
                                key={phone}
                                $align="center"
                              >
                                <Button
                                  style={{
                                    margin: '0 15px 0 0'
                                  }}
                                  disabled={!employee.phones}
                                  onClick={() => {
                                    if (employee.phones) {
                                      dispatch(objectDetailedActionCreator.makeCall(phone));
                                    }
                                  }}
                                >
                                  <Phone2 />
                                </Button>
                                <div>
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
                              text={employee.posts.find(post => post.legalPerson === legalPerson.legalPerson)?.post}
                              style={{
                                lineHeight: '20px',
                                fontFamily: '"Ubuntu", sans-serif'
                              }}
                            >
                              {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
                            </Hint>
                          </S.NameRow>
                        </Fragment>
                      ))}
                    </S.PhonesDataContainer>
                  </>
                )}
              </Fragment>
            )) : (
              <div>
                У связанных контрагентов и сотрудников нет добавленных телефонных номеров.
                Для звонков добавьте номера соответствующим контрагентам и сотрудникам.
              </div>
            )}
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            size="medium"
            onClick={() => dispatch(objectDetailedActionCreator.setModalHistoryMakeCall())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalHistoryMakeCall;
