import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { addQuote } from "../actions/action.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      created_at: "",
      updated_at: ""
    };
  }

  componentDidMount() {
    this.setCaUa();
  }

  eHandler = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  setCaUa = () => {
    if (this.props.location.pathname.includes("/new")) {
      this.setState({
        created_at: String(moment()._d),
        updated_at: String(moment()._d)
      });
    } else {
      const quotes = this.props.quotes;
      console.log(quotes);
      const theQuote = quotes.find(quote => {
        if (quote.id === Number(this.props.match.params.id)) {
          return quote;
        }
      });
      this.setState(theQuote);
    }
  };

  submit = e => {
    e.preventDefault();
    if (this.props.location.pathname.includes("/new")) {
      this.props.addQuote(this.state);
    }
  };

  render() {
    return (
      <div className="formCont">
        <form className="form" onSubmit={this.submit}>
          <div className="titleCont">
            <label className="title" htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.eHandler}
            />
          </div>
          <div className="contCont">
            <label className="contents" htmlFor="contents">
              Contents:
            </label>
            <input
              id="contents"
              type="text"
              value={this.state.contents}
              onChange={this.eHandler}
            />
          </div>
          <div className="createAtCont">
            <label className="created_at" htmlFor="createdAt">
              Created At:
            </label>
            <input
              id="created_at"
              type="text"
              value={this.state.created_at}
              onChange={this.eHandler}
            />
          </div>
          <div className="updateAtCon">
            <label className="updated_at" htmlFor="updatedAt">
              Updated At:
            </label>
            <input
              id="updated"
              type="text"
              value={this.state.updated_at}
              onChange={this.eHandler}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mstp = state => {
  console.log(state);
  return {
    quotes: state.quotes
  };
};

export default connect(
  mstp,
  { addQuote }
)(Form);
