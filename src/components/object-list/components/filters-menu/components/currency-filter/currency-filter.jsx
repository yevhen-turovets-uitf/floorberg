import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Radio } from '@skbkontur/react-ui';
import { ArrowChevronDown, ArrowChevronUp } from '@skbkontur/react-icons';
import { currencyToText } from 'src/helpers/currency-helper';
import { objectListActionCreator } from 'src/store/actions';
import * as S from './styles';

const CurrencyFilter = ({
  filterId,
  inputValue,
  opened,
  buttonText,
  dataName
}) => {
  const {
    filters
  } = useSelector(store => ({
    filters: store.objectList.filters
  }));
  const dispatch = useDispatch();

  return (
    <S.DropContainer>
      <S.DropButton
        $leftBorder={inputValue > 0}
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
          $leftBorder={inputValue > 0}
        >
          {filters[dataName].map((item, index) => (
            <S.RadioButton key={item.variant.start + item.variant.end}>
              <Radio
                checked={inputValue === index}
                value={index}
                onValueChange={value => {
                  dispatch(objectListActionCreator.setFiltersMenuValue(filterId, value));
                  dispatch(objectListActionCreator.updateActiveFilters({
                    [dataName]: filters[dataName][value].variant
                  }));
                  dispatch(objectListActionCreator.setActivePage(1));
                }}
              >
                {currencyToText(item.variant.start, item.variant.end)}
                {' '}
                <S.Count>{`(${item.count})`}</S.Count>
              </Radio>
            </S.RadioButton>
          ))}
        </S.DropContent>
      )}
    </S.DropContainer>
  );
};

CurrencyFilter.propTypes = {
  filterId: PropTypes.number.isRequired,
  inputValue: PropTypes.number.isRequired,
  opened: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired
};

export default CurrencyFilter;
