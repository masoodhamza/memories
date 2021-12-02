import React from "react";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
