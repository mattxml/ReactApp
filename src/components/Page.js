import React, { useContext, useState } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import { Redirect } from "react-router-dom";

const Page = () => {
  const user = useContext(NewLoginInfo);

  return <div>{user.username == "" && <Redirect to="/" />}</div>;
};
export default Page;
