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

export function downVoteAction(id) {
  return function(dispatch) {
    dispatch(getReq());
    featuresRef.on("value", snapshot => {
      dispatch(getDown(snapshot.val(), id));
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

export function getDown(data, id) {
  let arr = [];
  for (const key of Object.keys(data)) {
    if (data[key].id == id) {
      if (data[key].votes > 0) {
        data[key].votes -= 1;
        arr.push(data[key]);
        console.log("removed vote");
      }
    } else {
      arr.push(data[key]);
    }
  }
  console.log(arr);
  return {
    type: FETCH_FEATURES,
    payload: arr
  };
}
