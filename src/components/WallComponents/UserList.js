import React from "react";
import { users } from "../../temp/users";
export const UserList = props => {
  const userName = users.filter(({ id }) => id === props.by);
  return <div>{userName[0].name}</div>;
};
