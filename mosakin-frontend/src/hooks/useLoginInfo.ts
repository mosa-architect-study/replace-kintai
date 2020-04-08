import { LoginStatusOnLogin } from "@/models/models/User";
import { useContext } from "react";
import { LoginStatusContext } from "@/components/context/LoginContext";

// ログイン情報を取得できる
export const useLoginInfo: () => LoginStatusOnLogin = () => {
  return useContext(LoginStatusContext)();
};
