import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CommentsLoading } from "./CommentsLoading";
import { UserList } from "./UserList";
import axios from "axios";
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
  UserControl,
  Image,
  UnorderedImage,
  ListImage,
  Comments
} from "../../styles/WallStyle";
import down_regular from "../../icons/down.svg";
import down_solid from "../../icons/down_solid.svg";
import edit_regular from "../../icons/edit.svg";
import edit_solid from "../../icons/edit_solid.svg";
import plus_regular from "../../icons/plus.svg";
import plus_solid from "../../icons/plus_solid.svg";
import trash_regular from "../../icons/trash.svg";
import trash_solid from "../../icons/trash_solid.svg";
import up_solid from "../../icons/up_solid.svg";
import up_regular from "../../icons/up.svg";
export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [items, setItems] = useState([]);
  const [numberPosts, setNumberPosts] = useState(3);
  const [isError, setError] = useState(false);
  const [tempPost, setPost] = useState([]);
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
  const FetchMoreData = () => {
    setTimeout(() => {
      setItems(allPosts.slice(0, items.length + 2));
    }, 1000);

    if (items.length === allPosts.length) {
      setHasMore(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/posts");
      setAllPosts(result.data);
      setItems(result.data.slice(0, 3));
    };
    fetchData();
  }, []);

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
  return (
    <div className="containerPost">
      <InfiniteScroll
        dataLength={items.length}
        next={FetchMoreData}
        hasMore={hasMore}
        loader={<h4>Ładowanie...</h4>}
      >
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
          <FormButton type="button" value="Opublikuj" onClick={publicPost} />
        </LoginForm>
        {items.map(({ id, by, subject, content }) => (
          <UnorderedPost>
            <PostAuthor>
              <UserList by={by} />
            </PostAuthor>
            <PostSubject>{subject}</PostSubject>
            <PostContent>{content}</PostContent>
            <UnorderedImage>
              <ListImage>
                <Image
                  src={up_regular}
                  alt="oceń pozytywnie post"
                  name={up_solid}
                />
              </ListImage>
              <ListImage>
                <Image
                  src={down_regular}
                  alt="oceń negatywnie post"
                  name={down_solid}
                />
              </ListImage>
              <ListImage>
                <Image src={edit_regular} alt="edytuj post" name={edit_solid} />
              </ListImage>
              <ListImage>
                <Image src={trash_regular} alt="usun post" name={trash_solid} />
              </ListImage>
              <ListImage>
                <Image
                  src={plus_regular}
                  alt="dodaj komentarz"
                  name={plus_solid}
                />
              </ListImage>
              <ListImage>20</ListImage>
            </UnorderedImage>
            <UnorderedImage>
              <Comments>
                Komentarze : <hr />
              </Comments>
            </UnorderedImage>
            <UserControl>
              <CommentsLoading id={id} />
            </UserControl>
          </UnorderedPost>
        ))}
      </InfiniteScroll>
    </div>
  );
};
