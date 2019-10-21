import React, { useContext, useState, useEffect } from "react";
import "../styles/MenuLoginStyle.css";
import {
  MenuList,
  MenuListLink,
  MenuUnorderedList,
  NavOrderedList,
  UserMenuList,
  UserName,
  UserOption
} from "../styles/MenuLoginStyle";
import { NewLoginInfo } from "../context/LoginInfo";
import { Link } from "react-router-dom";
const SuperComponent = () => {
  const user = useContext(NewLoginInfo);
  const userLogout = () => {
    user.logout();
  };

  useEffect(() => {
    const temp = document.querySelectorAll(".UserOption");
    setTimeout(() =>
      temp.forEach(w => w.classList.toggle("clickUserAnimation"), 3000)
    );
  }, []);
  return (
    <div>
      <li className="UserOption">Profil</li>

      <li className="UserOption" expanded onClick={userLogout}>
        Wyloguj
      </li>
    </div>
  );
};
const Header = () => {
  const user = useContext(NewLoginInfo);
  const [clicked, setClicked] = useState(false);

  const userSettings = () => {
    setClicked(prev => !prev);
  };

  return (
    <header className="header">
      {user.username === "" ? (
        <nav>
          <MenuUnorderedList>
            <MenuList>
              <MenuListLink to="/">Zaloguj</MenuListLink>
            </MenuList>
            <MenuList>
              <MenuListLink to="/register">Zarejestruj</MenuListLink>
            </MenuList>
            <MenuList>
              <MenuListLink to="/about">O nas</MenuListLink>
            </MenuList>
          </MenuUnorderedList>
        </nav>
      ) : (
        <nav>
          <NavOrderedList>
            {/* usermenulist*/}
            <UserMenuList onClick={userSettings}>
              <UserName>{user.username}</UserName>
              {clicked === true && <SuperComponent />}
            </UserMenuList>
            <MenuUnorderedList>
              <MenuList>
                <MenuListLink to="/wall">Tablica</MenuListLink>
              </MenuList>
              <MenuList>
                <MenuListLink to="/places">Miejsca</MenuListLink>
              </MenuList>
              <MenuList>
                <MenuListLink to="/reciptes">Przepisy</MenuListLink>
              </MenuList>
            </MenuUnorderedList>
          </NavOrderedList>
        </nav>
      )}
    </header>
  );
};
export default Header;
