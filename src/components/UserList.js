import React from "react";
import { users } from "../temp/users";
export const UserList = props => {
  let userName = "";
  users.map(({ id, name }) => {
    if (id === props.by) {
      userName = name;
    }
  });
  return <p>{userName}</p>;
};
