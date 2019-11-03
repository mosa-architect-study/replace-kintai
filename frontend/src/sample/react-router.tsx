import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const SumpleRouter = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Sumple1</Link>
        </li>
        <li>
          <Link to="/sumple2">Sumple2</Link>
        </li>
        <li>
          <Link to="/sumple3">Sumple3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={(): JSX.Element => <Sumple1 />} />
        <Route path="/sumple2" component={(): JSX.Element => <Sumple2 />} />
        <Route path="/sumple3" component={(): JSX.Element => <Sumple3 />} />
      </Switch>
    </div>
  );
};

export const App = (): JSX.Element => {
  return (
    <Router>
      <SumpleRouter />
    </Router>
  );
};

const Sumple1 = (): JSX.Element => {
  return (
    <div>
      <h2>sumple1</h2>
    </div>
  );
};

const Sumple2 = (): JSX.Element => {
  return (
    <div>
      <h2>sumple2</h2>
    </div>
  );
};

const Sumple3 = (): JSX.Element => {
  return (
    <div>
      <h2>sumple3</h2>
    </div>
  );
};
