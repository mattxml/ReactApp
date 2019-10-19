import React, { useContext, useState } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import { Redirect } from "react-router-dom";

const Page = () => {
  const [click, setClick] = useState(0);
  const user = useContext(NewLoginInfo);

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
      {user.username == "" && <Redirect to="/" />}
      <div onClick={userSettings}>{user.username} </div>
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
