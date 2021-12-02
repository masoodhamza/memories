import React from "react";
import * as api from "../api/index";

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
