import { featuresRef, authRef, provider } from "./config/firebase";
import { FETCH_FEATURES } from "./types";

export const fetchItems = () => async dispatch => {
  featuresRef.on("value", snapshot => {
    console.log(snapshot.node_.value_);

    dispatch({
      type: FETCH_FEATURES,
      payload: snapshot.node_.value_
    });
  });
};
