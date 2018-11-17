import { featuresRef, authRef, provider } from "./config/firebase";
import { FETCH_FEATURES } from "./types";

export const fetchItems = () => async dispatch => {
  featuresRef
    .child("b9f31170-ea2e-11e8-bd6f-7716cf846287")
    .on("value", snapshot => {
      console.log(snapshot);

      dispatch({
        type: FETCH_FEATURES,
        payload: "hi"
      });
    });
};

export const addToDo = (newIdea, uid) => async dispatch => {
  console.log(newIdea, uid);
  featuresRef.push().set(newIdea);
};
