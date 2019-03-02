import axios from "axios";

export const FETCHINGQUOTES = "FETCHINGQUOTES";
export const FETCHEDQUOTES = "FETCHEDQUOTES";
export const ERROR = "ERROR";

export const fetchQuotes = () => {
  return async dispatch => {
    dispatch({ type: FETCHINGQUOTES });
    try {
      let res = await axios.get("http://www.localhost:4000/api/posts");
      dispatch({ type: FETCHEDQUOTES, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err });
    }
  };
};
