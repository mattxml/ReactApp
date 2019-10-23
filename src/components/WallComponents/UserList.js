import React from "react";
import { users } from "../../temp/users";
import { TextUser } from "../../styles/WallStyle";
export const UserList = props => {
  const userName = users.slice(0, 5).filter(({ id }) => id === props.by);
  return <TextUser>{userName[0].name}</TextUser>;
};
