import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Login from "./Login";
import Page from "./Page";
import Register from "./Register";
import Background from "./photo/loginbackground2.jpg";
const LoginPage = styled.div`
  font-size: 28px;
  background: url(${Background}) no-repeat center center fixed;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/page" component={Page} />
        </Router>
      </div>
    );
  }
}

export default App;
