import React from "react";
import { users } from "../../temp/users";
import { UserLink } from "../../styles/WallStyle";
export const UserList = props => {
  const userName = users.filter(({ id }) => id === props.by);
  return (
    <UserLink to={"/users/" + userName[0].id}>{userName[0].name}</UserLink>
  );
};
