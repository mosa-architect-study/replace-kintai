import { useEffect, DependencyList } from "react";
import Axios, { AxiosInstance } from "axios";
import { getUser } from "../auth/wappers";
import { BACKEND_SERVICE_BASE_URL } from "@/constants/enviroment";
import { getAxios } from "./axiosFactory";

const axiosSingleton: AxiosInstance | null = null;

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
    getAxios().then(cb);
  }, deps);
};
