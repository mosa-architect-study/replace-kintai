import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { PullDownUser, PullDownMenu } from ".";
import { Text } from "../../atoms/text";
//import { Icon } from "../../atoms/icon";
//import { UserIcon } from "../../atoms/userIcon";
import React from "react";

storiesOf("PullDown", module).add("PullDown", () => (
  <Router>
    <PullDown />
  </Router>
));

export const PullDown = (): JSX.Element => {
  return (
    <>
      <PullDownContainer />
      <PullDownRoutesSample />
    </>
  );
};

export const PullDownContainer = (): JSX.Element => {
  return (
    <>
      <PullDownUser color="1" backgroundColor="1" borderRadius="1" />
      <PullDownMenuSample1 />
      <PullDownMenuSample2 />
    </>
  );
};

export const PullDownRoutesSample = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/path1">
          <MenuSample1 />
        </Route>
        <Route path="/path2">
          <MenuSample2 />
        </Route>
      </Switch>
    </>
  );
};

const PullDownMenuSample1 = (): JSX.Element => {
  const history = useHistory();
  return (
    <>
      <PullDownMenu
        color="1"
        backgroundColor="1"
        borderRadius="2"
        onClick={() => history.push("/path1")}
      >
        <Text size="1">PullDownMenu1</Text>
      </PullDownMenu>
    </>
  );
};

const MenuSample1 = (): JSX.Element => {
  const { path1 } = useParams();
  return (
    <>
      <h2>PullDown1{path1}</h2>
      <p>{`pathname: ${location.pathname}`}</p>
    </>
  );
};

const PullDownMenuSample2 = (): JSX.Element => {
  const history = useHistory();
  return (
    <>
      <PullDownMenu
        color="1"
        backgroundColor="1"
        borderRadius="3"
        onClick={() => history.push("/path2")}
      >
        <Text size="1">PullDownMenu2</Text>
      </PullDownMenu>
    </>
  );
};

const MenuSample2 = (): JSX.Element => {
  const { path2 } = useParams();
  return (
    <>
      <h2>PullDown2{path2}</h2>
      <p>{`pathname: ${location.pathname}`}</p>
    </>
  );
};