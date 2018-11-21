import { featuresRef, authRef, provider } from "./config/firebase";
import { FETCH_FEATURES } from "./types";

// export const fetchItems = () => async dispatch => {
//   featuresRef.on("value", snapshot => {
//     console.log(snapshot.val());

//     dispatch({
//       type: FETCH_FEATURES,
//       payload: snapshot.val()
//     });
//   });
// };

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
    payload: "loading"
  };
}

export function getGet(data) {
  return {
    type: FETCH_FEATURES,
    payload: data
  };
}
