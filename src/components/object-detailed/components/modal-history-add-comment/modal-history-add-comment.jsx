import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import { Modal, Hint, Button, Checkbox, Textarea, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ModalHistoryAddComment = () => {
  const {
    activeObject,
    legalPersonsWithEmployees,
    opportunitiesWithPersons
  } = useSelector(store => ({
    activeObject: store.objectDetailed.activeObject,
    legalPersonsWithEmployees: store.objectDetailed.legalPersonsWithEmployees,
    opportunitiesWithPersons: store.objectDetailed.opportunitiesWithPersons
  }));
  const dispatch = useDispatch();
  const [personsCheck, setPersonsCheck] = useState(() => {
    const data = [...legalPersonsWithEmployees];

    opportunitiesWithPersons
      .filter(
        elem => elem.status === '0'
      )
      .forEach(
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

    return data.map(
      legalPerson => ({
        ...legalPerson,
        activeEmployees: legalPerson.activeEmployees.map(
          employee => ({
            ...employee,
            checked: false
          })
        )
      })
    );
  });
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
  const [naturalPeople, setNaturalPeople] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [description, setDescription] = useState('');
  const [isValidDescription, setValidDescription] = useState(true);
  const [isSubmitValid, setSubmitValid] = useState(false);

  useEffect(() => {
    const isValid = !validator.isEmpty(validator.trim(description))
      && description.length >= 10;

    setSubmitValid(isValid);
  }, [description]);

  const validateDescription = () => {
    const isValid = !validator.isEmpty(validator.trim(description))
      && description.length >= 10;

    setValidDescription(isValid);
  };

  const onPersonCheckChange = (value, legalPersonIndex, employeeIndex) => {
    const newPersonsData = [...personsCheck];
    newPersonsData[legalPersonIndex].activeEmployees[employeeIndex].checked = value;

    setPersonsCheck(newPersonsData);
    setNaturalPeople(newPersonsData.map(
      legalPerson => legalPerson.activeEmployees
        .filter(employee => employee.checked)
        .map(employee => employee.id)
    ).flat());
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
      dispatch(objectDetailedActionCreator.addEventWithEmployees({
        objects: [activeObject.id],
        naturalPeople,
        opportunities,
        text: description
      }));
    }
    dispatch(objectDetailedActionCreator.setModalHistoryAddComment());
  };

  return (
    <ThemeContext.Provider value={FLAT_THEME}>
      <Modal
        width="600px"
        onClose={() => dispatch(objectDetailedActionCreator.setModalHistoryAddComment())}
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
            Добавить комментарий
          </S.ModalHeaderWrapper>
        </Modal.Header>
        <Modal.Body>
          <S.ContentTitle>
            Отметьте связь с сотрудниками, если она имеется
          </S.ContentTitle>
          <div>
            {personsCheck.map((legalPerson, legalPersonIndex) => (
              <Fragment key={legalPerson.id}>
                {legalPerson.activeEmployees.length > 0
                && (
                  <>
                    <S.Name>{legalPerson.legalPersonName}</S.Name>
                    {legalPerson.activeEmployees.map((employee, employeeIndex) => (
                      <S.CheckboxContainer key={employee.id}>
                        <Checkbox
                          disabled={employee.disabled}
                          checked={employee.checked}
                          onValueChange={value => onPersonCheckChange(value, legalPersonIndex, employeeIndex)}
                        >
                          <Hint
                            pos="right"
                            maxWidth="250px"
                            text={employee.posts.find(post => post.legalPerson === legalPerson.legalPerson)?.post}
                            style={{
                              lineHeight: '20px',
                              fontFamily: '"Ubuntu", sans-serif'
                            }}
                          >
                            {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
                          </Hint>
                        </Checkbox>
                      </S.CheckboxContainer>
                    ))}
                  </>
                )}
              </Fragment>
            ))}
          </div>
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
            Комментарий
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
            onClick={() => dispatch(objectDetailedActionCreator.setModalHistoryAddComment())}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </Modal>
    </ThemeContext.Provider>
  );
};

export default ModalHistoryAddComment;
