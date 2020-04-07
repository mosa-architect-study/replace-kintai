import { LoginStatusOnLogin } from "@/models/models/User";
import { useContext } from "react";
import { LoginStatusContext } from "@/components/context/LoginContext";
export const useLoginInfo: () => LoginStatusOnLogin = () => {
  return useContext(LoginStatusContext)();
};
