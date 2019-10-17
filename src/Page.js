import React, { Component } from "react";
import { LoginInfoConsumer } from "./LoginInfo";
const Page = () => {
  return (
    <LoginInfoConsumer>
      {({ infolog }) => <div>{infolog}</div>}
    </LoginInfoConsumer>
  );
};
export default Page;
