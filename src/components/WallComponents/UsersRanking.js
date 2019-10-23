import { users } from "../../temp/users";
import React from "react";
export const UsersRanking = () => {
  const listUsers = users.slice(0, 4).map(({ id, name, score }) => (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
      <li>{score}</li>
    </ul>
  ));
  return <ol>{listUsers}</ol>;
};
