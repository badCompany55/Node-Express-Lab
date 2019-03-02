import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuotesList from "./comps/quotesList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/quotes" component={QuotesList} />
      </div>
    );
  }
}

export default App;
