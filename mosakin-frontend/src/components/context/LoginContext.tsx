import React, { useState, useEffect } from "react";
import { LoginStatusOnLogin, LoginStatus } from "@/models/models/User";
import { LoadableViewModel } from "@/models/models/common";
import { getUser, logout } from "@/common/auth/wappers";
import fallbackPhoto from "@/static/mosakin.png";

type LoginStatusContextValue = () => LoginStatusOnLogin;

const invalidUsingContextFn = () => {
  throw new Error("User情報がfetchされておらず、呼び出すことができません");
};

export const LoginStatusContext = React.createContext<LoginStatusContextValue>(
  invalidUsingContextFn
);

// userの値を束縛するための関数
const createUserGetter = (
  user: LoginStatusOnLogin
): LoginStatusContextValue => () => user;

interface LoginContextProviderProps {
  LoginPage: React.FC;
}

const useLoginStatus = (): LoadableViewModel<LoginStatus> => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>();
  useEffect(() => {
    getUser().then(res => {
      if (res && res.displayName) {
        setLoginStatus({
          login: true,
          user: {
            name: res.displayName,
            photoURL: res.photoURL || fallbackPhoto,
            role: "ADMIN" //FIXME
          },
          logout() {
            logout();
            setLoginStatus({
              login: false
            });
          }
        });
      } else {
        setLoginStatus({
          login: false
        });
      }
    });
  }, []);

  return loginStatus
    ? {
        status: "Fetched",
        data: loginStatus
      }
    : {
        status: "Loading"
      };
};

export const LoginContextProvider: React.FC<LoginContextProviderProps> = ({
  children,
  LoginPage
}) => {
  const loginStatus = useLoginStatus();
  if (loginStatus.status === "Fetched") {
    const data = loginStatus.data;
    return data.login ? (
      <LoginStatusContext.Provider value={createUserGetter(data)}>
        {children}
      </LoginStatusContext.Provider>
    ) : (
      <LoginPage />
    );
  }
  return <p>User Fetching...</p>;
};
