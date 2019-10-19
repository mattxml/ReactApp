import React, { useContext, useState } from "react";
import { NewLoginInfo } from "../context/LoginInfo";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Page = () => {
  const user = useContext(NewLoginInfo);

  return (
    <div>
      {/*user.username == "" && <Redirect to="/" />*/}
      <Route>
        <Link to="/wall"> we</Link>
      </Route>
      ;
    </div>
  );
};
export default Page;
