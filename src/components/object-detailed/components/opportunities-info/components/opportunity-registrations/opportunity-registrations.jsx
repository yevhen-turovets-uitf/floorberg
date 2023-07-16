import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Hint
} from '@skbkontur/react-ui';
import {
  Pin,
  Loading,
  DocumentCheck,
  DocumentCheck2
} from '@skbkontur/react-icons';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const OpportunityRegistrations = () => {
  const {
    activeOpportunity
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity
  }));
  const dispatch = useDispatch();

  if (activeOpportunity.registrations.length === 0) {
    return (
      <S.InfoEmpty
        $align="center"
        $justify="space-between"
      >
        <Button
          disabled={!(activeOpportunity.status === '0')}
          onClick={() => {
            if (activeOpportunity.status === '0') {
              dispatch(objectDetailedActionCreator.setModalOpportunityAddRegistration(true));
            }
          }}
        >
          <Pin />
          {' '}
          Зарегистрировать
        </Button>
        <S.InfoHelpText>
          Зарегистрируйте возможную сделку у поставщиков имеющих регистрацию
        </S.InfoHelpText>
      </S.InfoEmpty>
    );
  }
  return (
    <S.Container>
      {activeOpportunity.registrations.map(registration => (
        <Hint
          key={registration.id}
          pos="bottom left"
          maxWidth="250px"
          text={registration.comment}
          style={{
            lineHeight: '20px',
            fontFamily: '"Ubuntu", sans-serif'
          }}
        >
          {registration.state === 0
          && (
            <S.RegistrationButton
              onClick={() => dispatch(
                objectDetailedActionCreator.setModalOpportunityRemoveRegistration(registration)
              )}
            >
              <S.Confirmed $red>
                <Loading />
                {' '}
                <div>
                  Ожидает подтверждения от
                  {' '}
                  {registration.legal.title}
                </div>
              </S.Confirmed>
            </S.RegistrationButton>
          )}
          {registration.state === 1
          && (
            <S.RegistrationButton
              onClick={() => dispatch(
                objectDetailedActionCreator.setModalOpportunityRemoveRegistration(registration)
              )}
            >
              <S.Confirmed>
                <DocumentCheck />
                {' '}
                <div>
                  Возможность зарегистрирована в
                  {' '}
                  {registration.legal.title}
                </div>
              </S.Confirmed>
            </S.RegistrationButton>
          )}
          {registration.state === 2
          && (
            <S.RegistrationButton
              onClick={() => dispatch(
                objectDetailedActionCreator.setModalOpportunityRemoveRegistration(registration)
              )}
            >
              <S.Confirmed $red>
                <DocumentCheck2 />
                {' '}
                <div>
                  В регистрации отказано,
                  {' '}
                  {registration.legal.title}
                </div>
              </S.Confirmed>
            </S.RegistrationButton>
          )}
        </Hint>
      ))}
    </S.Container>
  );
};

export default OpportunityRegistrations;
