import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import {
  Modal,
  Input,
  Select,
  Button,
  Hint,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalPersonsAddLegalPerson = () => {
  const {
    contentView,
    legalPersonsWithEmployees,
    legalPersonPossibleRoles,
    legalPersonsList,
    activeOpportunity
  } = useSelector(store => ({
    contentView: store.objectDetailed.contentView,
    legalPersonsWithEmployees: store.objectDetailed.legalPersonsWithEmployees,
    legalPersonPossibleRoles: store.objectDetailed.legalPersonPossibleRoles,
    legalPersonsList: store.objectDetailed.legalPersonsList,
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();
  const [isHint, setHint] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [rolesValue, setRolesValue] = useState(1);
  const [addingError, setAddingError] = useState(false);
  const [activePerson, setActivePerson] = useState();

  const [, cancel] = useDebounce(
    () => {
      dispatch(objectDetailedActionCreator.getLegalPersonsList(inputValue));
    },
    300,
    [inputValue]
  );

  useEffect(() => () => cancel(), [cancel]);

  const onSelectPerson = person => {
    setActivePerson(person);
    setInputValue(person.value);

    if (person.in_base_id) {
      setAddingError(!!legalPersonsWithEmployees.find(elem => elem.legalPerson === person.in_base_id));

      if (contentView === 'opportunities') {
        setAddingError(!!activeOpportunity.legalPersonsWithEmployees.find(
          elem => elem.legalPerson === person.in_base_id
        ));
      }
    }
  };

  const hintDelay = () => {
    setTimeout(() => {
      setHint(false);
    }, 250);
  };

  const onClose = () => {
    dispatch(objectDetailedActionCreator.getLegalPersonsList());
    dispatch(objectDetailedActionCreator.setModalPersonsAddLegalPerson());
  };

  const handleSubmit = () => {
    if ((activePerson && rolesValue) || !addingError) {
      const data = {
        id: 0,
        role: rolesValue
      };

      dispatch(objectDetailedActionCreator.getActiveLegalPerson(data, activePerson));
    }
    onClose();
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => onClose()}
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
            Добавление контрагента
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            <Input
              style={{
                width: '100%',
                margin: '10px 0 15px 0'
              }}
              placeholder="Введите ИНН, наименование или адрес контрагента"
              value={inputValue}
              onValueChange={setInputValue}
              onFocus={() => setHint(true)}
              onBlur={() => hintDelay()}
            />
            {isHint && inputValue && legalPersonsList && (
              <S.VariantsContainer>
                {legalPersonsList.map(item => (
                  <Hint
                    pos="top center"
                    maxWidth="450px"
                    text={item.in_base_id ? 'Данный контрагент уже был создан в нашей базе данных' : ''}
                    style={{
                      lineHeight: '20px',
                      fontFamily: '"Ubuntu", sans-serif'
                    }}
                  >
                    <S.VariantsItem
                      key={`${item.data.hid} + ${item.data.inn} + ${item.data.ogrn}`}
                      $color={item.in_base_id}
                      onClick={() => onSelectPerson(item)}
                    >
                      <S.VariantsItemMask>
                        <S.MainInfo
                          $align="center"
                          $justify="space-between"
                        >
                          <div>
                            {item.value}
                          </div>
                          <S.CounterpartiesInn>
                            {item.data.inn}
                          </S.CounterpartiesInn>
                        </S.MainInfo>
                        <S.Address>
                          {item.data.address.unrestricted_value}
                        </S.Address>
                        {item.data?.management?.post && item.data?.management?.name && (
                          <S.Post>
                            {`${item.data?.management?.post} - ${item.data?.management?.name}`}
                          </S.Post>
                        )}
                      </S.VariantsItemMask>
                    </S.VariantsItem>
                  </Hint>
                ))}
              </S.VariantsContainer>
            )}
          </S.ModalInputContainer>
          {addingError && (
            <S.AddingError>
              Выбранный контрагент уже существует.
            </S.AddingError>
          )}
          {activePerson
          && (
            <>
              <S.CounterpartiesInfo>
                <div>
                  Наименование:
                </div>
                <div>
                  {activePerson.value}
                </div>
                <div>
                  ИНН:
                </div>
                <div>
                  {activePerson.data.inn}
                </div>
                <div>
                  КПП:
                </div>
                <div>
                  {activePerson.data.kpp}
                </div>
                <div>
                  ОГРН:
                </div>
                <div>
                  {activePerson.data.ogrn}
                </div>
                <div>
                  Адрес:
                </div>
                <div>
                  {activePerson.data.address.unrestricted_value}
                </div>
              </S.CounterpartiesInfo>
              <S.CounterpartiesRole>
                Укажите какую роль контрагент выполняет по отношению к потенциално возможной сделке или объекту.
              </S.CounterpartiesRole>
              <Select
                width="100%"
                items={legalPersonPossibleRoles.map(item => [item.id, item.name])}
                value={rolesValue}
                onValueChange={setRolesValue}
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={!(activePerson && rolesValue) || addingError}
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
            onClick={() => onClose()}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalPersonsAddLegalPerson;
