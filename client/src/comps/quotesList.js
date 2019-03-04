import React from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions/action.js";
import Quote from "./quote.js";

class QuotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return (
      <div className="qlistCont">
        {this.props.quotes.map(quote => {
          return (
            <Quote
              key={quote.id}
              title={quote.title}
              content={quote.contents}
              id={quote.id}
            />
          );
        })}
      </div>
    );
  }
}

const mstp = state => {
  return {
    quotes: state.quotes
  };
};

export default connect(
  mstp,
  { fetchQuotes }
)(QuotesList);
