import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Select,
  Button,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalPersonsChangeLegalRole = () => {
  const {
    contentView,
    legalPersonPossibleRoles,
    modalPersonsChangeLegalRole
  } = useSelector(store => ({
    contentView: store.objectDetailed.contentView,
    legalPersonPossibleRoles: store.objectDetailed.legalPersonPossibleRoles,
    modalPersonsChangeLegalRole: store.objectDetailed.modalPersonsChangeLegalRole
  }));
  const dispatch = useDispatch();
  const [rolesValue, setRolesValue] = useState(modalPersonsChangeLegalRole.role.id);

  const handleSubmit = () => {
    const data = {
      id: modalPersonsChangeLegalRole.id,
      role: rolesValue,
      legalPerson: modalPersonsChangeLegalRole.legalPerson
    };

    if (rolesValue && contentView === 'object') {
      dispatch(objectDetailedActionCreator.updateLegalPersonRoles(data));
    }
    if (rolesValue && contentView === 'opportunities') {
      dispatch(objectDetailedActionCreator.updateOpportunitiesLegalPersonRoles(data));
    }
    dispatch(objectDetailedActionCreator.setModalPersonsChangeLegalRole());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalPersonsChangeLegalRole())}
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
            Выбрать роль
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <Select
            width="100%"
            items={legalPersonPossibleRoles.map(item => [item.id, item.name])}
            value={rolesValue}
            onValueChange={value => setRolesValue(value)}
          />
        </Modal.Body>
        <Modal.Footer panel>
          <Button
            disabled={!(rolesValue)}
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsChangeLegalRole())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalPersonsChangeLegalRole;
