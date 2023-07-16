import { createReducer } from '@reduxjs/toolkit';
import {
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
  setTaskList
} from './actions';

const initialState = {
  sidePageHistoryContent: undefined,
  modalHeaderNameEdit: undefined,
  modalHeaderNotifications: undefined,
  modalMainInfoDescriptionEdit: undefined,
  modalMainInfoLinksEdit: undefined,
  modalMainInfoImagesEdit: undefined,
  modalMainInfoImagePreview: undefined,
  modalMainInfoAddressEdit: undefined,
  modalMainInfoMapEdit: undefined,
  modalMainInfoMapEditAcception: undefined,
  modalPersonsAddLegalPerson: undefined,
  modalPersonsChangeLegalRole: undefined,
  modalPersonsAddEmployee: undefined,
  modalPersonsMakeMeeting: undefined,
  modalPersonsMakeCall: undefined,
  modalOpportunityCreation: undefined,
  modalOpportunityDataEdit: undefined,
  modalOpportunityDescriptionEdit: undefined,
  modalOpportunityAddRegistration: undefined,
  modalOpportunityRemoveRegistration: undefined,
  modalOpportunityFilesEdit: undefined,
  modalOpportunityAddEstimate: undefined,
  modalHistoryAddComment: undefined,
  modalHistoryMakeCall: undefined,
  modalHistoryAddTask: undefined,
  modalHistoryTaskEdit: undefined,
  opportunitiesDirections: undefined,
  materialProviders: undefined,
  activeObject: undefined,
  objectLoading: true,
  isFavorite: 0,
  subscribes: undefined,
  contentView: 'object',
  activeLinks: undefined,
  dadataAddresses: undefined,
  fullAddress: '',
  addressFromMap: undefined,
  legalPersonPossibleRoles: undefined,
  legalPersonsWithEmployees: undefined,
  legalPersonsList: undefined,
  activeLegalPerson: undefined,
  activeOpportunity: undefined,
  estimates: undefined,
  opportunitiesWithPersons: undefined,
  findedEstimate: undefined,
  eventsPages: undefined,
  loadingEventsPages: undefined,
  taskList: undefined
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(setSidePageHistoryContent, (state, action) => {
    const { sidePageHistoryContent } = action.payload;

    state.sidePageHistoryContent = sidePageHistoryContent;
  });
  builder.addCase(setModalHeaderNameEdit, (state, action) => {
    const { modalHeaderNameEdit } = action.payload;

    state.modalHeaderNameEdit = modalHeaderNameEdit;
  });
  builder.addCase(setModalHeaderNotifications, (state, action) => {
    const { modalHeaderNotifications } = action.payload;

    state.modalHeaderNotifications = modalHeaderNotifications;
  });
  builder.addCase(setModalMainInfoDescriptionEdit, (state, action) => {
    const { modalMainInfoDescriptionEdit } = action.payload;

    state.modalMainInfoDescriptionEdit = modalMainInfoDescriptionEdit;
  });
  builder.addCase(setModalMainInfoLinksEdit, (state, action) => {
    const { modalMainInfoLinksEdit } = action.payload;

    state.modalMainInfoLinksEdit = modalMainInfoLinksEdit;
  });
  builder.addCase(setModalMainInfoImagesEdit, (state, action) => {
    const { modalMainInfoImagesEdit } = action.payload;

    state.modalMainInfoImagesEdit = modalMainInfoImagesEdit;
  });
  builder.addCase(setModalMainInfoImagePreview, (state, action) => {
    const { modalMainInfoImagePreview } = action.payload;

    state.modalMainInfoImagePreview = modalMainInfoImagePreview;
  });
  builder.addCase(setModalMainInfoAddressEdit, (state, action) => {
    const { modalMainInfoAddressEdit } = action.payload;

    state.modalMainInfoAddressEdit = modalMainInfoAddressEdit;
  });
  builder.addCase(setModalMainInfoMapEdit, (state, action) => {
    const { modalMainInfoMapEdit } = action.payload;

    state.modalMainInfoMapEdit = modalMainInfoMapEdit;
  });
  builder.addCase(setModalMainInfoMapEditAcception, (state, action) => {
    const { modalMainInfoMapEditAcception } = action.payload;

    state.modalMainInfoMapEditAcception = modalMainInfoMapEditAcception;
  });
  builder.addCase(setModalPersonsAddLegalPerson, (state, action) => {
    const { modalPersonsAddLegalPerson } = action.payload;

    state.modalPersonsAddLegalPerson = modalPersonsAddLegalPerson;
  });
  builder.addCase(setModalPersonsChangeLegalRole, (state, action) => {
    const { modalPersonsChangeLegalRole } = action.payload;

    state.modalPersonsChangeLegalRole = modalPersonsChangeLegalRole;
  });
  builder.addCase(setModalPersonsAddEmployee, (state, action) => {
    const { modalPersonsAddEmployee } = action.payload;

    state.modalPersonsAddEmployee = modalPersonsAddEmployee;
  });
  builder.addCase(setModalPersonsMakeMeeting, (state, action) => {
    const { modalPersonsMakeMeeting } = action.payload;

    state.modalPersonsMakeMeeting = modalPersonsMakeMeeting;
  });
  builder.addCase(setModalPersonsMakeCall, (state, action) => {
    const { modalPersonsMakeCall } = action.payload;

    state.modalPersonsMakeCall = modalPersonsMakeCall;
  });
  builder.addCase(setModalOpportunityCreation, (state, action) => {
    const { modalOpportunityCreation } = action.payload;

    state.modalOpportunityCreation = modalOpportunityCreation;
  });
  builder.addCase(setModalOpportunityDataEdit, (state, action) => {
    const { modalOpportunityDataEdit } = action.payload;

    state.modalOpportunityDataEdit = modalOpportunityDataEdit;
  });
  builder.addCase(setModalOpportunityDescriptionEdit, (state, action) => {
    const { modalOpportunityDescriptionEdit } = action.payload;

    state.modalOpportunityDescriptionEdit = modalOpportunityDescriptionEdit;
  });
  builder.addCase(setModalOpportunityAddRegistration, (state, action) => {
    const { modalOpportunityAddRegistration } = action.payload;

    state.modalOpportunityAddRegistration = modalOpportunityAddRegistration;
  });
  builder.addCase(setModalOpportunityRemoveRegistration, (state, action) => {
    const { modalOpportunityRemoveRegistration } = action.payload;

    state.modalOpportunityRemoveRegistration = modalOpportunityRemoveRegistration;
  });
  builder.addCase(setModalOpportunityFilesEdit, (state, action) => {
    const { modalOpportunityFilesEdit } = action.payload;

    state.modalOpportunityFilesEdit = modalOpportunityFilesEdit;
  });
  builder.addCase(setModalOpportunityAddEstimate, (state, action) => {
    const { modalOpportunityAddEstimate } = action.payload;

    state.modalOpportunityAddEstimate = modalOpportunityAddEstimate;
  });
  builder.addCase(setModalHistoryAddComment, (state, action) => {
    const { modalHistoryAddComment } = action.payload;

    state.modalHistoryAddComment = modalHistoryAddComment;
  });
  builder.addCase(setModalHistoryMakeCall, (state, action) => {
    const { modalHistoryMakeCall } = action.payload;

    state.modalHistoryMakeCall = modalHistoryMakeCall;
  });
  builder.addCase(setModalHistoryAddTask, (state, action) => {
    const { modalHistoryAddTask } = action.payload;

    state.modalHistoryAddTask = modalHistoryAddTask;
  });
  builder.addCase(setOpportunitiesDirections, (state, action) => {
    const { opportunitiesDirections } = action.payload;

    state.opportunitiesDirections = opportunitiesDirections;
  });
  builder.addCase(setMaterialProviders, (state, action) => {
    const { materialProviders } = action.payload;

    state.materialProviders = materialProviders;
  });
  builder.addCase(setActiveObject, (state, action) => {
    const { activeObject } = action.payload;

    state.activeObject = activeObject;
  });
  builder.addCase(setObjectLoading, (state, action) => {
    const { objectLoading } = action.payload;

    state.objectLoading = objectLoading;
  });
  builder.addCase(setFavorite, (state, action) => {
    const { isFavorite } = action.payload;

    state.isFavorite = isFavorite;
  });
  builder.addCase(setSubscribes, (state, action) => {
    const { subscribes } = action.payload;

    state.subscribes = subscribes;
  });
  builder.addCase(setContentView, (state, action) => {
    const { contentView } = action.payload;

    state.contentView = contentView;
  });
  builder.addCase(setActiveLinks, (state, action) => {
    const { activeLinks } = action.payload;

    state.activeLinks = activeLinks;
  });
  builder.addCase(setDadataAddresses, (state, action) => {
    const { dadataAddresses } = action.payload;

    state.dadataAddresses = dadataAddresses;
  });
  builder.addCase(setFullAddress, (state, action) => {
    const { fullAddress } = action.payload;

    state.fullAddress = fullAddress;
  });
  builder.addCase(setAddressFromMap, (state, action) => {
    const { addressFromMap } = action.payload;

    state.addressFromMap = addressFromMap;
  });
  builder.addCase(setLegalPersonPossibleRoles, (state, action) => {
    const { legalPersonPossibleRoles } = action.payload;

    state.legalPersonPossibleRoles = legalPersonPossibleRoles;
  });
  builder.addCase(setLegalPersonsWithEmployees, (state, action) => {
    const { legalPersonsWithEmployees } = action.payload;

    state.legalPersonsWithEmployees = legalPersonsWithEmployees;
  });
  builder.addCase(setLegalPersonsList, (state, action) => {
    const { legalPersonsList } = action.payload;

    state.legalPersonsList = legalPersonsList;
  });
  builder.addCase(setActiveLegalPerson, (state, action) => {
    const { activeLegalPerson } = action.payload;

    state.activeLegalPerson = activeLegalPerson;
  });
  builder.addCase(setActiveOpportunity, (state, action) => {
    const { activeOpportunity } = action.payload;

    state.activeOpportunity = activeOpportunity;
  });
  builder.addCase(setEstimates, (state, action) => {
    const { estimates } = action.payload;

    state.estimates = estimates;
  });
  builder.addCase(setOpportunitiesWithPersons, (state, action) => {
    const { opportunitiesWithPersons } = action.payload;

    state.opportunitiesWithPersons = opportunitiesWithPersons;
  });
  builder.addCase(setFindedEstimate, (state, action) => {
    const { findedEstimate } = action.payload;

    state.findedEstimate = findedEstimate;
  });
  builder.addCase(setEventsPages, (state, action) => {
    const { eventsPages } = action.payload;

    state.eventsPages = eventsPages;
  });
  builder.addCase(setLoadingEventsPages, (state, action) => {
    const { loadingEventsPages } = action.payload;

    state.loadingEventsPages = loadingEventsPages;
  });
  builder.addCase(setTaskList, (state, action) => {
    const { taskList } = action.payload;

    state.taskList = taskList;
  });
});

export { reducer };
