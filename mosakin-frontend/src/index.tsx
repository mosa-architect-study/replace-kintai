import React from "react";
import ReactDOM from "react-dom";
import "ress";
import "./static/global.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PaidListPage } from "./components/pages/PaidListPage";
import { NewPaidPage } from "./components/pages/NewPaidPage";
import { AdminPage } from "./components/pages/AdminPage";
import { AuthButton } from "./sample/login";
import { NotFoundPage } from "./components/pages/404";

export const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">TOP</Link>
        </li>
        <li>
          <Link to="/new">新規申請</Link>
        </li>
        <li>
          <Link to="/admin">管理画面</Link>
        </li>
      </ul>
      <AuthButton />
      <Switch>
        <Route exact path="/" component={PaidListPage} />
        <Route path="/new" component={NewPaidPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
