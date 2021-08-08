import {
  GET_POST_START,
  GET_POST_FAILED,
  GET_POST_SUCCESS,
} from "./postsTypes";

const INITIAL_STATE = {
  data: null,
  error: null,
  status: "idle",
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST_START:
      return {
        ...state,
        status: "pending",
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: "success",
      };

    case GET_POST_FAILED:
      return {
        ...state,
        error: action.payload.error.message,
        status: "failed",
      };

    default:
      return state;
  }
};

export default postsReducer;
