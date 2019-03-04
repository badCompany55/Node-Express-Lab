import React from "react";
import { connect } from "react-redux";
import { deleteQuote } from "../actions/action.js";
import { Link } from "react-router-dom";

const Quote = props => {
  const deleteQ = e => {
    e.preventDefault();
    props.deleteQuote(e.target.id);
  };

  return (
    <div className="qCont">
      <Link to={`/update/${props.id}`}>Link</Link>
      <h2 className="title">{props.title} </h2>
      <p className="content">{props.content}</p>
      <input id="answer" type="text" />
      <button>Submit</button>
      <i id={props.id} className="fas fa-trash-alt" onClick={deleteQ} />
    </div>
  );
};

export default connect(
  null,
  { deleteQuote }
)(Quote);
