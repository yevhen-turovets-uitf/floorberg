import callWebApi from 'src/helpers/web-api-helper';
import { getCookie } from 'src/helpers/cookies-helper';
import { newDomain, newEndpoint } from 'src/urls';

// need to delete (|| 'raISFf+dgqtEZOsIAZM=XYvDZQnaMmzz') in prod
const token = getCookie('user_token') || 'raISFf+dgqtEZOsIAZM=XYvDZQnaMmzz';

export const getFloorbergAddressList = async query => {
  const response = await callWebApi({
    domain: newDomain,
    endpoint: `${newEndpoint}/common/locations`,
    authorization: `Bearer ${token}`,
    type: 'GET',
    query
  });
  return response;
};

export const getDadataAddressList = async request => {
  const response = await callWebApi({
    domain: 'https://suggestions.dadata.ru',
    endpoint: '/suggestions/api/4_1/rs/suggest/address',
    authorization: 'Token 21d1bb8037b3d829bc940fb7ada8d258f153404a',
    type: 'POST',
    request
  });
  return response;
};

export const getDadataAddress = async request => {
  const response = await callWebApi({
    domain: 'https://suggestions.dadata.ru',
    endpoint: '/suggestions/api/4_1/rs/findById/address',
    authorization: 'Token 21d1bb8037b3d829bc940fb7ada8d258f153404a',
    type: 'POST',
    request
  });
  return response;
};
