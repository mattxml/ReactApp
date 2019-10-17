import React, { Component } from "react";
import { LoginInfoConsumer } from "./LoginInfo";
import { Redirect } from "react-router-dom";
const Test = props => {
  let name = props.value;
  if (name == "") {
    return <Redirect to="/" />;
  }
  return <div>Hi {name}</div>;
};
const Page = () => {
  return (
    <div>
      <LoginInfoConsumer>
        {({ infolog }) => <Test value={infolog} />}
      </LoginInfoConsumer>
    </div>
  );
};
export default Page;
