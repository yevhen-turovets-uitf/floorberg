import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from '@skbkontur/react-ui';
import { ArrowTriangleDown } from '@skbkontur/react-icons';
import { objectListActionCreator } from 'src/store/actions';
import { formatCurrency } from 'src/helpers/currency-helper';
import { findUsername } from 'src/helpers/search-helper';
import * as S from './styles';

const tableTitles = [
  { value: '№' },
  { value: 'Дата', sort: true, onClickData: '0' },
  { value: 'Наименование', sort: true, onClickData: '1' },
  { value: 'Местонахождение' },
  { value: 'Возможности' },
  { value: 'Создал', removed: 'removed' },
  { value: 'Контрагенты' }
];

const ContentTable = () => {
  const {
    userList,
    objectList
  } = useSelector(store => ({
    userList: store.objectList.userList,
    objectList: store.objectList.objectList
  }));
  const dispatch = useDispatch();

  const path = id => `/${id}`;

  return (
    <S.Container>
      {tableTitles.map(item => (
        <S.ColumnTitle
          key={item.value}
          $removed={item.removed}
          $sort={item.sort}
          onClick={item.onClickData && (
            () => dispatch(objectListActionCreator.updateActiveFilters({ order: +item.onClickData }))
          )}
        >
          {item.value}
          {item.sort && <ArrowTriangleDown />}
        </S.ColumnTitle>
      ))}
      {objectList.map(item => (
        <Fragment key={item.id}>
          <S.NavItem
            to={path(item.id)}
          >
            {item.id}
          </S.NavItem>
          <S.NavItem
            $centered
            to={path(item.id)}
          >
            {item.created_at.split(' ')[0].split('-').reverse().join('.')}
          </S.NavItem>
          <S.NavItem
            $uppercase
            to={path(item.id)}
          >
            <div>
              {item.name}
              {item.isFavorite === 1 && (
                <S.Star />
              )}
            </div>
          </S.NavItem>
          <S.NavItem
            to={path(item.id)}
          >
            {item.address}
          </S.NavItem>
          <S.NavItem
            to={path(item.id)}
          >
            {item.opportunities.length > 0 && (
              <span>
                {item.opportunities.map(opportunitie => (
                  <S.TooltipContainer
                    key={opportunitie.id}
                  >
                    <Tooltip
                      style={{
                        fontSize: '13px',
                        lineHeight: '20px',
                        fontFamily: '"Ubuntu", sans-serif',
                        maxWidth: '400px'
                      }}
                      render={() => (
                        <>
                          <S.TooltipName>{opportunitie.name}</S.TooltipName>
                          <S.TooltipContent>
                            Вероятность:
                            {' '}
                            <S.TooltipContentStrong>
                              {opportunitie.probability}
                              %
                            </S.TooltipContentStrong>
                            <br />
                            Бюджет:
                            {' '}
                            <S.TooltipContentStrong>
                              {formatCurrency(opportunitie.budget)}
                            </S.TooltipContentStrong>
                            <br />
                            Создал:
                            {' '}
                            <S.TooltipContentStrong>
                              {userList.length > 0 && (findUsername(userList, item.created_by))}
                            </S.TooltipContentStrong>
                          </S.TooltipContent>
                        </>
                      )}
                      pos="bottom center"
                    >
                      <S.Dot $percent={opportunitie.probability} />
                    </Tooltip>
                  </S.TooltipContainer>
                ))}
                &gt;
                {' '}
                {formatCurrency(item.opportunities.length > 1
                  ? item.opportunities.reduce((accumulator, currentValue) => accumulator + currentValue.budget, 0)
                  : item.opportunities[0].budget)}
              </span>
            )}
          </S.NavItem>
          <S.NavItem
            $centered
            $removed
            to={path(item.id)}
          >
            {userList.length > 0 && (findUsername(userList, item.created_by))}
          </S.NavItem>
          <S.NavItem
            to={path(item.id)}
          >
            {item?.agents ? item.agents.map(elem => elem.title).join(', ') : ''}
          </S.NavItem>
        </Fragment>
      ))}
    </S.Container>
  );
};

export default ContentTable;
