import React, { useState, useEffect } from "react";
import { LoginStatusOnLogin, LoginStatus } from "@/models/models/User";
import { LoadableViewModel } from "@/models/models/common";
import { getUser, logout } from "@/common/auth/wappers";
import fallbackPhoto from "@/static/mosakin.png";

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
  LoadingPage: React.FC;
}

export const LoginContextProvider: React.FC<LoginContextProviderProps> = ({
  children,
  LoginPage,
  LoadingPage
}) => {
  const loginStatus = useLoginStatus();
  if (loginStatus.status === "Fetched") {
    const data = loginStatus.data;
    return data.login ? (
      // ログインしている場合は画面表示
      <LoginStatusContext.Provider value={createUserGetter(data)}>
        {children}
      </LoginStatusContext.Provider>
    ) : (
      // していない場合はログイン画面を表示する
      <LoginPage />
    );
  }
  return <LoadingPage />;
};
