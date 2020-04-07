import React from "react";
import { login } from "@/common/auth/wappers";
import { Login } from "@/components/molecules/login";

export const LoginPage: React.FC = () => {
  return <Login onClick={login} />;
};
