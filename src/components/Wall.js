import React, { useContext } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import { Redirect } from "react-router-dom";
import { CommentsLoading } from "./CommentsLoading";
import { PostList } from "./PostList";
import { WallContainer } from "../styles/WallStyle";
import "../styles/MenuLoginStyle.css";
const Wall = () => {
  const user = useContext(NewLoginInfo);
  return (
    <div className="SS">
      <WallContainer>
        {user.username === "" && <Redirect to="/" />}

        <div>we</div>
        <PostList />
        <div>we</div>
      </WallContainer>{" "}
    </div>
  );
};
export default Wall;
