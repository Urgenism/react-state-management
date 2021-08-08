import axios from "axios";

import {
  GET_POST_START,
  GET_POST_FAILED,
  GET_POST_SUCCESS,
} from "./postsTypes";

const getPostsSuccess = (data) => {
  return {
    type: GET_POST_SUCCESS,
    payload: {
      data,
    },
  };
};

const getPostsFailed = (error) => {
  return {
    type: GET_POST_FAILED,
    payload: {
      error,
    },
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_START });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      dispatch(getPostsFailed(error));
    }
  };
};
