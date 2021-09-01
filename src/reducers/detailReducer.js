const initState = {
  game: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      console.log(action.payload.game);
      return { ...state, game: action.payload.game };
    default:
      return { ...state };
  }
};

export default detailReducer;
