import React, { useState, useEffect } from "react";
import { comments } from "../../temp/comments";
import { UserList } from "./UserList";
import {
  UnorderedComment,
  CommentContent,
  CommentAuthor,
  ShowComments
} from "../../styles/WallStyle";
export const CommentsLoading = props => {
  const [numberOfPosts, setnumberOfPosts] = useState(2);
  const commentByPosts = comments.filter(({ postid }) => postid === props.id);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (commentByPosts.length <= numberOfPosts) {
      setHasMore(false);
    }
  });

  const loadMore = () => {
    const subtraction = commentByPosts.length - numberOfPosts;
    if (subtraction >= 2) {
      setnumberOfPosts(val => val + 2);
    } else if (subtraction == 1) {
      setnumberOfPosts(val => val + 2);
    }
    if (commentByPosts.length <= numberOfPosts) {
      setHasMore(false);
    }
  };
  return (
    <div>
      {commentByPosts.slice(0, numberOfPosts).map(({ postid, by, content }) => {
        return (
          <UnorderedComment>
            <CommentAuthor>
              <UserList by={by} />
            </CommentAuthor>
            <CommentContent>{content}</CommentContent>
          </UnorderedComment>
        );
      })}
      {hasMore === true && (
        <ShowComments onClick={loadMore}>
          Wyświetl więcej komentarzy
        </ShowComments>
      )}
    </div>
  );
};
