import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CommentsLoading } from "./CommentsLoading";
import { UserList } from "./UserList";
import axios from "axios";
import "../../styles/MenuLoginStyle.css";
import {
  UnorderedPost,
  PostAuthor,
  PostSubject,
  PostContent,
  UserControl,
  Image,
  UnorderedImage,
  PostLink,
  ListImage,
  Comments,
  WallHeader,
  SortPost,
  SortOption
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
  const [apiLink, setApiLink] = useState("http://localhost:3001/posts");
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const FetchMoreData = () => {
    setTimeout(() => {
      setItems(allPosts.slice(0, items.length + 2));
    }, 1000);

    if (items.length === allPosts.length) {
      setHasMore(false);
    }
  };
  const sortPosts = event => {
    if (event.target.value === "new") {
      setApiLink("http://localhost:3001/bestposts");
    } else {
      setApiLink("http://localhost:3001/posts");
    }
  };
  useEffect(() => {
    console.log("W");
    const fetchData = async () => {
      const result = await axios(apiLink);
      setAllPosts(result.data);
      setItems(result.data.slice(0, 3));
    };
    fetchData();
  }, [apiLink]);

  return (
    <div className="containerPost">
      <InfiniteScroll
        dataLength={items.length}
        next={FetchMoreData}
        hasMore={hasMore}
        loader={<h4>Ładowanie...</h4>}
      >
        <WallHeader>
          <SortPost onChange={sortPosts}>
            <SortOption value="best">Najlepsze</SortOption>
            <SortOption value="new">Najnowsze</SortOption>
          </SortPost>
          <PostLink to="/addpost">Dodaj post</PostLink>
        </WallHeader>

        {items.map(({ idposts, autor, tytul, content, wynik }) => (
          <UnorderedPost>
            <PostAuthor>
              <UserList by={autor} />
            </PostAuthor>
            <PostSubject>{tytul}</PostSubject>
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
              <ListImage>{wynik}</ListImage>
            </UnorderedImage>
            <UnorderedImage>
              <Comments>
                Komentarze : <hr />
              </Comments>
            </UnorderedImage>
            <UserControl>
              <CommentsLoading id={idposts} />
            </UserControl>
          </UnorderedPost>
        ))}
      </InfiniteScroll>
    </div>
  );
};
