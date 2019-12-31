import React from "react";
import { AuthButton } from "./login";
import { RouterSample } from "./react-router";
import { PaidListContainer } from "./containers/PaidListContainer";

export const App = () => (
  <>
    <RouterSample />
    <AuthButton />
    <PaidListContainer />
  </>
);
