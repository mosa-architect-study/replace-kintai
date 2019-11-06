import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const SampleRoutes = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Sample1</Link>
        </li>
        <li>
          <Link to="/sample2">Sample2</Link>
        </li>
        <li>
          <Link to="/sample3">Sample3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={(): JSX.Element => <Sample1 />} />
        <Route path="/sample2" component={(): JSX.Element => <Sample2 />} />
        <Route path="/sample3" component={(): JSX.Element => <Sample3 />} />
      </Switch>
    </div>
  );
};

export const RouterSample = (): JSX.Element => {
  return (
    <>
      <Router>
        <SampleRoutes />
      </Router>
    </>
  );
};

const Sample1 = (): JSX.Element => {
  return (
    <div>
      <h2>sample1</h2>
    </div>
  );
};

const Sample2 = (): JSX.Element => {
  return (
    <div>
      <h2>sample2</h2>
    </div>
  );
};

const Sample3 = (): JSX.Element => {
  return (
    <div>
      <h2>sample3</h2>
    </div>
  );
};
