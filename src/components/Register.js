import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../images/loginbackground.jpg";
import BeVegan from "../images/BeVeganIcon.png";
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
const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 10px;
`;
const TextField = styled.input`
  min-width: 300px;
  height: 20px;
  outline-color: black;
  margin-top: 5px;
  background: transparent;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 0.2em 0 0 0;
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
const RegisterInfo = styled.p`
  text-align: center;
  :hover {
    text-decoration: underline;
    transition: 1s;
  }
`;
const Image = styled.img`
  width: 100px;
`;
const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 10px;
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
const Register = () => {
  return (
    <LoginPage>
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
        <StyleLink to="/">
          <RegisterInfo>Masz konto ? Zaloguj się !</RegisterInfo>
        </StyleLink>
      </FormArea>
    </LoginPage>
  );
};
export default Register;
