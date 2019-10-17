import React from "react";
import { Redirect } from "react-router";
const LoginInfo = React.createContext();

export const LoginInfoProvider = props => {
  const [infoLog, setInfoLog] = React.useState("");
  const login = name => {
    setInfoLog(name);
    return <Redirect to="/page" />;
  };
  const logout = () => {
    setInfoLog("old");
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
