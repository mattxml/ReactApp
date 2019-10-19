import React, { useContext } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import { BrowserRouter as Redirect } from "react-router-dom";
const Places = () => {
  const user = useContext(NewLoginInfo);
  return (
    <div>
      {user.username == "" && <Redirect to="/" />}
      SIEMA
    </div>
  );
};
export default Places;
