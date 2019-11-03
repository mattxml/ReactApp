import React, { useContext, useEffect, useState } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import { Redirect } from "react-router-dom";
import { UsersRanking } from "./UsersRanking.js";
import { PostList } from "./PostList";
import axios from "axios";
import { WallContainer } from "../../styles/WallStyle";
import "../../styles/MenuLoginStyle.css";
const Wall = () => {
  const user = useContext(NewLoginInfo);

  return (
    <WallContainer>
      {user.username === "" && <Redirect to="/" />}
      <div>we</div>
      <PostList />
      <UsersRanking />
    </WallContainer>
  );
};
export default Wall;
