import Axios, { AxiosInstance } from "axios";
import { getUser } from "../auth/wappers";
import { BACKEND_SERVICE_BASE_URL } from "@/constants/enviroment";

let axiosSingleton: AxiosInstance | null = null;

const setAxiosSingleton = (axios: AxiosInstance) => {
  if (!axiosSingleton) {
    axiosSingleton = axios;
  }
};

/**
 * Axiosインスタンスを取得します。
 */
export const getAxios = async (): Promise<AxiosInstance> => {
  if (axiosSingleton) {
    return axiosSingleton;
  }
  const user = await getUser();
  if (user) {
    const token = await user.getIdToken();

    const axios = Axios.create({
      baseURL: BACKEND_SERVICE_BASE_URL,
      headers: {
        Authorization: token
      }
    });
    setAxiosSingleton(axios);
    return axios;
  } else {
    throw new Error("未ログインのユーザーがAPIアクセスしようとしてるよ！");
  }
};
