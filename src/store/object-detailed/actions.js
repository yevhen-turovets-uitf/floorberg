import { createAction } from '@reduxjs/toolkit';
import * as objectsService from 'src/services/objectsService';
import * as addressService from 'src/services/addressService';

const ActionType = {
  SET_SIDE_PAGE_HISTORY_CONTENT: 'object-detailed/set-side-page-history-content',
  SET_MODAL_HEADER_NAME_EDIT: 'object-detailed/set-modal-header-name-edit',
  SET_MODAL_HEADER_NOTIFICATIONS: 'object-detailed/set-modal-header-notifications',
  SET_MODAL_MAIN_INFO_DESCRIPTION_EDIT: 'object-detailed/set-modal-main-info-description-edit',
  SET_MODAL_MAIN_INFO_LINKS_EDIT: 'object-detailed/set-modal-main-info-links-edit',
  SET_MODAL_MAIN_INFO_IMAGES_EDIT: 'object-detailed/set-modal-main-info-images-edit',
  SET_MODAL_MAIN_INFO_IMAGE_PREVIEW: 'object-detailed/set-modal-main-info-image-preview',
  SET_MODAL_MAIN_INFO_ADDRESS_EDIT: 'object-detailed/set-modal-main-info-address-edit',
  SET_MODAL_MAIN_INFO_MAP_EDIT: 'object-detailed/set-modal-main-info-map-edit',
  SET_MODAL_MAIN_INFO_MAP_EDIT_ACCEPTION: 'object-detailed/set-modal-main-info-map-edit-acception',
  SET_MODAL_PERSONS_ADD_LEGAL_PERSON: 'object-detailed/set-modal-persons-add-legal-person',
  SET_MODAL_PERSONS_CHANGE_LEGAL_ROLE: 'object-detailed/set-modal-persons-change-legal-role',
  SET_MODAL_PERSONS_ADD_EMPLOYEE: 'object-detailed/set-modal-persons-add-employee',
  SET_MODAL_PERSONS_MAKE_MEETING: 'object-detailed/set-modal-persons-make-meeting',
  SET_MODAL_PERSONS_MAKE_CALL: 'object-detailed/set-modal-persons-make-call',
  SET_MODAL_OPPORTUNITY_CREATION: 'object-detailed/set-modal-opportunity-creation',
  SET_MODAL_OPPORTUNITY_DATA_EDIT: 'object-detailed/set-modal-opportunity-data-edit',
  SET_MODAL_OPPORTUNITY_DESCRIPTION_EDIT: 'object-detailed/set-modal-opportunity-description-edit',
  SET_MODAL_OPPORTUNITY_ADD_REGISTRATION: 'object-detailed/set-modal-opportunity-add-registration',
  SET_MODAL_OPPORTUNITY_REMOVE_REGISTRATION: 'object-detailed/set-modal-opportunity-remove-registration',
  SET_MODAL_OPPORTUNITY_FILES_EDIT: 'object-detailed/set-modal-opportunity-files-edit',
  SET_MODAL_OPPORTUNITY_ADD_ESTIMATE: 'object-detailed/set-modal-opportunity-add-estimate',
  SET_MODAL_HISTORY_ADD_COMMENT: 'object-detailed/set-modal-history-add-comment',
  SET_MODAL_HISTORY_MAKE_CALL: 'object-detailed/set-modal-history-make-call',
  SET_MODAL_HISTORY_ADD_TASK: 'object-detailed/set-modal-history-add-task',
  SET_OPPORTUNITIES_DIRECTIONS: 'object-detailed/set-opportunities-directions',
  SET_MATERIAL_PROVIDERS: 'object-detailed/set-material-providers',
  SET_ACTIVE_OBJECT: 'object-detailed/set-active-object',
  SET_OBJECT_LOADING: 'object-detailed/set-object-loading',
  SET_FAVORITE: 'object-detailed/set-favorite',
  SET_SUBSCRIBES: 'object-detailed/set-subscribes',
  SET_CONTENT_VIEW: 'object-detailed/set-content-view',
  SET_ACTIVE_LINKS: 'object-detailed/set-active-links',
  SET_ACTIVE_IMAGE: 'object-detailed/set-active-image',
  SET_DADATA_ADDRESSES: 'object-detailed/set-dadata-address',
  SET_FULL_ADDRESS: 'object-detailed/set-full-address',
  SET_ADDRESS_FROM_MAP: 'object-detailed/set-address-from-map',
  SET_ADDRESS_FROM_MAP_ACCEPT: 'object-detailed/set-address-from-map-accept',
  SET_LEGAL_PERSONS_POSSIBLE_ROLES: 'object-detailed/set-legal-persons-possible-roles',
  SET_LEGAL_PERSONS_WITH_EMPLOYEES: 'object-detailed/set-legal-persons-with-employees',
  SET_LEGAL_PERSONS_LIST: 'object-detailed/set-legal-persons-list',
  SET_ACTIVE_LEGAL_PERSON: 'object-detailed/set-active-legal-person',
  SET_ACTIVE_EMPLOYEE: 'object-detailed/set-active-employee',
  SET_UPDATING_LEGAL_PERSON: 'object-detailed/set-updating-legal-person',
  SET_ACTIVE_OPPORTUNITY: 'object-detailed/set-active-opportunity',
  SET_OPPORTUNITIES_WITH_ESTIMATES: 'object-detailed/set-opportunities-with-estimates',
  SET_OPPORTUNITIES_WITH_PERSONS: 'object-detailed/set-opportunities-with-persons',
  SET_ACTIVE_REGISTRATION: 'object-detailed/set-active-registration',
  SET_FINDED_ESTIMATE: 'object-detailed/set-finded-estimate',
  SET_EVENTS_PAGES: 'object-detailed/set-events-pages',
  SET_LOADING_EVENTS_PAGES: 'object-detailed/set-loading-events-pages',
  SET_TASK_LIST: 'object-detailed/set-task-list'
};

const setSidePageHistoryContent = createAction(
  ActionType.SET_SIDE_PAGE_HISTORY_CONTENT,
  sidePageHistoryContent => ({
    payload: {
      sidePageHistoryContent
    }
  })
);

const setModalHeaderNameEdit = createAction(
  ActionType.SET_MODAL_HEADER_NAME_EDIT,
  modalHeaderNameEdit => ({
    payload: {
      modalHeaderNameEdit
    }
  })
);

const setModalHeaderNotifications = createAction(
  ActionType.SET_MODAL_HEADER_NOTIFICATIONS,
  modalHeaderNotifications => ({
    payload: {
      modalHeaderNotifications
    }
  })
);

const setModalMainInfoDescriptionEdit = createAction(
  ActionType.SET_MODAL_MAIN_INFO_DESCRIPTION_EDIT,
  modalMainInfoDescriptionEdit => ({
    payload: {
      modalMainInfoDescriptionEdit
    }
  })
);

const setModalMainInfoLinksEdit = createAction(
  ActionType.SET_MODAL_MAIN_INFO_LINKS_EDIT,
  modalMainInfoLinksEdit => ({
    payload: {
      modalMainInfoLinksEdit
    }
  })
);

const setModalMainInfoImagesEdit = createAction(
  ActionType.SET_MODAL_MAIN_INFO_IMAGES_EDIT,
  modalMainInfoImagesEdit => ({
    payload: {
      modalMainInfoImagesEdit
    }
  })
);

const setModalMainInfoImagePreview = createAction(
  ActionType.SET_MODAL_MAIN_INFO_IMAGE_PREVIEW,
  modalMainInfoImagePreview => ({
    payload: {
      modalMainInfoImagePreview
    }
  })
);

const setModalMainInfoAddressEdit = createAction(
  ActionType.SET_MODAL_MAIN_INFO_ADDRESS_EDIT,
  modalMainInfoAddressEdit => ({
    payload: {
      modalMainInfoAddressEdit
    }
  })
);

const setModalMainInfoMapEdit = createAction(
  ActionType.SET_MODAL_MAIN_INFO_MAP_EDIT,
  modalMainInfoMapEdit => ({
    payload: {
      modalMainInfoMapEdit
    }
  })
);

const setModalMainInfoMapEditAcception = createAction(
  ActionType.SET_MODAL_MAIN_INFO_MAP_EDIT_ACCEPTION,
  modalMainInfoMapEditAcception => ({
    payload: {
      modalMainInfoMapEditAcception
    }
  })
);

const setModalPersonsAddLegalPerson = createAction(
  ActionType.SET_MODAL_PERSONS_ADD_LEGAL_PERSON,
  modalPersonsAddLegalPerson => ({
    payload: {
      modalPersonsAddLegalPerson
    }
  })
);

const setModalPersonsChangeLegalRole = createAction(
  ActionType.SET_MODAL_PERSONS_CHANGE_LEGAL_ROLE,
  modalPersonsChangeLegalRole => ({
    payload: {
      modalPersonsChangeLegalRole
    }
  })
);

const setModalPersonsAddEmployee = createAction(
  ActionType.SET_MODAL_PERSONS_ADD_EMPLOYEE,
  modalPersonsAddEmployee => ({
    payload: {
      modalPersonsAddEmployee
    }
  })
);

const setModalPersonsMakeMeeting = createAction(
  ActionType.SET_MODAL_PERSONS_MAKE_MEETING,
  modalPersonsMakeMeeting => ({
    payload: {
      modalPersonsMakeMeeting
    }
  })
);

const setModalPersonsMakeCall = createAction(
  ActionType.SET_MODAL_PERSONS_MAKE_CALL,
  modalPersonsMakeCall => ({
    payload: {
      modalPersonsMakeCall
    }
  })
);

const setModalOpportunityCreation = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_CREATION,
  modalOpportunityCreation => ({
    payload: {
      modalOpportunityCreation
    }
  })
);

const setModalOpportunityDataEdit = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_DATA_EDIT,
  modalOpportunityDataEdit => ({
    payload: {
      modalOpportunityDataEdit
    }
  })
);

const setModalOpportunityDescriptionEdit = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_DESCRIPTION_EDIT,
  modalOpportunityDescriptionEdit => ({
    payload: {
      modalOpportunityDescriptionEdit
    }
  })
);

const setModalOpportunityAddRegistration = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_ADD_REGISTRATION,
  modalOpportunityAddRegistration => ({
    payload: {
      modalOpportunityAddRegistration
    }
  })
);

const setModalOpportunityRemoveRegistration = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_REMOVE_REGISTRATION,
  modalOpportunityRemoveRegistration => ({
    payload: {
      modalOpportunityRemoveRegistration
    }
  })
);

const setModalOpportunityFilesEdit = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_FILES_EDIT,
  modalOpportunityFilesEdit => ({
    payload: {
      modalOpportunityFilesEdit
    }
  })
);

const setModalOpportunityAddEstimate = createAction(
  ActionType.SET_MODAL_OPPORTUNITY_ADD_ESTIMATE,
  modalOpportunityAddEstimate => ({
    payload: {
      modalOpportunityAddEstimate
    }
  })
);

const setModalHistoryAddComment = createAction(
  ActionType.SET_MODAL_HISTORY_ADD_COMMENT,
  modalHistoryAddComment => ({
    payload: {
      modalHistoryAddComment
    }
  })
);

const setModalHistoryMakeCall = createAction(
  ActionType.SET_MODAL_HISTORY_MAKE_CALL,
  modalHistoryMakeCall => ({
    payload: {
      modalHistoryMakeCall
    }
  })
);

const setModalHistoryAddTask = createAction(
  ActionType.SET_MODAL_HISTORY_ADD_TASK,
  modalHistoryAddTask => ({
    payload: {
      modalHistoryAddTask
    }
  })
);

const setOpportunitiesDirections = createAction(
  ActionType.SET_OPPORTUNITIES_DIRECTIONS,
  opportunitiesDirections => ({
    payload: {
      opportunitiesDirections
    }
  })
);

const setMaterialProviders = createAction(
  ActionType.SET_MATERIAL_PROVIDERS,
  materialProviders => ({
    payload: {
      materialProviders
    }
  })
);

const setActiveObject = createAction(
  ActionType.SET_ACTIVE_OBJECT,
  activeObject => ({
    payload: {
      activeObject
    }
  })
);

const setObjectLoading = createAction(
  ActionType.SET_OBJECT_LOADING,
  objectLoading => ({
    payload: {
      objectLoading
    }
  })
);

const setFavorite = createAction(
  ActionType.SET_FAVORITE,
  isFavorite => ({
    payload: {
      isFavorite
    }
  })
);

const setSubscribes = createAction(
  ActionType.SET_SUBSCRIBES,
  subscribes => ({
    payload: {
      subscribes
    }
  })
);

const setContentView = createAction(
  ActionType.SET_CONTENT_VIEW,
  contentView => ({
    payload: {
      contentView
    }
  })
);

const setActiveLinks = createAction(
  ActionType.SET_ACTIVE_LINKS,
  activeLinks => ({
    payload: {
      activeLinks
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

const setFullAddress = createAction(
  ActionType.SET_FULL_ADDRESSES,
  fullAddress => ({
    payload: {
      fullAddress
    }
  })
);

const setAddressFromMap = createAction(
  ActionType.SET_ADDRESS_FROM_MAP,
  addressFromMap => ({
    payload: {
      addressFromMap
    }
  })
);

const setLegalPersonPossibleRoles = createAction(
  ActionType.SET_LEGAL_PERSONS_POSSIBLE_ROLES,
  legalPersonPossibleRoles => ({
    payload: {
      legalPersonPossibleRoles
    }
  })
);

const setLegalPersonsWithEmployees = createAction(
  ActionType.SET_LEGAL_PERSONS_WITH_EMPLOYEES,
  legalPersonsWithEmployees => ({
    payload: {
      legalPersonsWithEmployees
    }
  })
);

const setLegalPersonsList = createAction(
  ActionType.SET_LEGAL_PERSONS_LIST,
  legalPersonsList => ({
    payload: {
      legalPersonsList
    }
  })
);

const setActiveLegalPerson = createAction(
  ActionType.SET_ACTIVE_LEGAL_PERSON,
  activeLegalPerson => ({
    payload: {
      activeLegalPerson
    }
  })
);

const setActiveOpportunity = createAction(
  ActionType.SET_ACTIVE_OPPORTUNITY,
  activeOpportunity => ({
    payload: {
      activeOpportunity
    }
  })
);

const setEstimates = createAction(
  ActionType.SET_OPPORTUNITIES_WITH_ESTIMATES,
  estimates => ({
    payload: {
      estimates
    }
  })
);

const setOpportunitiesWithPersons = createAction(
  ActionType.SET_OPPORTUNITIES_WITH_PERSONS,
  opportunitiesWithPersons => ({
    payload: {
      opportunitiesWithPersons
    }
  })
);

const setFindedEstimate = createAction(
  ActionType.SET_FINDED_ESTIMATE,
  findedEstimate => ({
    payload: {
      findedEstimate
    }
  })
);

const setEventsPages = createAction(
  ActionType.SET_EVENTS_PAGES,
  eventsPages => ({
    payload: {
      eventsPages
    }
  })
);

const setLoadingEventsPages = createAction(
  ActionType.SET_LOADING_EVENTS_PAGES,
  loadingEventsPages => ({
    payload: {
      loadingEventsPages
    }
  })
);

const setTaskList = createAction(
  ActionType.SET_TASK_LIST,
  taskList => ({
    payload: {
      taskList
    }
  })
);

const closeAllModalWindows = () => async dispatch => {
  dispatch(setSidePageHistoryContent());
  dispatch(setModalHeaderNameEdit());
  dispatch(setModalHeaderNotifications());
  dispatch(setModalMainInfoDescriptionEdit());
  dispatch(setModalMainInfoLinksEdit());
  dispatch(setModalMainInfoImagesEdit());
  dispatch(setModalMainInfoImagePreview());
  dispatch(setModalMainInfoAddressEdit());
  dispatch(setModalMainInfoMapEdit());
  dispatch(setModalMainInfoMapEditAcception());
  dispatch(setModalPersonsAddLegalPerson());
  dispatch(setModalPersonsChangeLegalRole());
  dispatch(setModalPersonsAddEmployee());
  dispatch(setModalPersonsMakeMeeting());
  dispatch(setModalPersonsMakeCall());
  dispatch(setModalOpportunityCreation());
  dispatch(setModalOpportunityDataEdit());
  dispatch(setModalOpportunityDescriptionEdit());
  dispatch(setModalOpportunityAddRegistration());
  dispatch(setModalOpportunityRemoveRegistration());
  dispatch(setModalOpportunityFilesEdit());
  dispatch(setModalOpportunityAddEstimate());
  dispatch(setModalHistoryAddComment());
  dispatch(setModalHistoryMakeCall());
  dispatch(setModalHistoryAddTask());
};

const getOpportunitiesDirections = () => async dispatch => {
  const opportunitiesDirections = await objectsService.getObjectsData({ type: 'fetchDirections' });

  dispatch(setOpportunitiesDirections(opportunitiesDirections.data));
};

const getMaterialProviders = () => async dispatch => {
  const materialProviders = await objectsService.getMaterialProviders();

  dispatch(setMaterialProviders(materialProviders));
};

const getLegalPersonPossibleRoles = () => async dispatch => {
  const legalPersonPossibleRoles = await objectsService.getObjectsData({ type: 'fetchRoles' });

  dispatch(setLegalPersonPossibleRoles(legalPersonPossibleRoles.data));
};

const getActiveLinks = objectId => async dispatch => {
  const links = await objectsService.getObjectLinks(objectId);

  dispatch(setActiveLinks(links));
};

const getSubscribes = objectId => async dispatch => {
  const subscribes = await objectsService.getSubscribes(objectId);

  if (subscribes.url) {
    dispatch(setSubscribes(subscribes));
  } else {
    dispatch(setSubscribes(subscribes.map(elem => elem.type.id)));
  }
};

const updateSubscribes = (newData, removed) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject } } = getRootState();
  const subscribes = await objectsService.postSubscribes(activeObject.id, newData);

  console.log(subscribes, removed);
  dispatch(setSubscribes(subscribes.map(elem => elem.type.id)));
};

const getPersons = async (legalPeoples, naturalPeoples, possibleRoles, status) => {
  const filteredLegalPeoples = legalPeoples.filter(elem => elem.legalPerson);
  const activeNaturalPersons = [];
  const activeLegalPersons = await Promise.all(filteredLegalPeoples.map(async item => {
    const person = await objectsService.getObjectsData({
      type: 'fetchLegalPerson',
      id: item.legalPerson
    });

    if (person.data.employees.length > 0) {
      await Promise.all(person.data.employees.map(async elem => {
        const naturalPerson = await objectsService.getObjectsData({
          type: 'fetchNaturalPerson',
          id: elem.naturalPerson
        });

        if (!activeNaturalPersons.find(people => people.id === naturalPerson.data.id)) {
          activeNaturalPersons.push({
            ...naturalPerson.data,
            personId: naturalPeoples.find(
              people => people.naturalPerson === naturalPerson.data.id
            )?.id || '',
            comment: naturalPeoples.find(
              people => people.naturalPerson === naturalPerson.data.id
            )?.comment || ''
          });
        }
      }));
    }

    return person.data;
  }));

  const newLegalPersonsWithEmployees = filteredLegalPeoples.map(item => ({
    id: item.id,
    legalPerson: item.legalPerson,
    role: possibleRoles.find(elem => elem.id === item.role) || { name: 'Роль не выбрана' },
    legalPersonName: activeLegalPersons.find(elem => elem.id === item.legalPerson).name || '',
    address: activeLegalPersons.find(elem => elem.id === item.legalPerson).address || '',
    employees: [],
    activeEmployees: [],
    status
  }));

  newLegalPersonsWithEmployees.forEach((item, index) => {
    activeNaturalPersons.forEach(elem => {
      if (elem.posts.find(person => person.legalPerson === item.legalPerson)
      && naturalPeoples.find(person => person.naturalPerson === elem.id)) {
        newLegalPersonsWithEmployees[index].activeEmployees.push(elem);
      } else if (elem.posts.find(person => person.legalPerson === item.legalPerson)) {
        newLegalPersonsWithEmployees[index].employees.push(elem);
      }
    });
  });

  return newLegalPersonsWithEmployees;
};

const getLegalPersonsWithEmployees = (legalPeoples, naturalPeoples) => async (dispatch, getRootState) => {
  const { objectDetailed: { legalPersonPossibleRoles } } = getRootState();

  if (legalPeoples && naturalPeoples) {
    const newLegalPersonsWithEmployees = await getPersons(
      legalPeoples,
      naturalPeoples,
      legalPersonPossibleRoles
    );

    dispatch(setLegalPersonsWithEmployees(newLegalPersonsWithEmployees));
  } else {
    dispatch(setLegalPersonsWithEmployees(undefined));
  }
};

const getRegistrations = async opportunityId => {
  const registrations = await objectsService.getRegistrations({ opportunity: opportunityId });

  return registrations;
};

const getOpportunitiesWithPersons = opportunities => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      legalPersonPossibleRoles,
      activeObject
    }
  } = getRootState();

  if (opportunities) {
    const newOpportunitiesWithPersons = await Promise.all(opportunities.map(
      async opportunity => ({
        ...opportunity,
        registrations: await getRegistrations(opportunity.id),
        legalPersonsWithEmployees: [
          ...await getPersons(
            [...activeObject.legalPeople],
            opportunity.naturalPeople,
            legalPersonPossibleRoles,
            'readable'
          ),
          ...await getPersons(
            [...opportunity.legalPeople],
            opportunity.naturalPeople,
            legalPersonPossibleRoles
          )]
      })
    ));

    dispatch(setActiveOpportunity(
      newOpportunitiesWithPersons.find(opportunity => opportunity.status === '0')
      || newOpportunitiesWithPersons.find(opportunity => opportunity.status === '1')
      || newOpportunitiesWithPersons[0]
    ));

    dispatch(setOpportunitiesWithPersons(newOpportunitiesWithPersons));
  } else {
    dispatch(setOpportunitiesWithPersons(undefined));
  }
};

const getActiveOpportunity = opportunity => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      opportunitiesWithPersons,
      legalPersonPossibleRoles,
      activeObject
    }
  } = getRootState();
  const findedOpportunity = opportunitiesWithPersons.find(elem => elem.id === opportunity.id);

  if (findedOpportunity) {
    dispatch(setActiveOpportunity({
      ...findedOpportunity,
      ...opportunity
    }));
  } else {
    const legalPersonsWithEmployees = await getPersons(
      [
        ...activeObject.legalPeople,
        ...opportunity.legalPeople
      ],
      [],
      legalPersonPossibleRoles
    );

    dispatch(setOpportunitiesWithPersons([
      ...opportunitiesWithPersons,
      {
        ...opportunity,
        legalPersonsWithEmployees,
        registrations: []
      }
    ]));
    dispatch(setActiveOpportunity({
      ...opportunity,
      legalPersonsWithEmployees,
      registrations: []
    }));
  }
};

const getEstimates = opportunities => async dispatch => {
  if (opportunities) {
    const fullEstimates = await Promise.all(opportunities.map(async opportunity => {
      const estimatesList = await Promise.all(opportunity.estimates.map(async estimate => {
        const fullEstimate = await objectsService.getObjectsData({
          type: 'fetchEstimate',
          id: estimate.estimate
        });

        return fullEstimate.data;
      }));

      return {
        id: opportunity.id,
        estimates: estimatesList
      };
    }));

    dispatch(setEstimates(fullEstimates));
  }
};

const getTaskList = () => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject
    }
  } = getRootState();

  if (activeObject) {
    const taskList = await objectsService.getTaskList(activeObject.id);

    dispatch(setTaskList(taskList));
  }
};

const getEventsFirstPage = () => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject
    }
  } = getRootState();

  if (activeObject) {
    dispatch(setLoadingEventsPages(true));

    const newPage = await objectsService.getEventsPages({ page: 1 }, activeObject.id);

    if (newPage) {
      dispatch(setEventsPages({
        current_page: newPage.current_page,
        last_page: newPage.last_page,
        data: newPage.data
      }));
    }
    dispatch(setLoadingEventsPages());
  }
};

const getEventsMorePages = page => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject,
      eventsPages
    }
  } = getRootState();

  if (activeObject) {
    const newPage = await objectsService.getEventsPages({ page }, activeObject.id);

    if (newPage) {
      dispatch(setEventsPages({
        current_page: newPage.current_page,
        last_page: newPage.last_page,
        data: [
          ...eventsPages.data,
          ...newPage.data.filter(elem => !eventsPages.data.find(item => item.id === elem.id))
        ]
      }));
    }
  }
};

const getNewEvents = () => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject,
      eventsPages
    }
  } = getRootState();

  const firstPage = await objectsService.getEventsPages({ page: 1 }, activeObject.id);

  if (firstPage) {
    dispatch(setEventsPages({
      ...eventsPages,
      last_page: firstPage.last_page,
      data: [
        ...firstPage.data.filter(elem => !eventsPages.data.find(item => item.id === elem.id)),
        ...eventsPages.data
      ]
    }));
  }
};

const getActiveObject = objectId => async dispatch => {
  if (objectId) {
    const object = await objectsService.getObjectsData({ type: 'fetchObject', id: objectId });

    await Promise.all([
      dispatch(setActiveObject(object.data)),
      dispatch(getLegalPersonsWithEmployees(object.data.legalPeople, object.data.naturalPeople)),
      dispatch(setFavorite(object.data.isFavorite)),
      dispatch(getActiveLinks(objectId)),
      dispatch(getSubscribes(objectId))
    ]);
    dispatch(setObjectLoading(false));
    await Promise.all([
      dispatch(getOpportunitiesWithPersons(object.data.opportunities)),
      dispatch(getEstimates(object.data.opportunities)),
      dispatch(getEventsFirstPage()),
      dispatch(getTaskList())
    ]);
  } else {
    dispatch(setObjectLoading(true));
    await Promise.all([
      dispatch(setTaskList()),
      dispatch(setEventsPages()),
      dispatch(closeAllModalWindows()),
      dispatch(setActiveObject()),
      dispatch(setFavorite()),
      dispatch(setSubscribes()),
      dispatch(setActiveLinks()),
      dispatch(setActiveOpportunity()),
      dispatch(setEstimates()),
      dispatch(setLegalPersonsWithEmployees()),
      dispatch(setOpportunitiesWithPersons()),
      dispatch(setContentView('object'))
    ]);
  }
};

const updateObjectData = newObjectData => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject } } = getRootState();

  const form = new FormData();
  if (!newObjectData.object) {
    form.append('object', JSON.stringify({ id: activeObject.id }));
  }
  if (newObjectData.object) {
    form.append('object', JSON.stringify({ ...newObjectData.object, id: activeObject.id }));
  }
  if (newObjectData.files) {
    form.append('files[0]', newObjectData.files);
  }
  if (newObjectData.deleteFiles) {
    form.append('deleteFiles', JSON.stringify([newObjectData.deleteFiles]));
  }

  const updatedObject = await objectsService.postObjectsData({ type: 'changeObject' }, form, 'multipart/form-data');

  dispatch(setActiveObject({
    ...activeObject,
    ...updatedObject.data
  }));
};

const getLegalPersonsList = value => async dispatch => {
  if (value) {
    const legalPersonsList = await objectsService.getCompanyList({ query: value });

    dispatch(setLegalPersonsList(legalPersonsList));
  } else {
    dispatch(setLegalPersonsList());
  }
};

const addLegalPerson = addedPerson => async (dispatch, getRootState) => {
  const { objectDetailed: {
    activeObject,
    activeOpportunity,
    opportunitiesWithPersons,
    legalPersonsWithEmployees,
    legalPersonPossibleRoles
  } } = getRootState();
  const updatedObject = await objectsService.postObjectsData(
    { type: 'changeObjectLegalPerson', objectId: activeObject.id },
    addedPerson
  );

  const newLegalPerson = await getPersons(
    updatedObject.data.legalPeople.filter(item => !activeObject.legalPeople.find(elem => elem.id === item.id)),
    updatedObject.data.naturalPeople,
    legalPersonPossibleRoles
  );

  if (activeOpportunity) {
    const newOpportunityWithPersons = [
      ...activeOpportunity.legalPersonsWithEmployees.filter(
        elem => elem.status === 'readable'
      ),
      {
        ...newLegalPerson[0],
        status: 'readable',
        activeEmployees: [],
        employees: [
          ...newLegalPerson[0].activeEmployees,
          ...newLegalPerson[0].employees
        ]
      },
      ...activeOpportunity.legalPersonsWithEmployees.filter(
        elem => elem.status !== 'readable'
      )
    ];

    dispatch(setActiveOpportunity({
      ...activeOpportunity,
      legalPersonsWithEmployees: newOpportunityWithPersons
    }));
    dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
      opportunity => ({
        ...opportunity,
        legalPersonsWithEmployees: newOpportunityWithPersons
      })
    )));
  }

  dispatch(setLegalPersonsWithEmployees([
    ...legalPersonsWithEmployees,
    ...newLegalPerson
  ]));
  dispatch(setActiveObject({ ...activeObject, ...updatedObject.data }));
  dispatch(getNewEvents());
};

const addOpportunitiesLegalPerson = addedPerson => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeOpportunity,
      activeObject,
      legalPersonPossibleRoles,
      opportunitiesWithPersons
    }
  } = getRootState();
  const updatedOpportunity = await objectsService.postObjectsData(
    { type: 'changeOpportunityLegalPerson', opportunityId: activeOpportunity.id },
    addedPerson
  );

  const filteredLegalPeoples = updatedOpportunity.data.legalPeople.filter(
    item => !activeOpportunity.legalPeople.find(elem => elem.id === item.id)
  );

  const newOpportunitiesWithPersons = await {
    ...updatedOpportunity.data,
    legalPersonsWithEmployees: [
      ...activeOpportunity.legalPersonsWithEmployees,
      ...await getPersons(
        [...filteredLegalPeoples],
        activeOpportunity.naturalPeople,
        legalPersonPossibleRoles
      )],
    registrations: activeOpportunity.registrations
  };

  dispatch(setActiveOpportunity(newOpportunitiesWithPersons));
  dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
    opportunity => {
      if (opportunity.id === activeOpportunity.id) {
        return newOpportunitiesWithPersons;
      }
      return opportunity;
    }
  )));
  dispatch(setActiveObject({
    ...activeObject,
    opportunities: activeObject.opportunities.map(
      opportunity => {
        if (updatedOpportunity.data.id === opportunity.id) {
          return updatedOpportunity.data;
        }
        return opportunity;
      }
    )
  }));
  dispatch(getNewEvents());
};

const updateLegalPersonRoles = updatedPerson => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject,
      legalPersonsWithEmployees,
      legalPersonPossibleRoles
    }
  } = getRootState();
  const updatedObject = await objectsService.postObjectsData(
    { type: 'changeObjectLegalPerson', objectId: activeObject.id },
    updatedPerson
  );

  const updatedLegalPersonsWithEmployees = legalPersonsWithEmployees.map(item => {
    if (item.id === updatedPerson.id) {
      return {
        ...item,
        role: legalPersonPossibleRoles.find(elem => elem.id === updatedPerson.role)
      };
    }
    return item;
  });

  dispatch(setActiveObject({ ...activeObject, ...updatedObject.data }));
  dispatch(setLegalPersonsWithEmployees(updatedLegalPersonsWithEmployees));
};

const updateOpportunitiesLegalPersonRoles = updatedPerson => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject,
      activeOpportunity,
      opportunitiesWithPersons,
      legalPersonPossibleRoles
    }
  } = getRootState();
  const updatedOpportunity = await objectsService.postObjectsData(
    { type: 'changeOpportunityLegalPerson', opportunityId: activeOpportunity.id },
    updatedPerson
  );

  const newOpportunityWithPersons = {
    ...activeOpportunity,
    legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.map(item => {
      if (item.id === updatedPerson.id) {
        return {
          ...item,
          role: legalPersonPossibleRoles.find(elem => elem.id === updatedPerson.role)
        };
      }
      return item;
    })
  };

  dispatch(setActiveOpportunity(newOpportunityWithPersons));
  dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
    opportunity => {
      if (opportunity.id === activeOpportunity.id) {
        return newOpportunityWithPersons;
      }
      return opportunity;
    }
  )));
  dispatch(setActiveObject({
    ...activeObject,
    opportunities: activeObject.opportunities.map(
      opportunity => {
        if (updatedOpportunity.data.id === opportunity.id) {
          return updatedOpportunity.data;
        }
        return opportunity;
      }
    )
  }));
};

const removeLegalPerson = personId => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject,
      activeOpportunity,
      legalPersonsWithEmployees,
      opportunitiesWithPersons
    }
  } = getRootState();
  const updatedObject = await objectsService.postObjectsData({
    type: 'removeObjectLegalPerson',
    objectId: activeObject.id,
    id: personId
  });

  const updatedLegalPersonsWithEmployees = legalPersonsWithEmployees.filter(
    item => updatedObject.data.find(elem => elem.id === item.id)
  );

  if (activeOpportunity) {
    const newOpportunityWithPersons = {
      ...activeOpportunity,
      legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.filter(
        item => updatedObject.data.find(elem => elem.id === item.id)
      )
    };

    dispatch(setActiveOpportunity(newOpportunityWithPersons));
    dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
      opportunity => ({
        ...opportunity,
        legalPersonsWithEmployees: opportunity.legalPersonsWithEmployees.filter(
          item => updatedObject.data.find(elem => elem.id === item.id)
        )
      })
    )));
  }

  dispatch(setActiveObject({
    ...activeObject,
    ...updatedObject.data
  }));
  dispatch(setLegalPersonsWithEmployees(updatedLegalPersonsWithEmployees));
};

const removeOpportunitiesLegalPerson = personId => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeObject,
      activeOpportunity,
      opportunitiesWithPersons
    }
  } = getRootState();
  await objectsService.postObjectsData({
    type: 'removeOpportunityLegalPerson',
    opportunityId: activeOpportunity.id,
    id: personId
  });

  const newOpportunityWithPersons = {
    ...activeOpportunity,
    legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.filter(
      item => item.id !== personId
    )
  };

  dispatch(setActiveObject({
    ...activeObject,
    opportunities: activeObject.opportunities.map(
      opportunity => {
        if (opportunity.id === activeOpportunity.id) {
          return {
            ...opportunity,
            legalPeople: opportunity.legalPeople.filter(
              elem => elem.id !== personId
            )
          };
        }
        return opportunity;
      }
    )
  }));
  dispatch(setActiveOpportunity(newOpportunityWithPersons));
  dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
    opportunity => {
      if (opportunity.id === activeOpportunity.id) {
        return {
          ...opportunity,
          legalPersonsWithEmployees: opportunity.legalPersonsWithEmployees.filter(
            elem => elem.id !== personId
          )
        };
      }
      return opportunity;
    }
  )));
};

const createNaturalPerson = (legalPersonId, newNaturalPersonData) => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeOpportunity,
      legalPersonsWithEmployees,
      opportunitiesWithPersons
    }
  } = getRootState();
  const newEmployee = await objectsService.addNaturalPerson(legalPersonId, newNaturalPersonData);

  if (newEmployee) {
    const fullEmployee = await objectsService.getObjectsData({
      type: 'fetchNaturalPerson',
      id: newEmployee.id
    });

    dispatch(setLegalPersonsWithEmployees(legalPersonsWithEmployees.map(
      legalPerson => {
        if (legalPerson.legalPerson === legalPersonId) {
          return {
            ...legalPerson,
            employees: [
              ...legalPerson.employees,
              fullEmployee.data
            ]
          };
        }
        return legalPerson;
      }
    )));

    if (activeOpportunity) {
      dispatch(setActiveOpportunity({
        ...activeOpportunity,
        legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.map(
          legalPerson => {
            if (legalPerson.legalPerson === legalPersonId) {
              return {
                ...legalPerson,
                employees: [
                  ...legalPerson.employees,
                  fullEmployee.data
                ]
              };
            }
            return legalPerson;
          }
        )
      }));
      dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
        opportunity => ({
          ...opportunity,
          legalPersonsWithEmployees: opportunity.legalPersonsWithEmployees.map(
            legalPerson => {
              if (legalPerson.legalPerson === legalPersonId) {
                return {
                  ...legalPerson,
                  employees: [
                    ...legalPerson.employees,
                    fullEmployee.data
                  ]
                };
              }
              return legalPerson;
            }
          )
        })
      )));
    }
  }
};

const activateNaturalPerson = (legalPersonId, naturalPersonId) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject, legalPersonsWithEmployees } } = getRootState();
  const updatedObject = await objectsService.postObjectsData({
    type: 'changeObjectNaturalPerson',
    objectId: activeObject.id
  }, {
    naturalPerson: naturalPersonId
  });

  if (updatedObject) {
    const updatedLegalPersonsWithEmployees = legalPersonsWithEmployees.map(
      legalPerson => {
        if (legalPerson.id === legalPersonId) {
          const activeEmployees = [
            ...legalPerson.activeEmployees,
            legalPerson.employees.find(
              naturalPerson => naturalPerson.id === naturalPersonId
            )
          ];
          const employees = legalPerson.employees.filter(
            naturalPerson => naturalPerson.id !== naturalPersonId
          );

          return {
            ...legalPerson,
            activeEmployees,
            employees
          };
        }
        return legalPerson;
      }
    );

    dispatch(setLegalPersonsWithEmployees(updatedLegalPersonsWithEmployees));
  }
};

const activateOpportunitiesNaturalPerson = (legalPersonId, naturalPersonId) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeOpportunity, opportunitiesWithPersons } } = getRootState();
  const updatedOpportunity = await objectsService.postObjectsData({
    type: 'changeOpportunityNaturalPerson',
    opportunityId: activeOpportunity.id
  }, {
    naturalPerson: naturalPersonId
  });

  if (updatedOpportunity) {
    const newOpportunityWithPersons = {
      ...activeOpportunity,
      legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.map(
        legalPerson => {
          if (legalPerson.id === legalPersonId) {
            const activeEmployees = [
              ...legalPerson.activeEmployees,
              legalPerson.employees.find(
                naturalPerson => naturalPerson.id === naturalPersonId
              )
            ];
            const employees = legalPerson.employees.filter(
              naturalPerson => naturalPerson.id !== naturalPersonId
            );
            return {
              ...legalPerson,
              activeEmployees,
              employees
            };
          }
          return legalPerson;
        }
      )
    };

    dispatch(setActiveOpportunity(newOpportunityWithPersons));
    dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
      opportunity => {
        if (opportunity.id === activeOpportunity.id) {
          return newOpportunityWithPersons;
        }
        return opportunity;
      }
    )));
  }
};

const disableNaturalPerson = (legalPersonId, naturalPersonId, employeeId) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject, legalPersonsWithEmployees } } = getRootState();
  const updatedObject = await objectsService.postObjectsData({
    type: 'removeObjectNaturalPerson',
    objectId: activeObject.id,
    id: employeeId
  });

  if (updatedObject) {
    const updatedLegalPersonsWithEmployees = legalPersonsWithEmployees.map(
      legalPerson => {
        if (legalPerson.id === legalPersonId) {
          const employees = [
            ...legalPerson.employees,
            {
              ...legalPerson.activeEmployees.find(
                naturalPerson => naturalPerson.id === naturalPersonId
              ),
              comment: ''
            }
          ];
          const activeEmployees = legalPerson.activeEmployees.filter(
            naturalPerson => naturalPerson.id !== naturalPersonId
          );
          return {
            ...legalPerson,
            activeEmployees,
            employees
          };
        }
        return legalPerson;
      }
    );

    dispatch(setLegalPersonsWithEmployees(updatedLegalPersonsWithEmployees));
  }
};

const disableOpportunityNaturalPerson = (
  legalPersonId,
  naturalPersonId,
  employeeId
) => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeOpportunity,
      opportunitiesWithPersons
    } } = getRootState();
  const updatedOpportunity = await objectsService.postObjectsData({
    type: 'removeOpportunityNaturalPerson',
    opportunityId: activeOpportunity.id,
    id: employeeId
  });

  if (updatedOpportunity) {
    const newOpportunityWithPersons = {
      ...activeOpportunity,
      legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.map(
        legalPerson => {
          if (legalPerson.id === legalPersonId) {
            const employees = [
              ...legalPerson.employees,
              {
                ...legalPerson.activeEmployees.find(
                  naturalPerson => naturalPerson.id === naturalPersonId
                ),
                comment: ''
              }
            ];
            const activeEmployees = legalPerson.activeEmployees.filter(
              naturalPerson => naturalPerson.id !== naturalPersonId
            );
            return {
              ...legalPerson,
              activeEmployees,
              employees
            };
          }
          return legalPerson;
        }
      )
    };

    dispatch(setActiveOpportunity(newOpportunityWithPersons));
    dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
      opportunity => {
        if (opportunity.id === activeOpportunity.id) {
          return newOpportunityWithPersons;
        }
        return opportunity;
      }
    )));
  }
};

const updateComment = (
  legalPersonId,
  naturalPersonId,
  employeeId,
  updatedComment
) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject, legalPersonsWithEmployees } } = getRootState();
  const updatedObject = await objectsService.postObjectsData({
    type: 'changeObjectNaturalPerson',
    objectId: activeObject.id
  }, {
    id: employeeId,
    created_by: 0,
    comment: updatedComment,
    naturalPerson: naturalPersonId
  });

  if (updatedObject) {
    const updatedLegalPersonsWithEmployees = legalPersonsWithEmployees.map(
      legalPerson => {
        if (legalPerson.id === legalPersonId) {
          const activeEmployees = legalPerson.activeEmployees.map(
            naturalPerson => {
              if (naturalPerson.id === naturalPersonId) {
                return { ...naturalPerson, comment: updatedComment };
              }
              return naturalPerson;
            }
          );

          return { ...legalPerson, activeEmployees };
        }
        return legalPerson;
      }
    );

    dispatch(setLegalPersonsWithEmployees(updatedLegalPersonsWithEmployees));
  }
};

const updateOpportunityComment = (
  legalPersonId,
  naturalPersonId,
  employeeId,
  updatedComment
) => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeOpportunity,
      opportunitiesWithPersons
    }
  } = getRootState();
  const updatedObject = await objectsService.postObjectsData({
    type: 'changeOpportunityNaturalPerson',
    opportunityId: activeOpportunity.id
  }, {
    id: employeeId,
    created_by: 0,
    comment: updatedComment,
    naturalPerson: naturalPersonId
  });

  if (updatedObject) {
    const newOpportunityWithPersons = {
      ...activeOpportunity,
      legalPersonsWithEmployees: activeOpportunity.legalPersonsWithEmployees.map(
        legalPerson => {
          if (legalPerson.id === legalPersonId) {
            const activeEmployees = legalPerson.activeEmployees.map(
              naturalPerson => {
                if (naturalPerson.id === naturalPersonId) {
                  return {
                    ...naturalPerson,
                    comment: updatedComment
                  };
                }
                return naturalPerson;
              }
            );
            return {
              ...legalPerson,
              activeEmployees
            };
          }
          return legalPerson;
        }
      )
    };

    dispatch(setActiveOpportunity(newOpportunityWithPersons));
    dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
      opportunity => {
        if (opportunity.id === activeOpportunity.id) {
          return newOpportunityWithPersons;
        }
        return opportunity;
      }
    )));
  }
};

const updateActiveLinks = updatedLinks => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject } } = getRootState();

  await Promise.all(updatedLinks.map(async item => {
    if (item.deleted && !item.created) {
      await objectsService.deleteObjectLink(item.id);
    }
    if (item.created && !item.deleted) {
      await objectsService.addObjectLink(activeObject.id, { text: item.text, link: item.link });
    }
    if (item.changed && !item.deleted && !item.created) {
      await objectsService.updateObjectLink(item.id, { text: item.text, link: item.link });
    }
  }));

  const links = await objectsService.getObjectLinks(activeObject.id);

  dispatch(setActiveLinks(links));
};

const updateFavorite = () => async (dispatch, getRootState) => {
  const { objectDetailed: { isFavorite, activeObject: { id } } } = getRootState();

  if (isFavorite) {
    await objectsService.getObjectsData({ type: 'resetFavorite', id });
    dispatch(setFavorite(0));
  } else {
    await objectsService.getObjectsData({ type: 'setFavorite', id });
    dispatch(setFavorite(1));
  }
};

const updateDadataAddresses = value => async dispatch => {
  const addresses = await addressService.getDadataAddressList({ query: value, count: 10 });

  dispatch(setDadataAddresses(addresses.suggestions));
};

const getDadataAddress = () => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject: { fiasGUID, address } } } = getRootState();

  const region = await addressService.getDadataAddress({ query: fiasGUID });
  let fullAddress = 'Адрес не указан';

  if (fiasGUID && region) {
    fullAddress = address
      ? `${region.suggestions[0].value}, ${address}`
      : region.suggestions[0].value;
  }

  dispatch(setFullAddress(fullAddress));
};

const getAddressFromMap = coords => async dispatch => {
  const suggestions = await objectsService.getObjectsData({
    type: 'resolveGeolocationToAddress',
    lat: coords[0],
    lon: coords[1]
  });

  dispatch(setAddressFromMap(suggestions.data.suggestions[0]));
};

const getActiveLegalPerson = (data, personData) => async (dispatch, getRootState) => {
  const { objectDetailed: { contentView } } = getRootState();

  let activeLegalPerson;

  if (personData.in_base_id) {
    activeLegalPerson = await objectsService.getCompanyByInnKpp({
      inn: personData.data.inn,
      kpp: personData.data.kpp
    });
  } else {
    activeLegalPerson = await objectsService.createCompany({
      inn: personData.data.inn,
      kpp: personData.data.kpp
    });
  }

  if (activeLegalPerson) {
    if (contentView === 'object') {
      dispatch(addLegalPerson({
        ...data,
        legalPerson: activeLegalPerson.id
      }));
    }
    if (contentView === 'opportunities') {
      dispatch(addOpportunitiesLegalPerson({
        ...data,
        legalPerson: activeLegalPerson.id
      }));
    }
  }
};

const makeCall = phoneNumber => async () => {
  await objectsService.getObjectsData({ type: 'makeCall', phone: phoneNumber });
};

const addOpportunity = opportunityData => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject } } = getRootState();

  const form = new FormData();
  form.append('opportunity', JSON.stringify(opportunityData));
  form.append('objectId', JSON.stringify(activeObject.id));

  const newOpportunity = await objectsService.postObjectsData(
    { type: 'changeOpportunity' },
    form,
    'multipart/form-data'
  );

  dispatch(setActiveObject({
    ...activeObject,
    opportunities: [
      ...activeObject.opportunities,
      newOpportunity.data
    ]
  }));
  dispatch(getActiveOpportunity(newOpportunity.data));
  dispatch(setContentView('opportunities'));
  dispatch(getNewEvents());
};

const changeOpportunity = opportunityData => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject } } = getRootState();

  const form = new FormData();
  form.append('objectId', JSON.stringify(0));
  if (opportunityData.opportunity) {
    form.append('opportunity', JSON.stringify(opportunityData.opportunity));
  }
  if (opportunityData.files) {
    form.append('files[0]', opportunityData.files);
  }
  if (opportunityData.deleteFiles) {
    form.append('deleteFiles', JSON.stringify([opportunityData.deleteFiles]));
  }

  const newOpportunity = await objectsService.postObjectsData(
    { type: 'changeOpportunity' },
    form,
    'multipart/form-data'
  );

  dispatch(setActiveObject({
    ...activeObject,
    opportunities: activeObject.opportunities.map(
      opportunity => (opportunity.id === newOpportunity.data.id ? newOpportunity.data : opportunity)
    )
  }));
  dispatch(getActiveOpportunity(newOpportunity.data));
};

const addRegistration = providerId => async (dispatch, getRootState) => {
  const {
    objectDetailed: { activeOpportunity, opportunitiesWithPersons },
    objectList: { user }
  } = getRootState();
  const newRegistration = await objectsService.addRegistration({
    provider: providerId,
    user: user.id
  }, activeOpportunity.id);

  dispatch(setActiveOpportunity({
    ...activeOpportunity,
    registrations: [
      ...activeOpportunity.registrations,
      {
        id: newRegistration.id,
        comment: '',
        legal: newRegistration.legal,
        state: 0
      }
    ]
  }));
  dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
    opportunity => {
      if (opportunity.id === activeOpportunity.id) {
        return {
          ...opportunity,
          registrations: [
            ...opportunity.registrations,
            {
              id: newRegistration.id,
              comment: '',
              legal: newRegistration.legal,
              state: 0
            }
          ]
        };
      }
      return opportunity;
    }
  )));
};

const removeRegistration = registrationId => async (dispatch, getRootState) => {
  const {
    objectDetailed: {
      activeOpportunity,
      opportunitiesWithPersons
    }
  } = getRootState();
  const deletedRegistration = await objectsService.removeRegistration(registrationId);

  if (deletedRegistration) {
    dispatch(setActiveOpportunity({
      ...activeOpportunity,
      registrations: activeOpportunity.registrations.filter(
        registration => registration.id !== registrationId
      )
    }));
    dispatch(setOpportunitiesWithPersons(opportunitiesWithPersons.map(
      opportunity => {
        if (opportunity.id === activeOpportunity.id) {
          return {
            ...opportunity,
            registrations: opportunity.registrations.filter(
              registration => registration.id !== registrationId
            )
          };
        }
        return opportunity;
      }
    )));
  }
};

const removeEstimate = (opportunityId, estimateId) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject, estimates } } = getRootState();
  const updatedOpportunity = await objectsService.getObjectsData({
    type: 'removeEstimate',
    opportunityId,
    estimateId
  });

  const newActiveObject = {
    ...activeObject,
    opportunities: activeObject.opportunities.map(
      opportunity => (opportunity.id === opportunityId ? updatedOpportunity.data : opportunity)
    )
  };

  const newEstimates = estimates.map(
    estimate => (
      estimate.id === opportunityId
        ? {
          ...estimate,
          estimates: estimate.estimates.filter(elem => elem.id !== estimateId)
        }
        : estimate
    )
  );

  dispatch(setActiveObject(newActiveObject));
  dispatch(getActiveOpportunity(updatedOpportunity.data));
  dispatch(setEstimates(newEstimates));
};

const addEstimate = (opportunityId, estimateId) => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject, estimates } } = getRootState();
  const updatedOpportunity = await objectsService.postObjectsData(
    { type: 'addEstimate' },
    { opportunityId, estimateId }
  );

  const fullEstimate = await objectsService.getObjectsData({
    type: 'fetchEstimate',
    id: estimateId
  });

  const newActiveObject = {
    ...activeObject,
    opportunities: activeObject.opportunities.map(
      opportunity => (opportunity.id === opportunityId ? updatedOpportunity.data : opportunity)
    )
  };

  const newEstimates = estimates.map(
    estimate => (estimate.id === opportunityId
      ? {
        ...estimate,
        estimates: [
          ...estimate.estimates,
          fullEstimate.data
        ]
      }
      : estimate)
  );

  dispatch(setActiveObject(newActiveObject));
  dispatch(getActiveOpportunity(updatedOpportunity.data));
  dispatch(setEstimates(newEstimates));
  dispatch(getNewEvents());
};

const getFindedEstimate = value => async dispatch => {
  const estimate = await objectsService.getObjectsData({ type: 'searchEstimate', term: value });

  dispatch(setFindedEstimate(estimate.data));
};

const addEventWithEmployees = eventData => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject } } = getRootState();
  const updatedObject = await objectsService.postObjectsData({
    type: 'addEvent',
    id: activeObject.id
  }, eventData);

  dispatch(setActiveObject(updatedObject.data));
  dispatch(getNewEvents());
};

const addTask = taskData => async (dispatch, getRootState) => {
  const { objectDetailed: { activeObject, taskList } } = getRootState();
  const addedTask = await objectsService.addTask({
    ...taskData,
    projects: [activeObject.id]
  });

  dispatch(setTaskList([
    ...taskList,
    {
      ...addedTask,
      end_time: '-000001-11-30T00:00:00.000000Z',
      ext_time: addedTask.ext_time === '1970-01-01T00:00:00.000000Z'
        ? '-000001-11-30T00:00:00.000000Z'
        : addedTask.ext_time
    }
  ]));
  dispatch(getNewEvents());
};

const updateTask = (taskId, taskData) => async (dispatch, getRootState) => {
  const { objectDetailed: { taskList } } = getRootState();
  const updatedTask = await objectsService.updateTask(taskId, taskData);

  dispatch(setTaskList(taskList.map(
    task => {
      if (task.id === taskId) {
        return {
          ...task,
          ...updatedTask,
          end_time: updatedTask.end_time === '0000-00-00 00:00:00'
            ? '-000001-11-30T00:00:00.000000Z'
            : updatedTask.end_time,
          ext_time: updatedTask.ext_time === '1970-01-01T00:00:00.000Z'
            ? '-000001-11-30T00:00:00.000000Z'
            : updatedTask.ext_time
        };
      }
      return task;
    }
  )));
};

const completeTask = taskId => async (dispatch, getRootState) => {
  const { objectDetailed: { taskList } } = getRootState();
  const completedTask = await objectsService.completeTask(taskId);

  dispatch(setTaskList(taskList.map(
    task => {
      if (task.id === taskId) {
        return completedTask;
      }
      return task;
    }
  )));
};

export {
  setSidePageHistoryContent,
  setModalHeaderNameEdit,
  setModalHeaderNotifications,
  setModalMainInfoDescriptionEdit,
  setModalMainInfoLinksEdit,
  setModalMainInfoImagesEdit,
  setModalMainInfoImagePreview,
  setModalMainInfoAddressEdit,
  setModalMainInfoMapEdit,
  setModalMainInfoMapEditAcception,
  setModalPersonsAddLegalPerson,
  setModalPersonsChangeLegalRole,
  setModalPersonsAddEmployee,
  setModalPersonsMakeMeeting,
  setModalPersonsMakeCall,
  setModalOpportunityCreation,
  setModalOpportunityDataEdit,
  setModalOpportunityDescriptionEdit,
  setModalOpportunityAddRegistration,
  setModalOpportunityRemoveRegistration,
  setModalOpportunityFilesEdit,
  setModalOpportunityAddEstimate,
  setModalHistoryAddComment,
  setModalHistoryMakeCall,
  setModalHistoryAddTask,
  setOpportunitiesDirections,
  setMaterialProviders,
  setActiveObject,
  setObjectLoading,
  setFavorite,
  setSubscribes,
  setContentView,
  setActiveLinks,
  setDadataAddresses,
  setFullAddress,
  setAddressFromMap,
  setLegalPersonPossibleRoles,
  setLegalPersonsWithEmployees,
  setLegalPersonsList,
  setActiveLegalPerson,
  setActiveOpportunity,
  setEstimates,
  setOpportunitiesWithPersons,
  setFindedEstimate,
  setEventsPages,
  setLoadingEventsPages,
  setTaskList,
  getOpportunitiesDirections,
  getMaterialProviders,
  getLegalPersonPossibleRoles,
  getLegalPersonsWithEmployees,
  getRegistrations,
  getOpportunitiesWithPersons,
  getTaskList,
  getEventsFirstPage,
  getEventsMorePages,
  getNewEvents,
  getPersons,
  getActiveOpportunity,
  getEstimates,
  getActiveObject,
  updateObjectData,
  getLegalPersonsList,
  addLegalPerson,
  addOpportunitiesLegalPerson,
  updateLegalPersonRoles,
  updateOpportunitiesLegalPersonRoles,
  removeLegalPerson,
  removeOpportunitiesLegalPerson,
  createNaturalPerson,
  activateNaturalPerson,
  activateOpportunitiesNaturalPerson,
  disableNaturalPerson,
  disableOpportunityNaturalPerson,
  updateComment,
  updateOpportunityComment,
  updateActiveLinks,
  updateFavorite,
  getDadataAddress,
  updateDadataAddresses,
  getAddressFromMap,
  getActiveLegalPerson,
  makeCall,
  addOpportunity,
  changeOpportunity,
  addRegistration,
  removeRegistration,
  removeEstimate,
  addEstimate,
  getFindedEstimate,
  addEventWithEmployees,
  addTask,
  updateTask,
  completeTask,
  getActiveLinks,
  getSubscribes,
  updateSubscribes
};
