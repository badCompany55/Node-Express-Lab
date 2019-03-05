import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuotesList from "./comps/quotesList.js";
import Form from "./comps/form.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/quotes" component={QuotesList} />
        <Route path="/new" render={props => <Form {...props} />} />
        <Route path="/update/:id" render={props => <Form {...props} />} />
      </div>
    );
  }
}

export default App;
