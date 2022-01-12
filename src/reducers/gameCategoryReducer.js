const gameCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CATEGORY":
      return [...state, ...action.payload];

    case "CLEAR_CATEGORY":
      return [...action.payload];
    default:
      return state;
  }
};

export default gameCategoryReducer;
