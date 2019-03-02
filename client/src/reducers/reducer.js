import {
  FETCHINGQUOTES,
  FETCHEDQUOTES,
  DELETEDQUOTE,
  DELETINGQUOTE
} from "../actions/action.js";

const initalState = {
  fetchingQuotes: false,
  fetchedQuotes: false,
  deletingQuote: false,
  deletedQuote: false,
  quotes: []
};

export const quotesReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHINGQUOTES: {
      return {
        ...state,
        fetchingQuotes: true,
        fetchedQuotes: false,
        deletingQuote: false,
        deletedQuote: false
      };
    }
    case FETCHEDQUOTES: {
      return {
        ...state,
        fetchingQuotes: false,
        fetchedQuotes: true,
        deletingQuote: false,
        deletedQuote: false,
        quotes: action.payload
      };
    }
    case DELETINGQUOTE: {
      return {
        ...state,
        fetchingQuotes: false,
        fetchedQuotes: false,
        deletingQuote: true,
        deletedQuote: false
      };
    }
    case DELETEDQUOTE: {
      return {
        ...state,
        fetchingQuotes: false,
        fetchedQuotes: false,
        deletingQuote: false,
        deletedQuote: true,
        quotes: action.payload
      };
    }
    default:
      return state;
  }
};
