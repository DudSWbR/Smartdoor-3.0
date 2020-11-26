export const Types = {
  // login
  GET_AUTHENTICATION: "authentication/GET_AUTHENTICATION",
  SUCCESS_AUTHENTICATION: "authentication/SUCCESS_AUTHENTICATION",
  FAILURE_AUTHENTICATION: "authentication/FAILURE_AUTHENTICATION",

  // logout
  PURGE_AUTHENTICATION: "authentication/PURGE_AUTHENTICATION",
};

export const Creators = {
  // login
  getAuthentication: (data) => ({
    type: Types.GET_AUTHENTICATION,
    payload: data,
  }),
  successAuthentication: (data) => ({
    type: Types.SUCCESS_AUTHENTICATION,
    payload: data,
  }),
  failureAuthentication: () => ({ type: Types.FAILURE_AUTHENTICATION }),
  purgeAuthentication: () => ({ type: Types.PURGE_AUTHENTICATION }),
};
