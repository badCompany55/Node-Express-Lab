import axios from "axios";

export const FETCHINGQUOTES = "FETCHINGQUOTES";
export const FETCHEDQUOTES = "FETCHEDQUOTES";
export const ERROR = "ERROR";
export const DELETINGQUOTE = "DELETINGQUOTE";
export const DELETEDQUOTE = "DELETEDQUOTE";

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

export const deleteQuote = id => {
  return async dispatch => {
    dispatch({ type: DELETINGQUOTE });
    try {
      let res = await axios.delete(`http://www.localhost:4000/api/posts/${id}`);
      dispatch({ type: DELETEDQUOTE, payload: res.data.posts });
      console.log(res.data);
    } catch (err) {
      dispatch({ type: ERROR, payload: err });
    }
  };
};
