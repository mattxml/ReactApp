import React from "react";
import { Redirect } from "react-router";
const LoginInfo = React.createContext();
const useStateWithLocalStorage = localStorageKey => {
  const [infoLog, setInfoLog] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, infoLog);
  }, [infoLog]);

  return [infoLog, setInfoLog];
};
export const LoginInfoProvider = props => {
  const [infoLog, setInfoLog] = useStateWithLocalStorage("loginState");
  const login = name => {
    setInfoLog(name);
  };
  const logout = () => {
    setInfoLog("");
    return <Redirect to="/" />;
  };
  const { children } = props;
  return (
    <LoginInfo.Provider
      value={{
        login: login,
        logout: logout,
        infolog: infoLog
      }}
    >
      {children}
    </LoginInfo.Provider>
  );
};
export const LoginInfoConsumer = LoginInfo.Consumer;
export const NewLoginInfo = LoginInfo;
