import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { posts } from "../temp/posts";
import { CommentsLoading } from "./CommentsLoading";
import { UserList } from "./UserList";
import { users } from "../temp/users";
export const PostList = () => {
  const [items, setItems] = useState(posts.slice(0, 3));
  let num = 3;
  const [hasMore, setHasMore] = useState(true);
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

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Ładowanie...</h4>}
      >
        {items.map(({ id, by, subject, content }) => (
          <ul>
            <li>
              <UserList by={by} />
            </li>
            <li>{subject}</li>
            <li>{content}</li>
            <CommentsLoading id={id} />
          </ul>
        ))}
      </InfiniteScroll>
    </div>
  );
};
