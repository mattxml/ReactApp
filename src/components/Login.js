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
  FormButton,
  StyleLink,
  LoginFlex,
  TextField
} from "../styles/LoginStyle";
import "../styles/MenuLoginStyle.css";

const Login = () => {
  const [tempLogin, addTempLogin] = useState([]);
  const [isError, setError] = useState(false);
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
  const LoginUser = () => {
    if (tempLogin.login === "Login" && tempLogin.password == "Haslo") {
      user.login(tempLogin.login);
      setError(false);
    } else {
      setError(true);
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
          <Image src={BeVegan} alt="be vegan logo" />
          {isError == true && (
            <p className="errorMessage">Login lub hasło nieprawidłowe</p>
          )}
          <LoginForm>
            <InputWrapper>
              <label for="username">Login:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swoją nazwę użytkownika"
                type="text"
                id="username"
                onChange={newLogin}
                defaultValue=""
                value={tempLogin.login}
              />
              <datalist id="inputList">
                <option value="white" />
                <option value="milk" />
                <option value="dark" />
              </datalist>
            </InputWrapper>
            <InputWrapper>
              <label for="password">Hasło:</label>
              <TextField
                className={isError && "TextFieldError"}
                placeholder="Wpisz swoje hasło"
                type="password"
                id="password"
                onChange={newPassword}
                value={tempLogin.password}
              />
            </InputWrapper>
            <FormButton type="button" value="Zaloguj" onClick={LoginUser} />
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
