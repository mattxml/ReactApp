import React, { Component } from "react";
import { LoginInfoConsumer, NewLoginInfo } from "./LoginInfo";
import { Redirect } from "react-router-dom";

const Page = () => {
  const [click, setClick] = React.useState(0);
  const user = React.useContext(NewLoginInfo);

  const userSettings = () => {
    if (click == 0) {
      setClick(1);
    } else {
      setClick(0);
    }
  };
  const userLogout = () => {
    user.logout();
  };

  return (
    <div>
      {user.infolog == "" && <Redirect to="/" />}

      <div onClick={userSettings}>{user.infolog} </div>
      {click != 0 && (
        <div>
          <div>Profil</div>
          <div onClick={userLogout}>Wyloguj</div>
        </div>
      )}
    </div>
  );
};
export default Page;
