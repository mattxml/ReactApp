import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Page from "./components/Page";
import Register from "./components/Register";
import { LoginInfoProvider } from "./context/LoginInfo";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <LoginInfoProvider>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/page" component={Page} />
          </LoginInfoProvider>
        </Router>
      </div>
    );
  }
}

export default App;
