import Axios from "axios";
import { BACKEND_SERVICE_BASE_URL } from "@/constants/enviroment";
import { getAuthorizedUser } from "../auth/wappers";

const axios = Axios.create({
  baseURL: BACKEND_SERVICE_BASE_URL,
});
axios.interceptors.request.use(async config => {
  const user = await getAuthorizedUser();
  if (!user) {
    throw new Error("未ログインのユーザーがAPIアクセスしようとしてるよ！");
  }
  config.headers.common.Authorization = await user.getIdToken();
  return config;
});
export { axios };
