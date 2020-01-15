import React from "react";
import { getUser, logout, login } from "@/common/auth/wappers";
import { useAxios } from "@/common/api/useAxios";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import styled from "@emotion/styled";

interface User {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const UserInfoWrapper = styled.section`
  display: flex;
`;

export const AuthButton = () => {
  const [user, setUser] = React.useState<User | null | "Loading">("Loading");
  React.useEffect(() => {
    getUser().then(user => {
      user &&
        user.getIdToken().then(token => {
          console.log("token↓", token);
        });
      setUser(user);
    });
  }, []);
  useAxios(axios => {
    axios.get("/authenticated/verify").then(verifyResult => {
      console.log(verifyResult.data);
    });
  });
  const _logout = () => {
    logout();
    setUser(null);
  };
  return user ? (
    user === "Loading" ? (
      <p>Loading...</p>
    ) : (
      <UserInfoWrapper>
        <div>
          <p>
            <b>User: </b>
            {user.displayName}
          </p>
          <p>
            <b>E-mail: </b>
            {user.email}
          </p>
        </div>
        {user.photoURL && (
          <img style={{ height: "44px" }} src={user.photoURL}></img>
        )}
        <div>
          <Button onClick={_logout} backgroundColor="1" height="s" width="s">
            <Text color="2" size="1">
              Logout
            </Text>
          </Button>
        </div>
      </UserInfoWrapper>
    )
  ) : (
    <Button backgroundColor="1" onClick={login} height="s" width="s">
      <Text color="2" size="1">
        Login With Google
      </Text>
    </Button>
  );
};
