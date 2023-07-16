import { createAction } from '@reduxjs/toolkit';
import * as objectsService from 'src/services/objectsService';
import * as addressService from 'src/services/addressService';

const ActionType = {
  SET_MODAL_OBJECT_CREATION: 'object-list/set-modal-object-creation',
  SET_USER: 'object-list/set-user',
  SET_USERS_LIST: 'object-list/set-users-list',
  SET_PARTNER_LIST: 'object-list/set-partner-list',
  SET_OBJECT_LIST: 'object-list/set-object-list',
  SET_OBJECT_LIST_LOADING: 'object-list/set-object-list-loading',
  SET_OBJECT_LIST_VIEW_STYLE: 'object-list/set-object-list-view-style',
  SET_PAGES_COUNT: 'object-list/set-pages-count',
  SET_ACTIVE_PAGE: 'object-list/set-active-page',
  SET_FILTERS_MENU: 'object-list/set-filters-menu',
  SET_FILTERS: 'object-list/set-objects-filters',
  SET_ACTIVE_FILTERS: 'object-list/set-active-filters',
  SET_SEARCH_FILTER_VALUE: 'object-list/set-search-filter-value',
  SET_ADDRESSES_FILTER: 'object-list/set-addresses-filter',
  SET_ADDRESSES_FILTER_STATE: 'object-list/set-addresses-filter-state',
  SET_DADATA_ADDRESSES: 'object-list/set-dadata-addresses',
  SET_NEW_OBJECT_ID: 'object-list/set-new-object-id'
};

const setModalObjectCreation = createAction(
  ActionType.SET_MODAL_OBJECT_CREATION,
  modalObjectCreation => ({
    payload: {
      modalObjectCreation
    }
  })
);

const setUser = createAction(
  ActionType.SET_USER,
  user => ({
    payload: {
      user
    }
  })
);

const setUserList = createAction(
  ActionType.SET_USERS_LIST,
  userList => ({
    payload: {
      userList
    }
  })
);

const setPartnerList = createAction(
  ActionType.SET_PARTNER_LIST,
  partnerList => ({
    payload: {
      partnerList
    }
  })
);

const setObjectList = createAction(
  ActionType.SET_OBJECT_LIST,
  objectList => ({
    payload: {
      objectList
    }
  })
);

const setObjectListLoading = createAction(
  ActionType.SET_OBJECT_LIST_LOADING,
  objectListLoading => ({
    payload: {
      objectListLoading
    }
  })
);

const setObjectListViewStyle = createAction(
  ActionType.SET_OBJECT_LIST_VIEW_STYLE,
  objectListViewStyle => ({
    payload: {
      objectListViewStyle
    }
  })
);

const setPagesCount = createAction(
  ActionType.SET_PAGES_COUNT,
  pagesCount => ({
    payload: {
      pagesCount
    }
  })
);

const setActivePage = createAction(
  ActionType.SET_ACTIVE_PAGE,
  activePage => ({
    payload: {
      activePage
    }
  })
);

const setFiltersMenu = createAction(
  ActionType.SET_FILTERS_MENU,
  filtersMenu => ({
    payload: {
      filtersMenu
    }
  })
);

const setFilters = createAction(
  ActionType.SET_FILTERS,
  filters => ({
    payload: {
      filters
    }
  })
);

const setActiveFilters = createAction(
  ActionType.SET_ACTIVE_FILTERS,
  activeFilters => ({
    payload: {
      activeFilters
    }
  })
);

const setSearchFilterValue = createAction(
  ActionType.SET_SEARCH_FILTER_VALUE,
  searchFilterValue => ({
    payload: {
      searchFilterValue
    }
  })
);

const setAddressesFilter = createAction(
  ActionType.SET_ADDRESSES_FILTER,
  addressesFilter => ({
    payload: {
      addressesFilter
    }
  })
);

const setAddressesFilterState = createAction(
  ActionType.SET_ADDRESSES_FILTER_STATE,
  addressesFilterState => ({
    payload: {
      addressesFilterState
    }
  })
);

const setDadataAddresses = createAction(
  ActionType.SET_DADATA_ADDRESSES,
  dadataAddresses => ({
    payload: {
      dadataAddresses
    }
  })
);

const setNewObjectId = createAction(
  ActionType.SET_NEW_OBJECT_ID,
  newObjectId => ({
    payload: {
      newObjectId
    }
  })
);

const getUserData = userId => async (dispatch, getRootState) => {
  const user = await objectsService.getUserData(userId);

  dispatch(setUser(user));

  const { objectList: { activeFilters } } = getRootState();
  const newFilters = { ...activeFilters };

  dispatch(setActiveFilters(newFilters));
  dispatch(setObjectListLoading(false));
};

const getUsersList = () => async dispatch => {
  const users = await objectsService.getObjectsData({ type: 'fetchUsers' });

  dispatch(setUserList(users.data));
};

const getPartnersList = () => async dispatch => {
  const partners = await objectsService.getPartnersData();

  dispatch(setPartnerList(partners));
};

const getObjectListWithFilters = () => async (dispatch, getRootState) => {
  const { objectList: { activePage, activeFilters } } = getRootState();

  const objectsWithFilters = await objectsService.postObjectsData({
    type: 'filteredObjectList',
    page: activePage
  }, activeFilters);

  dispatch(setFilters(objectsWithFilters.filterVariants));
  dispatch(setObjectList(objectsWithFilters.data));
  dispatch(setPagesCount(objectsWithFilters.last_page));
};

const setFiltersMenuValue = (filterId, value) => async (dispatch, getRootState) => {
  const { objectList: { filtersMenu } } = getRootState();

  const newValue = filtersMenu.map(item => {
    if (item.id === filterId) {
      return { ...item, value };
    }
    return item;
  });

  dispatch(setFiltersMenu(newValue));
};

const setFiltersMenuStatus = (filterId, status) => async (dispatch, getRootState) => {
  const { objectList: { filtersMenu } } = getRootState();

  const newStatus = filtersMenu.map(item => {
    if (item.id === filterId) {
      return { ...item, opened: status };
    }
    return item;
  });

  dispatch(setFiltersMenu(newStatus));
};

const updateActiveFilters = filters => async (dispatch, getRootState) => {
  const { objectList: { activeFilters } } = getRootState();
  const newFilters = { ...activeFilters, ...filters };

  dispatch(setActiveFilters(newFilters));
};

const removeActiveFilter = filterName => async (dispatch, getRootState) => {
  const { objectList: { activeFilters, filtersMenu } } = getRootState();
  let newFilters;

  switch (filterName) {
    case 'fund':
      newFilters = { ...activeFilters, [filterName]: { start: 0, end: 0 } };
      break;
    case 'nameTerm':
      newFilters = { ...activeFilters, [filterName]: '' };
      dispatch(setSearchFilterValue(''));
      break;
    case 'partnerId':
      newFilters = { ...activeFilters, [filterName]: 0 };
      break;
    default:
      newFilters = { ...activeFilters, [filterName]: [] };
      break;
  }

  let newButtonsValue;

  switch (filterName) {
    case 'fund':
      newButtonsValue = filtersMenu.map(item => {
        if (item.dataName === 'fund') {
          return { ...item, value: 0, opened: false };
        }
        return item;
      });
      break;
    case 'fiasList':
      newButtonsValue = filtersMenu.map(item => {
        if (item.dataName === 'fiasList') {
          return { ...item, value: '', opened: false };
        }
        return item;
      });
      break;
    default:
      newButtonsValue = filtersMenu.map(item => {
        if (item.dataName === filterName) {
          return { ...item, value: null, opened: false };
        }
        return item;
      });
      break;
  }

  dispatch(setActiveFilters(newFilters));
  dispatch(setFiltersMenu(newButtonsValue));
  dispatch(setActivePage(1));
};

const removeAllFilters = () => async (dispatch, getRootState) => {
  const { objectList: { activeFilters, filtersMenu, partnerList } } = getRootState();
  let partnerFilter = {};
  const clearFilters = {
    fund: { start: 0, end: 0 },
    objectCreatedByUsers: [],
    opportunityCreatedByUsers: [],
    workedUsers: [],
    fiasList: [],
    nameTerm: ''
  };

  if (partnerList.length !== 0) {
    partnerFilter = { partnerId: 0 };
  }

  const newFilters = { ...activeFilters, ...clearFilters, ...partnerFilter };

  const newButtonsValue = filtersMenu.map(item => {
    if (item.id === 2) {
      return { ...item, value: 0, opened: false };
    }
    if (item.id === 6) {
      return { ...item, value: '', opened: false };
    }
    return { ...item, value: null, opened: false };
  });

  dispatch(setSearchFilterValue(''));
  dispatch(setActiveFilters(newFilters));
  dispatch(setFiltersMenu(newButtonsValue));
  dispatch(setActivePage(1));
};

const updateActiveFias = (value, fias) => async (dispatch, getRootState) => {
  const { objectList: { activeFilters } } = getRootState();
  const newFilters = { ...activeFilters, fiasList: [fias] || [] };

  dispatch(setActiveFilters(newFilters));

  const filter = value === '' ? [] : [value];

  dispatch(setAddressesFilterState(filter));
};

const updateAddressesFilter = value => async dispatch => {
  const addresses = await addressService.getFloorbergAddressList({ terms: value });

  dispatch(setAddressesFilter(addresses));
};

const updateDadataAddresses = value => async dispatch => {
  const addresses = await addressService.getDadataAddressList({ query: value, count: 10 });

  dispatch(setDadataAddresses(addresses.suggestions));
};

const createObject = newObjectData => async (dispatch, getRootState) => {
  const form = new FormData();
  form.append('object', JSON.stringify({ ...newObjectData.object }));

  const newObject = await objectsService.postObjectsData(
    { type: 'changeObject' },
    form,
    'multipart/form-data'
  );

  const { objectList: { activeFilters } } = getRootState();

  dispatch(getObjectListWithFilters(1, activeFilters));
  dispatch(setNewObjectId(newObject.data.id));
};

export {
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
  setNewObjectId,
  getUserData,
  getUsersList,
  getPartnersList,
  getObjectListWithFilters,
  setFiltersMenuValue,
  setFiltersMenuStatus,
  updateActiveFilters,
  removeActiveFilter,
  removeAllFilters,
  updateActiveFias,
  updateAddressesFilter,
  updateDadataAddresses,
  createObject
};
