import React, { useContext, useState } from "react";
import "../styles/MenuLoginStyle.css";
import Login from "./Login";
import Page from "./Page";
import Register from "./Register";
import About from "./About";
import { NewLoginInfo } from "../context/LoginInfo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Header = () => {
  const user = useContext(NewLoginInfo);
  const [click, setClick] = useState(0);

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
    <header className="header">
      {user.username == "" ? (
        <ul className="ulMenu">
          <li className="liMenu">
            <Link to="/">Zaloguj</Link>
          </li>
          <li className="liMenu">
            <Link to="/register">Zarejestruj</Link>
          </li>
          <li className="liMenu">
            <Link to="/about">O nas</Link>
          </li>
        </ul>
      ) : (
        <ul className="ulUser">
          <ul className="ululUser" onClick={userSettings}>
            <li class="liClickUser">{user.username}</li>
            {click == 1 && (
              <div>
                <li className="liUser">Profil</li>
                <li className="liUser" onClick={userLogout}>
                  Wyloguj
                </li>
              </div>
            )}
          </ul>
          <div className="ulUserMenu">
            <li className="liUserMenu">Tablica</li>
            <li className="liUserMenu">Miejsca</li>
            <li className="liUserMenu">Przepisy</li>
          </div>
        </ul>
      )}
    </header>
  );
};
export default Header;
