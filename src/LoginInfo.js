import React from "react";

const LoginInfo = React.createContext();

export const LoginInfoProvider = props => {
  const [infoLog, setInfoLog] = React.useState("default");
  const login = name => {
    setInfoLog(name);
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
