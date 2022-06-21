const reducer = (state = 0, action) => {
  switch (action.type) {
    case "clientID":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
