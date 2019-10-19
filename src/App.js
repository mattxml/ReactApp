import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Page from "./components/Page";
import Register from "./components/Register";
import { LoginInfoProvider } from "./context/LoginInfo";
import About from "./components/About";
import Header from "./components/MenuLogin";
import { Container } from "./styles/LoginStyle";
class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <LoginInfoProvider>
            <Header />
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/page" component={Page} />
            <Route path="/about" component={About} />
          </LoginInfoProvider>
        </Router>
      </Container>
    );
  }
}

export default App;
