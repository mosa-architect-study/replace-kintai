import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { PaidTable } from ".";
import { userData } from "@/models/models/paidList/mock";

storiesOf("organisms/PaidTable", module).add("PaidTable", () => {
  const A = () => {
    return (
      <>
        <p>ユーザーページ</p>
      </>
    );
  };
  return (
    <>
      <Router>
        <PaidTable users={userData} />
        <Switch>
          {userData.map((paidData, index) => (
            <Route key={index} path={paidData.src} render={() => <A />} />
          ))}
        </Switch>
      </Router>
    </>
  );
});
