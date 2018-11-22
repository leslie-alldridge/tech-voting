import { featuresRef } from "./config/firebase";
import { FETCH_FEATURES } from "./types";

export const addToDo = (newIdea, uid) => async dispatch => {
  console.log(newIdea, uid);
  featuresRef.push().set(newIdea);
};

export function fetchItemsAction() {
  return function(dispatch) {
    dispatch(getReq());
    featuresRef.on("value", snapshot => {
      dispatch(getGet(snapshot.val()));
    });
  };
}

export function getReq() {
  return {
    type: FETCH_FEATURES,
    payload: []
  };
}

export function getGet(data) {
  let arr = [];
  for (const key of Object.keys(data)) {
    arr.push(data[key]);
  }
  return {
    type: FETCH_FEATURES,
    payload: arr
  };
}
