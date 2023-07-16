import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip, Kebab } from '@skbkontur/react-ui';
import { UserSettings, Phone2, Handshake, Card, Edit, User } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const ActiveEmployee = ({
  employee,
  employeeIndex,
  legalPerson,
  legalIndex,
  comments,
  onCommentChange,
  onStatusChange,
  onAutoFocus
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
    <S.Employee
      $direction="column"
      $justify="space-between"
    >
      <S.EmployeeMain
        $align="flex-start"
        $justify="space-between"
      >
        <S.AvatarContainer>
          {employee.image.url
            ? (
              <S.Avatar
                src={employee.image.url}
                alt=" "
              />
            )
            : <User color="#B7B7B7" />}
        </S.AvatarContainer>
        <S.EmployeeData>
          <S.EmployeePosition>
            {employee.posts.find(post => post.legalPerson === legalPerson.legalPerson).post}
          </S.EmployeePosition>
          <S.EmployeeName>
            {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
          </S.EmployeeName>
        </S.EmployeeData>
        {(contentView === 'object'
        || (contentView === 'opportunities' && activeOpportunity.status === '0'))
        && (
          <Kebab
            style={{
              margin: '19px 0 0 0'
            }}
            size="medium"
          >
            <S.MenuItem onClick={() => onStatusChange(true, legalIndex, employeeIndex)}>
              <Edit />
              {' '}
              Изменить комментарий
            </S.MenuItem>
            {employee.phones && (
              <S.MenuItem
                onClick={() => {
                  if (employee.phones.split(',').length === 1) {
                    dispatch(objectDetailedActionCreator.makeCall(employee.phones));
                  } else {
                    dispatch(objectDetailedActionCreator.setModalPersonsMakeCall({
                      legalPersonName: legalPerson.legalPersonName,
                      employee
                    }));
                  }
                }}
              >
                <Phone2 />
                {' '}
                Позвонить
                {' '}
                {employee.phones.split(',').length === 1 ? employee.phones : ''}
              </S.MenuItem>
            )}
            <S.MenuItem onClick={() => dispatch(objectDetailedActionCreator.modalPersonsMakeMeeting(employee.id))}>
              <Handshake />
              {' '}
              Совершить встречу
            </S.MenuItem>
            <S.MenuItem
              onClick={() => {
                if (contentView === 'object') {
                  dispatch(objectDetailedActionCreator.disableNaturalPerson(
                    legalPerson.id,
                    employee.id,
                    employee.personId
                  ));
                }
                if (contentView === 'opportunities') {
                  dispatch(objectDetailedActionCreator.disableOpportunityNaturalPerson(
                    legalPerson.id,
                    employee.id,
                    employee.personId
                  ));
                }
              }}
            >
              <UserSettings />
              {' '}
              Отвязать сотрудника
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
      </S.EmployeeMain>
      {comments[legalIndex][employeeIndex].edit
        && (
          <S.Textarea
            width="100%"
            resize="none"
            value={comments[legalIndex][employeeIndex].comment}
            onValueChange={value => onCommentChange(value, legalIndex, employeeIndex)}
            ref={e => onAutoFocus(e, legalIndex, employeeIndex)}
            onBlur={() => {
              if (contentView === 'object') {
                dispatch(objectDetailedActionCreator.updateComment(
                  legalPerson.id,
                  employee.id,
                  employee.personId,
                  comments[legalIndex][employeeIndex].comment
                ));
              }
              if (contentView === 'opportunities') {
                dispatch(objectDetailedActionCreator.updateOpportunityComment(
                  legalPerson.id,
                  employee.id,
                  employee.personId,
                  comments[legalIndex][employeeIndex].comment
                ));
              }
              onAutoFocus(null, legalIndex, employeeIndex);
              onStatusChange(false, legalIndex, employeeIndex);
            }}
          />
        )}
      {!comments[legalIndex][employeeIndex].edit
        && !employee.comment
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
                Оставьте комментарий о том, как связан сотрудник с
                данным объектом и какое участие в решениях он принимает
              </S.TooltipContent>
            )}
            pos="bottom center"
          >
            <S.Button
              width="100%"
              disabled={contentView === 'opportunities' && activeOpportunity.status !== '0'}
              onClick={() => {
                if ((contentView === 'opportunities' && activeOpportunity.status === '0')
                  || contentView === 'object') {
                  onStatusChange(true, legalIndex, employeeIndex);
                }
              }}
            >
              + добавить комментарий
            </S.Button>
          </Tooltip>
        )}
      {!comments[legalIndex][employeeIndex].edit && employee.comment && (
        <S.CommentBlock>
          {employee.comment}
        </S.CommentBlock>
      )}
    </S.Employee>
  );
};

ActiveEmployee.propTypes = {
  employee: PropTypes.objectOf(PropTypes.any).isRequired,
  employeeIndex: PropTypes.number.isRequired,
  legalPerson: PropTypes.objectOf(PropTypes.any).isRequired,
  legalIndex: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))).isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onAutoFocus: PropTypes.func.isRequired
};

export default ActiveEmployee;
