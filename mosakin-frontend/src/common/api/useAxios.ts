import { useEffect, DependencyList } from "react";
import { AxiosInstance } from "axios";
import { axios } from "./axios";

/**
 *
 * コールバック関数の引数で渡ってくるaxiosインスタンスは、
 * 認証トークンをHTTPヘッダーに付与して通信を行います。
 *
 */
export const useAxios = (
  cb: (axios: AxiosInstance) => void,
  deps?: DependencyList
) => useEffect(() => cb(axios), deps);
