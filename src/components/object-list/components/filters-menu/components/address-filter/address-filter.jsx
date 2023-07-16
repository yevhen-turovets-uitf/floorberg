import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Input, ThemeContext, FLAT_THEME } from '@skbkontur/react-ui';
import { ArrowChevronDown, ArrowChevronUp } from '@skbkontur/react-icons';
import { objectListActionCreator } from 'src/store/actions';
import * as S from './styles';

const AddressFilter = ({
  filterId,
  inputValue,
  opened,
  buttonText,
  placeholder
}) => {
  const {
    addressesFilter
  } = useSelector(store => ({
    addressesFilter: store.objectList.addressesFilter
  }));
  const dispatch = useDispatch();
  const [isHint, setHint] = useState(false);

  const hintDelay = () => {
    setTimeout(() => {
      setHint(false);
    }, 250);
  };

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
            <Input
              style={{
                width: '100%'
              }}
              placeholder={placeholder}
              value={inputValue}
              onValueChange={value => {
                dispatch(objectListActionCreator.setFiltersMenuValue(filterId, value));
                dispatch(objectListActionCreator.updateAddressesFilter(value));
              }}
              onFocus={() => setHint(true)}
              onBlur={() => hintDelay()}
            />
            {isHint && inputValue && addressesFilter.length > 0 && (
              <S.VariantsContainer>
                {addressesFilter.map(item => (
                  <S.VariantsItem
                    key={item.full_name}
                    onClick={() => {
                      dispatch(objectListActionCreator.setFiltersMenuValue(filterId, item.full_name));
                      dispatch(objectListActionCreator.updateAddressesFilter(item.full_name));
                      dispatch(objectListActionCreator.updateActiveFias(item.full_name, item.fias));
                      dispatch(objectListActionCreator.setActivePage(1));
                    }}
                  >
                    {item.full_name}
                  </S.VariantsItem>
                ))}
              </S.VariantsContainer>
            )}
          </ThemeContext.Provider>
        </S.DropContent>
      )}
    </S.DropContainer>
  );
};

AddressFilter.propTypes = {
  filterId: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default AddressFilter;
