import React, { useState, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Register from "./Register";
import { NewLoginInfo } from "../context/LoginInfo";
import BeVegan from "../images/BeVeganIcon.png";
import {
  LoginPage,
  FormArea,
  Image,
  LoginForm,
  InputWrapper,
  TextField,
  FormButton,
  StyleLink,
  LoginFlex
} from "../styles/LoginStyle";
import Header from "./MenuLogin";
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
    <LoginPage>
      <LoginFlex>
        {user.username != "" && <Redirect to="/page" />}
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
            Nie masz konta ? Zarejestruj się !
          </StyleLink>
        </FormArea>
      </LoginFlex>
    </LoginPage>
  );
};
export default Login;
