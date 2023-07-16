import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Select, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { ArrowChevronDown, ArrowChevronUp } from '@skbkontur/react-icons';
import { objectListActionCreator } from 'src/store/actions';
import { findUsername } from 'src/helpers/search-helper';
import * as S from './styles';

const StandartFilter = ({
  filterId,
  inputValue,
  opened,
  buttonText,
  dataName,
  placeholder
}) => {
  const {
    userList,
    filters
  } = useSelector(store => ({
    userList: store.objectList.userList,
    filters: store.objectList.filters
  }));
  const dispatch = useDispatch();
  const [formatedData, setFormatedData] = useState([]);
  const [otherEmployees, setOtherEmployees] = useState([]);

  useEffect(() => {
    const others = {
      variant: [],
      fio: 'Другие сотрудники',
      count: 0
    };

    const newData = [];

    filters[dataName].forEach(item => {
      const fio = findUsername(userList, item.variant);

      if (fio) {
        newData.push([item.variant, fio, `(${item.count})`]);
      } else {
        others.variant.push(item.variant);
        others.count += +item.count;
      }
    });
    setOtherEmployees(others.variant);
    setFormatedData([...newData, ['other', others.fio, `(${others.count})`]]);
  }, [dataName, filters, userList]);

  return (
    <S.DropContainer>
      <S.DropButton
        $leftBorder={inputValue}
        onClick={() => dispatch(objectListActionCreator.setFiltersMenuStatus(filterId, !opened))}
      >
        {opened
          ? (
            <ArrowChevronUp
              style={{
                marginRight: '10px'
              }}
            />
          )
          : (
            <ArrowChevronDown
              style={{
                marginRight: '10px'
              }}
            />
          )}
        {buttonText}
      </S.DropButton>
      {opened && (
        <S.DropContent
          $leftBorder={inputValue}
        >
          <ThemeContext.Provider value={FLAT_THEME}>
            <Select
              search
              width="230px"
              placeholder={placeholder}
              value={inputValue}
              items={formatedData}
              onValueChange={value => {
                dispatch(objectListActionCreator.setFiltersMenuValue(filterId, value));
                if (value === 'other') {
                  dispatch(objectListActionCreator.updateActiveFilters({ [dataName]: otherEmployees }));
                } else {
                  dispatch(objectListActionCreator.updateActiveFilters({ [dataName]: [value] }));
                }
                dispatch(objectListActionCreator.setActivePage(1));
              }}
            />
          </ThemeContext.Provider>
        </S.DropContent>
      )}
    </S.DropContainer>
  );
};

StandartFilter.propTypes = {
  filterId: PropTypes.number.isRequired,
  inputValue: PropTypes.number,
  opened: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

StandartFilter.defaultProps = {
  inputValue: null
};

export default StandartFilter;
