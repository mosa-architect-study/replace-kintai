import React from "react";
import ReactDOM from "react-dom";
import "ress";
import "./static/global.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PaidListPage } from "./components/pages/PaidListPage";
import { NewPaidPage } from "./components/pages/NewPaidPage";
import { UpdatePaidPage } from "./components/pages/UpdatePaidPage";
import { AdminPage } from "./components/pages/AdminPage";
import { UseInfo } from "./sample/login";
import { NotFoundPage } from "./components/pages/404";
import { LoginPage } from "./components/pages/LoginPage";

const PaidContext = React.createContext("");

export const App: React.FC = () => {
  const paidContext = React.useContext(PaidContext);
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
          <Link to="/update">登録変更申請</Link>
        </li>
        <li>
          <Link to="/admin">管理画面</Link>
        </li>
      </ul>
      <UseInfo />
      <Switch>
        <Route exact path="/" component={PaidListPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/new" component={NewPaidPage} />
        <Route path="/update" component={UpdatePaidPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
