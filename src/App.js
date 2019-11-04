import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Page from "./components/Page";
import Register from "./components/Register";
import Wall from "./components/WallComponents/Wall";
import Reciptes from "./components/Reciptes";
import Places from "./components/Places";
import Users from "./components/Users";
import { LoginInfoProvider } from "./context/LoginInfo";
import About from "./components/About";
import Header from "./components/MenuLogin";
import AddPost from "./components/WallComponents/AddPost";
import { Container } from "./styles/LoginStyle";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  body{
    font-family: 'Titillium Web', sans-serif
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <LoginInfoProvider>
          <Header />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/page" component={Page} />
          <Route path="/about" component={About} />
          <Route path="/wall" component={Wall} />
          <Route path="/reciptes" component={Reciptes} />
          <Route path="/places" component={Places} />
          <Route path="/users/:id" component={Users} />
          <Route path="/addpost" component={AddPost} />
        </LoginInfoProvider>
      </Router>
    </Container>
  );
};

export default App;
