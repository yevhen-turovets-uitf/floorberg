import React from 'react';
import { useSelector } from 'react-redux';
import { PartnersFilter, CurrencyFilter, AddressFilter, StandartFilter } from './components/components';

const FiltersMenu = () => {
  const {
    filtersMenu,
    partnerList
  } = useSelector(store => ({
    filtersMenu: store.objectList.filtersMenu,
    partnerList: store.objectList.partnerList
  }));

  return (
    <>
      {filtersMenu.map(item => {
        if (item.id === 1 && partnerList.length === 0) {
          return null;
        }
        if (item.id === 1) {
          return (
            <PartnersFilter
              key={item.text}
              filterId={item.id}
              inputValue={item.value}
              opened={item.opened}
              buttonText={item.text}
              dataName={item.dataName}
              placeholder={item.placeholder}
            />
          );
        }
        if (item.id === 2) {
          return (
            <CurrencyFilter
              key={item.text}
              filterId={item.id}
              inputValue={item.value}
              opened={item.opened}
              buttonText={item.text}
              dataName={item.dataName}
            />
          );
        }
        if (item.id === 6) {
          return (
            <AddressFilter
              key={item.text}
              filterId={item.id}
              inputValue={item.value}
              opened={item.opened}
              buttonText={item.text}
              placeholder={item.placeholder}
            />
          );
        }
        return (
          <StandartFilter
            key={item.text}
            filterId={item.id}
            inputValue={item.value}
            opened={item.opened}
            buttonText={item.text}
            dataName={item.dataName}
            placeholder={item.placeholder}
          />
        );
      })}
    </>
  );
};

export default FiltersMenu;
