import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import { Button, Checkbox, Token, Input, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { Add, Card, ListRows } from '@skbkontur/react-icons';
import { objectListActionCreator } from 'src/store/actions';
import { formatCurrency } from 'src/helpers/currency-helper';
import { findUsername, findPartner } from 'src/helpers/search-helper';
import * as S from './styles';

const Header = () => {
  const {
    userList,
    partnerList,
    objectListViewStyle,
    filtersMenu,
    activeFilters,
    addressesFilterState,
    searchFilterValue
  } = useSelector(store => ({
    userList: store.objectList.userList,
    partnerList: store.objectList.partnerList,
    objectListViewStyle: store.objectList.objectListViewStyle,
    filtersMenu: store.objectList.filtersMenu,
    activeFilters: store.objectList.activeFilters,
    addressesFilterState: store.objectList.addressesFilterState,
    searchFilterValue: store.objectList.searchFilterValue
  }));
  const dispatch = useDispatch();
  const [capabilitiesCheck, setCapabilitiesCheck] = useState(false);

  const getCurrencyFilter = () => {
    if (activeFilters.fund.start > 0 && activeFilters.fund.end > 0) {
      return `Бюджет от ${formatCurrency(activeFilters.fund.start)} до ${formatCurrency(activeFilters.fund.end)}`;
    }
    if (activeFilters.fund.start > 0) {
      return `Бюджет от ${formatCurrency(activeFilters.fund.start)}`;
    }
    if (activeFilters.fund.end > 0) {
      return `Бюджет до ${formatCurrency(activeFilters.fund.end)}`;
    }
    return null;
  };

  const [, cancel] = useDebounce(
    () => {
      dispatch(objectListActionCreator.updateActiveFilters({ nameTerm: searchFilterValue }));
    },
    500,
    [searchFilterValue]
  );

  useEffect(() => () => cancel(), [cancel]);

  return (
    <S.Container>
      <S.MenuContainer
        $justify="space-between"
        $wrap="wrap"
        $align="center"
      >
        <ThemeContext.Provider value={FLAT_THEME}>
          <Button
            onClick={() => dispatch(objectListActionCreator.setModalObjectCreation(true))}
          >
            <Add />
            Создать объект
          </Button>
          <S.RightMenu
            $justify="flex-end"
            $wrap="wrap"
            $align="center"
          >
            <Checkbox
              style={{
                margin: '0 15px 0 0',
                fontFamily: '"Ubuntu", sans-serif',
                color: '#333333'
              }}
              checked={capabilitiesCheck}
              onValueChange={() => setCapabilitiesCheck(!capabilitiesCheck)}
            >
              Скрыть объекты с закрытыми возможностями
            </Checkbox>
            <Input
              style={{
                width: '20vw',
                margin: '0 15px 0 0'
              }}
              placeholder="Поиск объекта"
              value={searchFilterValue}
              onValueChange={value => {
                dispatch(objectListActionCreator.setSearchFilterValue(value));
                dispatch(objectListActionCreator.setActivePage(1));
              }}
            />
            <S.SwitchContainer>
              <Button
                className="left"
                checked={objectListViewStyle === 'table'}
                onClick={() => dispatch(objectListActionCreator.setObjectListViewStyle('table'))}
              >
                <ListRows />
              </Button>
              <Button
                className="right"
                checked={objectListViewStyle === 'cards'}
                onClick={() => dispatch(objectListActionCreator.setObjectListViewStyle('cards'))}
              >
                <Card />
              </Button>
            </S.SwitchContainer>
          </S.RightMenu>
        </ThemeContext.Provider>
      </S.MenuContainer>
      <S.FiltersContainer
        $wrap="wrap"
        $align="center"
      >
        {(!!activeFilters.partnerId
        || activeFilters.fund.start !== 0
        || activeFilters.fund.end !== 0
        || activeFilters.objectCreatedByUsers.length > 0
        || activeFilters.opportunityCreatedByUsers.length > 0
        || activeFilters.workedUsers.length > 0
        || activeFilters.fiasList.length > 0
        || activeFilters.nameTerm)
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeAllFilters())}
          >
            Очистить все фильтры
          </Token>
        )}
        {!!activeFilters.partnerId
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('partnerId'))}
          >
            Партнер:
            {' '}
            {findPartner(partnerList, activeFilters.partnerId)}
          </Token>
        )}
        {(activeFilters.fund.start !== 0
        || activeFilters.fund.end !== 0)
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('fund'))}
          >
            {getCurrencyFilter()}
          </Token>
        )}
        {activeFilters.objectCreatedByUsers.length > 0
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('objectCreatedByUsers'))}
          >
            {filtersMenu[2].text}
            {' '}
            {activeFilters.objectCreatedByUsers.length > 1
              ? 'Другие сотрудники'
              : findUsername(userList, activeFilters.objectCreatedByUsers[0])}
          </Token>
        )}
        {activeFilters.opportunityCreatedByUsers.length > 0
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('opportunityCreatedByUsers'))}
          >
            {filtersMenu[3].text}
            {' '}
            {activeFilters.opportunityCreatedByUsers.length > 1
              ? 'Другие сотрудники'
              : findUsername(userList, activeFilters.opportunityCreatedByUsers[0])}
          </Token>
        )}
        {activeFilters.workedUsers.length > 0
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('workedUsers'))}
          >
            {filtersMenu[4].text}
            {' '}
            {activeFilters.workedUsers.length > 1
              ? 'Другие сотрудники'
              : findUsername(userList, activeFilters.workedUsers[0])}
          </Token>
        )}
        {activeFilters.fiasList.length > 0
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('fiasList'))}
          >
            {filtersMenu[5].text}
            {' '}
            {addressesFilterState[0]}
          </Token>
        )}
        {activeFilters.nameTerm
        && (
          <Token
            style={{
              color: '#828282',
              margin: '0 10px 10px 0'
            }}
            onClick={() => dispatch(objectListActionCreator.removeActiveFilter('nameTerm'))}
          >
            Поиск:
            {' '}
            {activeFilters.nameTerm}
          </Token>
        )}
      </S.FiltersContainer>
    </S.Container>
  );
};

export default Header;
