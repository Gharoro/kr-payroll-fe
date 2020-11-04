import axios from "axios";
import { fromJS, List } from "immutable";
import * as HttpStatus from "http-status-codes";

export function makeAsyncActionSet(actionName) {
  return {
    BEGIN: `${actionName}_BEGIN`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
  };
}

export function makeAsyncAction(actionSet, url, method, data = null) {
  const TOKEN = localStorage.getItem("token");

  return (dispatch) => {
    dispatch({ type: actionSet.BEGIN });

    return axios({
      baseURL: process.env.REACT_APP_LOCAL_URL,
      url: url,
      method: method,
      data: data,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= HttpStatus.BAD_REQUEST) {
          dispatch({
            type: actionSet.FAILURE,
            payload: List(),
          });
        } else {
          dispatch({
            type: actionSet.SUCCESS,
            payload: fromJS(response.data),
          });
          return response.data;
        }
      })
      .catch((error) => {
        dispatch({
          type: actionSet.FAILURE,
          payload: fromJS(error.response.data),
        });
        return error.response;
      });
  };
}
