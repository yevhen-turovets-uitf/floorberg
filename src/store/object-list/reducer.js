import { createReducer } from '@reduxjs/toolkit';
import {
  setModalObjectCreation,
  setUser,
  setUserList,
  setPartnerList,
  setObjectList,
  setObjectListLoading,
  setObjectListViewStyle,
  setPagesCount,
  setActivePage,
  setFiltersMenu,
  setFilters,
  setActiveFilters,
  setSearchFilterValue,
  setAddressesFilter,
  setAddressesFilterState,
  setDadataAddresses,
  setNewObjectId
} from './actions';

const initialState = {
  modalObjectCreation: undefined,
  usersList: undefined,
  partnerList: [],
  objectList: [],
  objectListLoading: true,
  objectListViewStyle: 'table',
  pagesCount: 1,
  activePage: 1,
  filtersMenu: [
    {
      id: 1,
      text: 'Партнер:',
      dataName: 'partnerId',
      placeholder: 'Выберите партнера',
      value: null,
      opened: false
    },
    {
      id: 2,
      text: 'Бюджет объекта, руб.:',
      dataName: 'fund',
      value: 0,
      opened: false
    },
    {
      id: 3,
      text: 'Создал Объект:',
      dataName: 'objectCreatedByUsers',
      placeholder: 'Выберите сотрудника',
      value: null,
      opened: false
    },
    {
      id: 4,
      text: 'Создал Возможность:',
      dataName: 'opportunityCreatedByUsers',
      placeholder: 'Выберите сотрудника',
      value: null,
      opened: false
    },
    {
      id: 5,
      text: 'Работал над объектом:',
      dataName: 'workedUsers',
      placeholder: 'Выберите сотрудника',
      value: null,
      opened: false
    },
    {
      id: 6,
      text: 'Местонахождение объекта:',
      dataName: 'fiasList',
      placeholder: 'Начните ввод',
      value: '',
      opened: false
    }
  ],
  filters: undefined,
  activeFilters: {
    fund: { start: 0, end: 0 },
    objectCreatedByUsers: [],
    opportunityCreatedByUsers: [],
    workedUsers: [],
    fiasList: [],
    nameTerm: '',
    order: 0,
    partnerId: 0
  },
  searchFilterValue: '',
  addressesFilter: [],
  addressesFilterState: [],
  dadataAddresses: [],
  newObjectId: undefined
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setModalObjectCreation, (state, action) => {
    const { modalObjectCreation } = action.payload;

    state.modalObjectCreation = modalObjectCreation;
  });
  builder.addCase(setUser, (state, action) => {
    const { user } = action.payload;

    state.user = user;
  });
  builder.addCase(setUserList, (state, action) => {
    const { userList } = action.payload;

    state.userList = userList;
  });
  builder.addCase(setPartnerList, (state, action) => {
    const { partnerList } = action.payload;

    state.partnerList = partnerList;
  });
  builder.addCase(setObjectList, (state, action) => {
    const { objectList } = action.payload;

    state.objectList = objectList;
  });
  builder.addCase(setObjectListLoading, (state, action) => {
    const { objectListLoading } = action.payload;

    state.objectListLoading = objectListLoading;
  });
  builder.addCase(setObjectListViewStyle, (state, action) => {
    const { objectListViewStyle } = action.payload;

    state.objectListViewStyle = objectListViewStyle;
  });
  builder.addCase(setPagesCount, (state, action) => {
    const { pagesCount } = action.payload;

    state.pagesCount = pagesCount;
  });
  builder.addCase(setActivePage, (state, action) => {
    const { activePage } = action.payload;

    state.activePage = activePage;
  });
  builder.addCase(setFiltersMenu, (state, action) => {
    const { filtersMenu } = action.payload;

    state.filtersMenu = filtersMenu;
  });
  builder.addCase(setFilters, (state, action) => {
    const { filters } = action.payload;

    state.filters = filters;
  });
  builder.addCase(setActiveFilters, (state, action) => {
    const { activeFilters } = action.payload;

    state.activeFilters = activeFilters;
  });
  builder.addCase(setSearchFilterValue, (state, action) => {
    const { searchFilterValue } = action.payload;

    state.searchFilterValue = searchFilterValue;
  });
  builder.addCase(setAddressesFilter, (state, action) => {
    const { addressesFilter } = action.payload;

    state.addressesFilter = addressesFilter;
  });
  builder.addCase(setAddressesFilterState, (state, action) => {
    const { addressesFilterState } = action.payload;

    state.addressesFilterState = addressesFilterState;
  });
  builder.addCase(setDadataAddresses, (state, action) => {
    const { dadataAddresses } = action.payload;

    state.dadataAddresses = dadataAddresses;
  });
  builder.addCase(setNewObjectId, (state, action) => {
    const { newObjectId } = action.payload;

    state.newObjectId = newObjectId;
  });
});

export { reducer };
