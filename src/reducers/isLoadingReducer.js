const isLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return !state;
    default:
      return state;
  }
};

export default isLoadingReducer;
