import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Kebab,
  CurrencyLabel
} from '@skbkontur/react-ui';
import {
  LinkOff
} from '@skbkontur/react-icons';
import { findEstimates } from 'src/helpers/search-helper';
import { objectDetailedActionCreator } from 'src/store/actions';
import * as S from './styles';

const EstimatesMain = () => {
  const {
    activeOpportunity,
    estimates
  } = useSelector(store => ({
    activeOpportunity: store.objectDetailed.activeOpportunity,
    estimates: store.objectDetailed.estimates
  }));
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.TableTitle>
        № / дата
      </S.TableTitle>
      <S.TableTitle>
        Стоимость
      </S.TableTitle>
      <S.TableTitle />
      {findEstimates(estimates, activeOpportunity.id).map(item => (
        <Fragment key={item.id}>
          <S.TableCell>
            <S.TableLink href={`/report.php?id=110#/${item.id}`}>
              {`№${item.id} от ${item.date.split(' ')[0].split('-').reverse().join('.')}`}
            </S.TableLink>
          </S.TableCell>
          <S.TableCell>
            <CurrencyLabel value={item.sum.toFixed(2)} currencySymbol="руб." />
          </S.TableCell>
          <S.TableCell>
            {activeOpportunity.status === '0'
            && (
              <Kebab>
                <S.MenuItem
                  onClick={() => dispatch(objectDetailedActionCreator.removeEstimate(
                    activeOpportunity.id,
                    item.id
                  ))}
                >
                  <LinkOff />
                  {' '}
                  Отвязать сметный расчет
                </S.MenuItem>
              </Kebab>
            )}
          </S.TableCell>
        </Fragment>
      ))}
    </S.Container>
  );
};

export default EstimatesMain;
