import React, { useEffect } from "react";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { getUser, login } from "@/common/auth/wappers";
import { useHistory } from "react-router-dom";

const useRedirectOnLogin = () => {
  const history = useHistory();
  useEffect(() => {
    getUser().then(user => user && history.push("/"));
  }, []);
};

export const LoginPage: React.FC = () => {
  useRedirectOnLogin();
  return (
    <Button backgroundColor="1" onClick={login} height="s" width="s">
      <Text color="2" size="1">
        Login
      </Text>
    </Button>
  );
};
