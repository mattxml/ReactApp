import React, { useContext, useState } from "react";
import "../styles/MenuLoginStyle.css";

import { NewLoginInfo } from "../context/LoginInfo";
import { BrowserRouter as Link } from "react-router-dom";
const Header = () => {
  const user = useContext(NewLoginInfo);
  const [clicked, setClicked] = useState(false);

  const userSettings = () => {
    setClicked(prev => !prev);
  };

  const userLogout = () => {
    user.logout();
  };
  return (
    <header className="header">
      {user.username === "" ? (
        <nav>
          <ul className="menuUnorderedList">
            <li className="menuList">
              <Link to="/">Zaloguj</Link>
            </li>
            <li className="menuList">
              <Link to="/register">Zarejestruj</Link>
            </li>
            <li className="menuList">
              <Link to="/about">O nas</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ol className="navOrderedList">
            <ul className="userList" onClick={userSettings}>
              <p class="userName">{user.username}</p>
              {clicked == true && (
                <div>
                  <li class="userOption">Profil</li>
                  <li class="userOption" onClick={userLogout}>
                    Wyloguj
                  </li>
                </div>
              )}
            </ul>
            <ul className="navList">
              <li className="navListItem">
                <Link to="/wall">Tablica</Link>
              </li>
              <li className="navListItem">
                <Link to="/places">Miejsca</Link>
              </li>
              <li className="navListItem">
                <Link to="/reciptes">Przepisy</Link>
              </li>
            </ul>
          </ol>
        </nav>
      )}
    </header>
  );
};
export default Header;
