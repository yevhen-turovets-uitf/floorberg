import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Kebab, Hint } from '@skbkontur/react-ui';
import { UserAdd, Tag, UserSettings } from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const Header = ({
  legalPerson,
  status
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
    <S.CounterpartiesTitle
      $align="center"
      $justify="space-between"
    >
      <S.Role>
        {legalPerson.role.name}
      </S.Role>
      <S.FlexConteiner
        $align="center"
        $justify="space-between"
      >
        <Hint
          pos="bottom right"
          maxWidth="250px"
          text={legalPerson.address}
          style={{
            lineHeight: '20px',
            fontFamily: '"Ubuntu", sans-serif'
          }}
        >
          <S.LegalPersonLink
            href={`/view_line2.php?table=2250&line=${legalPerson.legalPerson}`}
          >
            {legalPerson.legalPersonName}
          </S.LegalPersonLink>
        </Hint>
        {(contentView === 'object'
        || (contentView === 'opportunities' && activeOpportunity.status === '0'))
        && (
          <Kebab size="medium">
            <S.MenuItem
              onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsAddEmployee(legalPerson))}
            >
              <UserAdd />
              {' '}
              Создать сотрудника
            </S.MenuItem>
            {status !== 'readable'
            && (
              <S.MenuItem
                onClick={() => dispatch(objectDetailedActionCreator.setModalPersonsChangeLegalRole(legalPerson))}
              >
                <Tag />
                {' '}
                Изменить роль
              </S.MenuItem>
            )}
            {status !== 'readable'
            && (
              <S.MenuItem
                onClick={() => {
                  if (contentView === 'object') {
                    dispatch(objectDetailedActionCreator.removeLegalPerson(legalPerson.id));
                  }
                  if (contentView === 'opportunities') {
                    dispatch(objectDetailedActionCreator.removeOpportunitiesLegalPerson(legalPerson.id));
                  }
                }}
              >
                <UserSettings />
                {' '}
                Отвязать контрагента
              </S.MenuItem>
            )}
          </Kebab>
        )}
      </S.FlexConteiner>
    </S.CounterpartiesTitle>
  );
};

Header.propTypes = {
  legalPerson: PropTypes.objectOf(PropTypes.any).isRequired,
  status: PropTypes.string
};

Header.defaultProps = {
  status: undefined
};

export default Header;
