const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return { ...state.posts, posts: action.payload };
    case "CREATE_POST":
      return { ...state.posts, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
