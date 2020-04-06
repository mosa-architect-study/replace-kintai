import React, { useEffect } from "react";
import { getUser, login } from "@/common/auth/wappers";
import { useHistory } from "react-router-dom";
import { Login } from "@/components/molecules/login";

const useRedirectOnLogin = () => {
  const history = useHistory();
  useEffect(() => {
    getUser().then(user => user && history.push("/"));
  }, []);
};

export const LoginPage: React.FC = () => {
  useRedirectOnLogin();
  return <Login onClick={login} />;
};
