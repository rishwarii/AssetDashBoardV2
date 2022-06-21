export const fetchClientId = (clientID) => {
  return (dispatch) =>
    dispatch({
      type: "clientIdFetch",
      payload: clientID,
    });
};
