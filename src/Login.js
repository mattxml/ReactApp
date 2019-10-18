import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import Register from "./Register.js";
import styled from "styled-components";
import BeVegan from "./BeVeganIcon.png";
import Page from "./Page";
import Background from "./photo/loginbackground2.jpg";
import { LoginInfoConsumer, NewLoginInfo } from "./LoginInfo";
const FormArea = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 2em;
  width: 500px;
  height: 80%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 20px;
`;
const TextField = styled.input`
  min-width: 300px;
  height: 25px;
  outline-color: black;
  margin-top: 10px;
  background: transparent;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  line-height: 1.2px;
  outline: none;
  padding: 1em 0 0 0;
  ::placeholder {
    color: #464646;
  }
`;
const FormButton = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.2em;
  width: 100%;
  cursor: pointer;
  font-size: 25px;
  :hover {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 1s;
  }
`;
const Image = styled.img`
  width: 100px;
  margin-bottom: 2em;
`;
const RegisterInfo = styled.p`
  text-align: center;
  :hover {
    text-decoration: underline;
    transition: 1s;
  }
`;
const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 100px;
`;
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

const Login = () => {
  const [tempLogin, addTempLogin] = useState([]);

  const newLogin = event => {
    addTempLogin({
      login: event.target.value
    });
  };
  const newPassword = event => {
    addTempLogin({
      ...tempLogin,
      password: event.target.value
    });
  };

  const login = () => {
    if (tempLogin.login === "Login" && tempLogin.password == "Haslo") {
      user.login(tempLogin.login);
    }
    addTempLogin({
      login: "",
      password: ""
    });
  };
  const user = useContext(NewLoginInfo);

  return (
    <div>
      <LoginPage>
        {user.infolog != "" && <Redirect to="/page" />}
        <FormArea>
          <Image src={BeVegan} />
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700"
            rel="stylesheet"
          ></link>
          <LoginForm>
            <InputWrapper>
              <label for="username">Login:</label>
              <TextField
                placeholder="Wpisz swoją nazwę użytkownika"
                type="text"
                id="name"
                onChange={newLogin}
                defaultValue=""
                value={tempLogin.login}
              />
            </InputWrapper>
            <InputWrapper>
              <label for="password">Hasło:</label>
              <TextField
                placeholder="Wpisz swoje hasło"
                type="password"
                id="password"
                onChange={newPassword}
                value={tempLogin.password}
              />
            </InputWrapper>
            <FormButton type="button" value="Zaloguj" onClick={login} />
          </LoginForm>
          <Route path="/register" component={Register} />
          <StyleLink to="/register">
            <RegisterInfo>Nie masz konta ? Zarejestruj się !</RegisterInfo>
          </StyleLink>
        </FormArea>
      </LoginPage>
    </div>
  );
};
export default Login;
