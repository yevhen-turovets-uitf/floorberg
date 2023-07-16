import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Center, Tooltip, Button, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Add, UserAdd } from '@skbkontur/react-icons';
import { sortPersons } from 'src/helpers/sort-helper';
import { objectDetailedActionCreator } from 'src/store/actions';
import { Header, ActiveEmployee, PossibleEmployee } from './components/components';
import * as S from './styles';

const Counterparties = ({
  legalPersons
}) => {
  const {
    activeOpportunity,
    contentView
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity,
    contentView: store.objectDetailed.contentView
  }));
  const dispatch = useDispatch();
  const [sortedPersons, setSortedPeoples] = useState([]);
  const [comments, setComments] = useState([]);

  const onCommentChange = (value, legalIndex, employeeIndex) => {
    if (value.length <= 250) {
      const updatedComments = [...comments];
      updatedComments[legalIndex][employeeIndex].comment = value;

      setComments(updatedComments);
    }
  };

  const onStatusChange = (value, legalIndex, employeeIndex) => {
    const updatedComments = [...comments];
    updatedComments[legalIndex][employeeIndex].edit = value;

    setComments(updatedComments);
  };

  const onAutoFocus = (e, legalIndex, employeeIndex) => {
    comments[legalIndex][employeeIndex].ref = e;

    if (e) {
      comments[legalIndex][employeeIndex].ref.focus();
      comments[legalIndex][employeeIndex].ref.setSelectionRange(
        comments[legalIndex][employeeIndex].comment.length,
        comments[legalIndex][employeeIndex].comment.length
      );
    }
  };

  useEffect(() => {
    if (legalPersons) {
      setSortedPeoples(sortPersons(legalPersons));
      setComments(legalPersons.map(
        legalPerson => legalPerson.activeEmployees.map(
          employee => ({
            comment: employee.comment,
            edit: false,
            ref: null
          })
        )
      ));
    }
  }, [legalPersons]);

  return (
    <S.Container>
      <ThemeContext.Provider value={FLAT_THEME}>
        {sortedPersons.map((legalPerson, legalIndex) => (
          <S.Counterparties key={legalPerson.id}>
            <Header
              legalPerson={legalPerson}
              status={legalPerson.status}
            />
            {(legalPerson.activeEmployees.length === 0 && legalPerson.employees.length === 0)
              ? (
                <S.AddEmployee>
                  <Center>
                    <S.FlexConteiner
                      $align="center"
                      $justify="space-between"
                      $wrap="wrap"
                    >
                      <Button
                        disabled={contentView === 'opportunities' && activeOpportunity.status !== '0'}
                        onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsAddEmployee(
                          contentView === 'object'
                          || (contentView === 'opportunities' && activeOpportunity.status === '0')
                        ))}
                      >
                        <UserAdd />
                        {' '}
                        Создать сотрудника
                      </Button>
                      <S.BlockAddText>
                        У контрагента нет не одного сотрудника,
                        создайте новое должностное лицо с которым имеется контакт.
                      </S.BlockAddText>
                    </S.FlexConteiner>
                  </Center>
                </S.AddEmployee>
              )
              : (
                <S.InfoBlock>
                  {legalPerson.activeEmployees.length > 0
                  && legalPerson.activeEmployees.map((employee, employeeIndex) => (
                    <ActiveEmployee
                      key={employee.id}
                      employee={employee}
                      employeeIndex={employeeIndex}
                      legalPerson={legalPerson}
                      legalIndex={legalIndex}
                      comments={comments}
                      onCommentChange={onCommentChange}
                      onStatusChange={onStatusChange}
                      onAutoFocus={onAutoFocus}
                    />
                  ))}
                  {legalPerson.employees.length > 0
                  && legalPerson.employees.map(employee => (
                    <PossibleEmployee
                      key={employee.id}
                      employee={employee}
                      legalPerson={legalPerson}
                    />
                  ))}
                </S.InfoBlock>
              )}
          </S.Counterparties>
        ))}
        {(contentView === 'object' || activeOpportunity.status === '0')
        && (
          <Tooltip
            style={{
              fontSize: '13px',
              lineHeight: '20px',
              fontFamily: '"Ubuntu", sans-serif',
              maxWidth: '400px'
            }}
            render={() => (
              <S.TooltipContent>
                Установите новую связь контрагента с данным объектом.
                Чем больше установлено связей, тем понятнее ситуация на объекте
              </S.TooltipContent>
            )}
            pos="top center"
          >
            <Button
              style={{
                margin: '0 0 50px 0'
              }}
              width="calc(100% - 30px)"
              onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsAddLegalPerson(true))}
            >
              <Add />
              {' '}
              Добавить нового контрагента
            </Button>
          </Tooltip>
        )}
      </ThemeContext.Provider>
    </S.Container>
  );
};

Counterparties.propTypes = {
  legalPersons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

Counterparties.defaultProps = {
  legalPersons: []
};

export default Counterparties;
