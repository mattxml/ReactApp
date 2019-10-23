import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { posts } from "../../temp/posts";
import { CommentsLoading } from "./CommentsLoading";
import { UserList } from "./UserList";
import { users } from "../../temp/users";
import "../../styles/MenuLoginStyle.css";
import {
  UnorderedPost,
  PostAuthor,
  PostSubject,
  PostContent,
  PostHeader,
  LoginForm,
  FormButton,
  InputWrapper,
  TextField,
  UserControl
} from "../../styles/WallStyle";
export const PostList = () => {
  const [items, setItems] = useState(posts.slice(0, 3));
  const [isError, setError] = useState(false);
  const [tempPost, setPost] = useState([]);
  let num = 3;
  const [hasMore, setHasMore] = useState(true);
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
  const fetchMoreData = () => {
    if (items.length + 2 < posts.length) {
      num = items.length + 2;
      setTimeout(() => {
        setItems(posts.slice(0, num));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  const publicPost = () => {
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
  };
  return (
    <div className="containerPost">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Ładowanie...</h4>}
      >
        {items.map(({ id, by, subject, content }) => (
          <UnorderedPost>
            <PostHeader>
              <PostAuthor>
                <UserList by={by} />
              </PostAuthor>
              <PostSubject>{subject}</PostSubject>
            </PostHeader>
            <PostContent>{content}</PostContent>
            <UserControl>
              <CommentsLoading id={id} />
              <LoginForm>
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
                <FormButton
                  type="button"
                  value="Opublikuj"
                  onClick={publicPost}
                />
              </LoginForm>
            </UserControl>
          </UnorderedPost>
        ))}
      </InfiniteScroll>
    </div>
  );
};
