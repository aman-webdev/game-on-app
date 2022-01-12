const gameDetailReducer = (state = { detail: {}, screenshot: [] }, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screenshot: action.payload.screenshot,
      };

    default:
      return { ...state };
  }
};

export default gameDetailReducer;
