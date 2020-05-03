import React, { useState, useEffect } from "react";
import { LoginStatusOnLogin, LoginStatus } from "@/models/models/User";
import { LoadableViewModel } from "@/models/models/common";
import { getAuthorizedUser, logout } from "@/common/auth/wappers";
import fallbackPhoto from "@/static/mosakin.png";
import { axios } from "@/common/api/axios";
import { useContext } from "react";

const useLoginStatus = (): LoadableViewModel<LoginStatus> => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>();
  useEffect(() => {
    (async () => {
      const userPromise = getAuthorizedUser();
      const appUserPromise = axios.get("/user");
      const appUser = await appUserPromise.catch(() => null); //TODO: エラーハンドル
      const user = await userPromise;
      if (user && appUser) {
        setLoginStatus({
          login: true,
          user: {
            name: appUser.data.name,
            photoURL: user.photoURL || fallbackPhoto,
            role: appUser.data.adminFlag //FIXME
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
    })();
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

// ログイン情報を取得できる
export const useLoginInfo: () => LoginStatusOnLogin = () => {
  return useContext(LoginStatusContext)();
};