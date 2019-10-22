import React, { useContext } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import { Redirect } from "react-router-dom";
import { CommentsLoading } from "./CommentsLoading";
import { PostList } from "./PostList";
import { WallContainer } from "../styles/WallStyle";
const Wall = () => {
  const user = useContext(NewLoginInfo);
  return (
    <div>
      {user.username === "" && <Redirect to="/" />}
      <WallContainer>
        <div>we</div>
        <PostList />
        <div></div>
      </WallContainer>
    </div>
  );
};
export default Wall;
