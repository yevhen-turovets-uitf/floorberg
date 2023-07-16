import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Select, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { ArrowChevronDown, ArrowChevronUp } from '@skbkontur/react-icons';
import { objectListActionCreator } from 'src/store/actions';
import * as S from './styles';

const PartnersFilter = ({
  filterId,
  inputValue,
  opened,
  buttonText,
  dataName,
  placeholder
}) => {
  const {
    partnerList
  } = useSelector(store => ({
    partnerList: store.objectList.partnerList
  }));
  const dispatch = useDispatch();

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
              items={partnerList.map(item => [item.id, item.main_company.title, item.city])}
              onValueChange={value => {
                dispatch(objectListActionCreator.setFiltersMenuValue(filterId, value));
                dispatch(objectListActionCreator.updateActiveFilters({ [dataName]: value }));
                dispatch(objectListActionCreator.setActivePage(1));
              }}
            />
          </ThemeContext.Provider>
        </S.DropContent>
      )}
    </S.DropContainer>
  );
};

PartnersFilter.propTypes = {
  filterId: PropTypes.number.isRequired,
  inputValue: PropTypes.number,
  opened: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

PartnersFilter.defaultProps = {
  inputValue: null
};

export default PartnersFilter;
