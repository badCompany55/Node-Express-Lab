import React from "react";

const Quote = props => {
  return (
    <div className="qCont">
      <h2 className="title">{props.title}</h2>
      <p className="content">{props.content}</p>
      <input id="answer" type="text" />
      <button>Submit</button>
    </div>
  );
};

export default Quote;
