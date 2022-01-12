const genreReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return [...action.payload];
    default:
      return state;
  }
};

export default genreReducer;
