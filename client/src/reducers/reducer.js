import { FETCHINGQUOTES, FETCHEDQUOTES } from "../actions/action.js";

const initalState = {
  fetchingQuotes: false,
  fetchedQuotes: false,
  quotes: []
};

export const quotesReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHINGQUOTES: {
      return {
        ...state,
        fetchingQuotes: true,
        fetchedQuotes: false
      };
    }
    case FETCHEDQUOTES: {
      return {
        ...state,
        fetchingQuotes: false,
        fetchedQuotes: true,
        quotes: action.payload
      };
    }
    default:
      return state;
  }
};
