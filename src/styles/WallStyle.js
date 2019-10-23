import styled from "styled-components";
export const WallContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

export const UsersRankingStyled = styled.ul`
  font-size: 1.2em;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
export const UsersItem = styled.li`
  margin-left: 1em;
  padding: 0;
  color: green;
  font-weight: bold;
`;
export const OrderedUsersList = styled.ol`
  padding: 0;
  margin: 0;
`;
export const UnorderedPost = styled.ul`
  margin: 0.2em;
  padding: 1em;
  list-style: none;
  font-size: 16px;
  background-color: #fffcfc;
  margin-bottom: 0.2em;
  text-align: justify;
`;
export const PostAuthor = styled.li`
  color: red;
`;
export const PostSubject = styled.li`
  color: red;
  text-decoration: underline;
`;
export const PostContent = styled.li`
  color: red;
`;

export const UnorderedComment = styled.li`
  color: green;
  padding: 2em;
  width: 80%;
  list-style: none;
`;
export const CommentAuthor = styled.p`
  color: green;
  margin: 0;
  padding: 0;
`;
export const CommentContent = styled.p`
  color: green;
  padding: 0;
  margin: 0;
`;
export const ShowComments = styled.button`
  padding: 2%;
  font-size: 10px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  font-family: "Titillium Web", sans-serif;
`;
export const TextUser = styled.p`
  padding: 0;
  margin: 0;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Titillium Web", sans-serif;
  margin-bottom: 20px;
`;
export const TextField = styled.input`
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
export const FormButton = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1em;
  cursor: pointer;
  font-size: 10px;
  :hover,
  :focus {
    color: white;
    background: black;
    border: 1px solid white;
    transition: 0.2s;
  }
  outline: none;
`;
export const UserControl = styled.div`
  padding: 4em;
`;
