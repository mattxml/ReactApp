import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserList } from "./UserList";
import {
  UnorderedComment,
  CommentContent,
  CommentAuthor,
  ShowComments
} from "../../styles/WallStyle";
export const CommentsLoading = props => {
  const [numberOfPosts, setnumberOfPosts] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [commentInfo, setCommentInfo] = useState();
  async function myAsyncEffect() {
    const result = await axios(
      `http://localhost:3001/commentsbypost/${props.id}`
    );
    setCommentInfo(result.data);
  }

  useEffect(() => {
    myAsyncEffect();
  }, []);

  const loadMore = () => {
    const subtraction = commentInfo.length - numberOfPosts;
    if (subtraction >= 2) {
      setnumberOfPosts(val => val + 2);
    } else if (subtraction == 1) {
      setnumberOfPosts(val => val + 2);
    }
    if (commentInfo.length <= numberOfPosts) {
      setHasMore(false);
    }
  };
  return (
    <div>
      {console.log(commentInfo)}
      {commentInfo !== undefined && (
        <div>
          {commentInfo
            .slice(0, numberOfPosts)
            .map(({ postid, commentautor, commentcontent }) => {
              return (
                <UnorderedComment>
                  <CommentAuthor>
                    <UserList by={commentautor} />
                  </CommentAuthor>
                  <CommentContent>{commentcontent}</CommentContent>
                </UnorderedComment>
              );
            })}
          {hasMore === true && commentInfo.length > numberOfPosts && (
            <ShowComments onClick={loadMore}>
              Wyświetl więcej komentarzy
            </ShowComments>
          )}
        </div>
      )}
    </div>
  );
};
