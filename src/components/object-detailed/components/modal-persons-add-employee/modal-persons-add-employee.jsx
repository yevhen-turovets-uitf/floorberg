import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  Input,
  Button,
  ThemeContext,
  FLAT_THEME
} from '@skbkontur/react-ui';
import validator from 'validator';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalPersonsAddEmployee = () => {
  const {
    modalPersonsAddEmployee
  } = useSelector(store => ({
    modalPersonsAddEmployee: store.objectDetailed.modalPersonsAddEmployee
  }));
  const dispatch = useDispatch();
  const [employeeName, setEmployeeName] = useState('');
  const [employeePost, setEmployeePost] = useState('');
  const [employeePhone, setEmployeePhone] = useState('');
  const [employeeMail, setEmployeeMail] = useState('');
  const [isValidName, setValidName] = useState(true);
  const [isValidPost, setValidPost] = useState(true);
  const [isValidPhone, setValidPhone] = useState(true);
  const [isValidMail, setValidMail] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(false);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(employeeName))
      && !validator.isEmpty(validator.trim(employeePost))
      && employeePhone.length === 11
      && !validator.isEmpty(validator.trim(employeeMail))
      && validator.isEmail(employeeMail);

    setSubmitValid(isValid);
  }, [employeeMail, employeeName, employeePhone, employeePost]);

  const validateEmployeeName = () => {
    const isValid = !validator.isEmpty(validator.trim(employeeName));

    setValidName(isValid);
  };

  const validateEmployeePost = () => {
    const isValid = !validator.isEmpty(validator.trim(employeePost));

    setValidPost(isValid);
  };

  const validateEmployeePhone = () => {
    const isValid = employeePhone.length === 11;

    setValidPhone(isValid);
  };

  const validateEmployeeMail = () => {
    const isValid = !validator.isEmpty(validator.trim(employeeMail))
      && validator.isEmail(employeeMail);

    setValidMail(isValid);
  };

  const handleSubmit = () => {
    if (isSubmitValid) {
      dispatch(objectDetailedActionCreator.createNaturalPerson(
        modalPersonsAddEmployee.legalPerson,
        {
          post: employeePost,
          is_manager: false,
          person: {
            name: employeeName,
            phone: employeePhone,
            email: employeeMail
          }
        }
      ));
    }
    dispatch(objectDetailedActionCreator.setModalPersonsAddEmployee());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalPersonsAddEmployee())}
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
            Создать сотрудника
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ModalInputContainer>
            Фамилия, Имя, Отчество:
            <Input
              style={{
                width: '100%',
                margin: '10px 0 15px 0'
              }}
              placeholder="Введите известные Вам данные"
              value={employeeName}
              error={!isValidName}
              onValueChange={setEmployeeName}
              onFocus={() => setValidName(true)}
              onBlur={validateEmployeeName}
            />
          </S.ModalInputContainer>
          <S.ModalFlexInputContainer
            $justify="space-between"
          >
            <S.SmallInput>
              Мобильный номер:
              <Input
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                prefix="+"
                placeholder="7"
                mask="79999999999"
                value={employeePhone}
                error={!isValidPhone}
                onValueChange={setEmployeePhone}
                onFocus={() => setValidPhone(true)}
                onBlur={validateEmployeePhone}
              />
            </S.SmallInput>
            <S.SmallInput>
              Email:
              <Input
                style={{
                  width: '100%',
                  margin: '10px 0 15px 0'
                }}
                placeholder="Электронная почта"
                value={employeeMail}
                error={!isValidMail}
                onValueChange={setEmployeeMail}
                onFocus={() => setValidMail(true)}
                onBlur={validateEmployeeMail}
              />
            </S.SmallInput>
          </S.ModalFlexInputContainer>
          <S.ModalInputContainer>
            Должность:
            <Input
              style={{
                width: '100%',
                margin: '10px 0 15px 0'
              }}
              placeholder="Занимаемая должность"
              value={employeePost}
              error={!isValidPost}
              onValueChange={setEmployeePost}
              onFocus={() => setValidPost(true)}
              onBlur={validateEmployeePost}
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsAddEmployee())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalPersonsAddEmployee;
