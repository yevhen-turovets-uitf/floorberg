export const findUsername = (users, userId) => (
  users.find(elem => elem.id === userId)?.fio || ''
);
export const findPartner = (partners, partnerId) => (
  partners.find(elem => elem.id === partnerId)?.main_company?.title || ''
);
export const findDirection = (directions, directionId) => (
  directions.find(elem => elem.id === directionId)?.name || ''
);
export const findEstimates = (estimates, opportunityId) => (
  estimates.find(elem => elem.id === opportunityId)?.estimates || []
);
