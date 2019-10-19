import styled from "styled-components";
import Background from "../images/loginbackground.jpg";
import { Link } from "react-router-dom";
const FormAreaCSS = styled.div`
  background: rgba(255, 255, 255);
  padding: 1em;
  width: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  margin-top: 1em;
`;
const LoginFormCSS = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InputWrapperCSS = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 20px;
`;
const TextFieldCSS = styled.input`
  font-family: "Titillium Web", sans-serif;
  min-width: 300px;
  height: 25px;
  outline-color: black;
  background: transparent;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  line-height: 1.2px;
  outline: none;
  padding: 0 0 0.2em 0;
  transition: padding 0.4s;
  ::placeholder {
    color: #464646;
  }
  :focus {
    padding: 0 0 0.4em 0;
  }
`;
const FormButtonCSS = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.2em;
  width: 100%;
  cursor: pointer;
  font-size: 25px;
  :hover,
  :focus {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
const ImageCSS = styled.img`
  width: 100px;
  margin-bottom: 2em;
`;

const StyleLinkCSS = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 100px;
  outline: none;
  :hover,
  :focus {
    text-decoration: underline;
    transition: 1s;
  }
`;
const LoginPageCSS = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${Background});
  height: 91vh;
  background-size: 100% 100%;
  margin-top: 1px;
`;
const LoginFlexCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerCSS = styled.div`
  height: 100%;
`;
export const Container = ContainerCSS;
export const LoginPage = LoginPageCSS;
export const StyleLink = StyleLinkCSS;
export const Image = ImageCSS;
export const FormButton = FormButtonCSS;
export const TextField = TextFieldCSS;
export const FormArea = FormAreaCSS;
export const LoginForm = LoginFormCSS;
export const InputWrapper = InputWrapperCSS;
export const LoginFlex = LoginFlexCSS;
