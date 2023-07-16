import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Kebab, Hint } from '@skbkontur/react-ui';
import { UserAdd, Card, Warning } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const PossibleEmployee = ({
  employee,
  legalPerson
}) => {
  const {
    activeOpportunity,
    contentView
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity,
    contentView: store.objectDetailed.contentView
  }));
  const dispatch = useDispatch();

  return (
    <S.PossibleEmployee
      $align="center"
    >
      <Hint
        pos="bottom left"
        maxWidth="250px"
        text="Данный сотрудник может быть связан с данным объектом"
        style={{
          lineHeight: '20px',
          fontFamily: '"Ubuntu", sans-serif'
        }}
      >
        <Warning color="#d74f4f" size="large" />
      </Hint>
      <S.PossibleEmployeeData>
        <S.PossibleEmployeePosition>
          {employee.posts.find(post => post.legalPerson === legalPerson.legalPerson).post}
        </S.PossibleEmployeePosition>
        <S.PossibleEmployeeName>
          {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
        </S.PossibleEmployeeName>
      </S.PossibleEmployeeData>
      {(contentView === 'object'
      || (contentView === 'opportunities' && activeOpportunity.status === '0'))
      && (
        <Kebab
          style={{
            position: 'absolute',
            top: '34px',
            right: '15px'
          }}
          size="medium"
        >
          <S.MenuItem onClick={() => {
            if (contentView === 'object') {
              dispatch(objectDetailedActionCreator.activateNaturalPerson(legalPerson.id, employee.id));
            }
            if (contentView === 'opportunities') {
              dispatch(objectDetailedActionCreator.activateOpportunitiesNaturalPerson(legalPerson.id, employee.id));
            }
          }}
          >
            <UserAdd />
            {' '}
            Привязать сотрудника
          </S.MenuItem>
          <S.MenuItem onClick={e => {
            e.preventDefault();
            window.location.href = `/view_line2.php?table=2270&line=${employee.id}`;
          }}
          >
            <Card />
            {' '}
            Перейти в анкету
          </S.MenuItem>
        </Kebab>
      )}
    </S.PossibleEmployee>
  );
};

PossibleEmployee.propTypes = {
  employee: PropTypes.objectOf(PropTypes.any).isRequired,
  legalPerson: PropTypes.objectOf(PropTypes.any).isRequired
};

export default PossibleEmployee;
