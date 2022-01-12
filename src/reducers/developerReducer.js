const developerReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DEVELOPERS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default developerReducer;
