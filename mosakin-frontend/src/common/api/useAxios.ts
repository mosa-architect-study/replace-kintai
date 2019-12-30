import { useEffect, DependencyList } from "react";
import Axios, { AxiosInstance } from "axios";
import { getUser } from "../auth/wappers";
import { BACKEND_SERVICE_BASE_URL } from "@/constants/enviroment";

let axiosSingleton: AxiosInstance | null = null;

// FIXME: テスタビリティ悪いので修正

/**
 *
 * コールバック関数の引数で渡ってくるaxiosインスタンスは、
 * 認証トークンをHTTPヘッダーに付与して通信を行います。
 *
 */
export const useAxios = (
  cb: (axios: AxiosInstance) => void,
  deps?: DependencyList
) => {
  useEffect(() => {
    if (axiosSingleton) {
      cb(axiosSingleton);
    }
    getUser()
      .then(user => {
        if (user) {
          return user.getIdToken();
        } else {
          throw new Error(
            "未ログインのユーザーがAPIアクセスしようとしてるよ！"
          );
        }
      })
      .then(token => {
        axiosSingleton = Axios.create({
          baseURL: BACKEND_SERVICE_BASE_URL,
          headers: {
            Authorization: token
          }
        });
        cb(axiosSingleton);
      });
  }, deps);
};
