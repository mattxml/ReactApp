import styled from "styled-components";
import { Link } from "react-router-dom";
export const Image = styled.img`
  width: 100px;
`;
export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 25px;
  outline: none;
  :hover,
  :focus {
    text-decoration: underline;
    transition: 1s;
  }
`;
export const TextField = styled.input`
  font-family: "Titillium Web", sans-serif;
  min-width: 300px;
  height: 10px;
  outline-color: black;
  background: transparent;
  font-size: 16px;
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
export const FormButton = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.2em;
  width: 100%;
  cursor: pointer;
  font-size: 15px;
  :hover,
  :focus {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
