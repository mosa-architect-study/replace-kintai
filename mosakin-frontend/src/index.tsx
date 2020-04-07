import React from "react";
import ReactDOM from "react-dom";
import "ress";
import "./static/global.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PaidListPage } from "./components/pages/PaidListPage";
import { NewPaidPage } from "./components/pages/NewPaidPage";
import { UpdatePaidPage } from "./components/pages/UpdatePaidPage";
import { AdminPage } from "./components/pages/AdminPage";
import { NotFoundPage } from "./components/pages/404";
import { LoginPage } from "./components/pages/LoginPage";
import { LoginContextProvider } from "./components/context/LoginContext";
import { Layout } from "./components/pages/Layout";

const LoadingPageFIXME = () => <p>Loading</p>;

export const App: React.FC = () => {
  return (
    <Router>
      <LoginContextProvider
        LoginPage={LoginPage}
        LoadingPage={LoadingPageFIXME}
      >
        <Layout>
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
          <Switch>
            <Route exact path="/" component={PaidListPage} />
            <Route path="/new" component={NewPaidPage} />
            <Route path="/update" component={UpdatePaidPage} />
            <Route path="/admin" component={AdminPage} />
            <Route component={NotFoundPage}></Route>
          </Switch>
        </Layout>
      </LoginContextProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
