import React, { useState } from "react";
import {
  PostForm,
  FormButton,
  InputWrapper,
  TextField
} from "../../styles/WallStyle";
const AddPost = () => {
  const [tempPost, setPost] = useState([]);
  const [isError, setError] = useState(false);
  const publicPost = () => {
    /*
    if (tempPost.subject.length > 2 && tempPost.content.length > 2) {
      posts.push(tempPost);
      console.log(tempPost);
      console.log(tempPost.subject.length);
      console.log(tempPost.content.length);
      setError(false);
    } else {
      setError(true);
    }
    setPost({
      id: 20,
      by: 2,
      subject: "",
      content: ""
    });
    */
  };
  const newSubject = event => {
    setPost({
      id: 20,
      by: 2,
      subject: event.target.value
    });
  };
  const newContent = event => {
    setPost({
      ...tempPost,
      content: event.target.value
    });
  };
  return (
    <PostForm>
      {isError && <p className="errorMessage">Post jest za krótki</p>}
      <InputWrapper>
        <label for="subject">Temat:</label>
        <TextField
          className={isError && "TextFieldError"}
          placeholder="Wpisz temat posta"
          type="text"
          id="subject"
          onChange={newSubject}
          defaultValue=""
          value={tempPost.subject}
        />
      </InputWrapper>
      <InputWrapper>
        <label for="content">Treść:</label>
        <TextField
          className={isError && "TextFieldError"}
          placeholder="Wpisz treść posta"
          type="text"
          id="content"
          onChange={newContent}
          value={tempPost.content}
        />
      </InputWrapper>
      <FormButton type="button" value="Opublikuj" onClick={publicPost} />
    </PostForm>
  );
};
export default AddPost;
