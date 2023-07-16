import callWebApi from 'src/helpers/web-api-helper';
import { getCookie } from 'src/helpers/cookies-helper';
import { apiDomain, apiEndpoint, newDomain, newEndpoint } from 'src/urls';

// need to delete (|| 'raISFf+dgqtEZOsIAZM=XYvDZQnaMmzz') in prod
const token = getCookie('user_token') || 'bXCtOlDytVjaoHybVAatnBpUHheUfcfA';

export const getUserData = async userId => {
  const response = await callWebApi({
    domain: apiDomain,
    endpoint: `${apiEndpoint}/users/${userId}`,
    type: 'GET'
  });
  return response;
};

export const getObjectsData = async options => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects`,
    authorization: `Bearer ${token}`,
    query: options,
    type: 'GET'
  });
  return response;
};

export const postObjectsData = async (options, request, contentType) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects`,
    authorization: `Bearer ${token}`,
    query: options,
    type: 'POST',
    request,
    contentType: contentType || undefined
  });
  return response;
};

export const getSubscribes = async objectId => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}/subscribes`,
    authorization: `Bearer ${token}`,
    type: 'GET'
  });
  return response;
};

export const postSubscribes = async (objectId, request) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}/subscribes`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const deleteObject = async objectId => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}`,
    authorization: `Bearer ${token}`,
    type: 'DELETE'
  });
  return response;
};

export const getPartnersData = async () => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/partners`,
    authorization: `Bearer ${token}`,
    type: 'GET'
  });
  return response;
};

export const getObjectLinks = async objectId => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}/links`,
    authorization: `Bearer ${token}`,
    type: 'GET'
  });
  return response;
};

export const addObjectLink = async (objectId, request) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}/links`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const updateObjectLink = async (linkId, request) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/links/${linkId}`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const deleteObjectLink = async linkId => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/links/${linkId}`,
    authorization: `Bearer ${token}`,
    type: 'DELETE'
  });
  return response;
};

export const addNaturalPerson = async (legalPersonId, request) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/companies/${legalPersonId}/emploee`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const getCompanyList = async options => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/companies/find`,
    authorization: `Bearer ${token}`,
    type: 'GET',
    query: options
  });
  return response;
};

export const getCompanyByInnKpp = async options => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/companies`,
    authorization: `Bearer ${token}`,
    type: 'GET',
    query: options
  });
  return response;
};

export const createCompany = async request => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/companies/create`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const getMaterialProviders = async () => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/material-providers`,
    authorization: `Bearer ${token}`,
    type: 'GET'
  });
  return response;
};

export const getRegistrations = async options => {
  const response = await callWebApi({
    domain: apiDomain,
    endpoint: `${apiEndpoint}/_tech/opportunity-reservation`,
    query: options,
    type: 'GET'
  });
  return response;
};

export const addRegistration = async (options, opportunityId) => {
  const response = await callWebApi({
    domain: apiDomain,
    endpoint: `${apiEndpoint}/opportunities/${opportunityId}/sale-guard`,
    type: 'GET',
    query: options
  });
  return response;
};

export const removeRegistration = async registrationId => {
  const response = await callWebApi({
    domain: apiDomain,
    endpoint: `${apiEndpoint}/sale-gurards/${registrationId}`,
    type: 'DELETE'
  });
  return response;
};

export const getEventsPages = async (options, objectId) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}/events`,
    authorization: `Bearer ${token}`,
    type: 'GET',
    query: options
  });
  return response;
};

export const getTaskList = async objectId => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/projects/${objectId}/tasks`,
    authorization: `Bearer ${token}`,
    type: 'GET'
  });
  return response;
};

export const addTask = async request => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/tasks`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const updateTask = async (taskId, request) => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/tasks/${taskId}`,
    authorization: `Bearer ${token}`,
    type: 'POST',
    request
  });
  return response;
};

export const completeTask = async taskId => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/tasks/${taskId}/finish`,
    authorization: `Bearer ${token}`,
    type: 'POST'
  });
  return response;
};
