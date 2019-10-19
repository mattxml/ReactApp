import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import BeVegan from "../images/BeVeganIcon.png";
import {
  LoginPage,
  FormArea,
  LoginForm,
  InputWrapper,
  LoginFlex
} from "../styles/LoginStyle";
import {
  StyleLink,
  Image,
  TextField,
  FormButton
} from "../styles/RegisterStyle";
import Header from "./MenuLogin";
const Register = () => {
  return (
    <LoginPage>
      <LoginFlex>
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
              />
            </InputWrapper>
            <InputWrapper>
              <label for="password">Hasło:</label>
              <TextField
                placeholder="Wpisz swoje hasło"
                type="password"
                id="password"
              />
            </InputWrapper>
            <InputWrapper>
              <label for="repassword">Powtórz hasło:</label>
              <TextField
                placeholder="Wpisz swoje hasło ponownie"
                type="password"
                id="repassword"
              />
            </InputWrapper>
            <InputWrapper>
              <label for="name">Imię:</label>
              <TextField placeholder="Wpisz swoje imię" type="text" id="name" />
            </InputWrapper>
            <InputWrapper>
              <label for="username">Adres e-mail:</label>
              <TextField
                placeholder="Wpisz swój adres e-mail"
                type="text"
                id="name"
              />
            </InputWrapper>

            <FormButton type="button" value="Zarejestruj się" />
          </LoginForm>
          <Route path="/register" component={Register} />
          <StyleLink to="/">Masz konto ? Zaloguj się !</StyleLink>
        </FormArea>
      </LoginFlex>
    </LoginPage>
  );
};
export default Register;
