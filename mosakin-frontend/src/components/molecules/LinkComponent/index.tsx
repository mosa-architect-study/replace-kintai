import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Icon } from "@/components/atoms/icon/index";
import { IconList } from "@/components/atoms/icon/constant";

interface LinkProps {
  name: IconList;
  href: string;
}

export const LinkComponent: React.FC<LinkProps> = ({ href, name }) => {
  return (
    <>
      <Link to={href}>
        <Icon name={name} width="l" height="l" />
      </Link>
    </>
  );
};

/* 
/* TODO:ルート構成ファイル作れないか〜逆に面倒？ -> https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12
/* TODO:ページのURL構成不足分これでいいか -> 変更申請(/edit), 削除申請(/delete)
*/
export const Routes = () => {
  const EditPage = () => {
    return (
      <>
        <p>とりあえずの編集</p>
      </>
    );
  };
  const DeletePage = () => {
    return (
      <>
        <p>とりあえずの削除</p>
      </>
    );
  };
  return (
    <>
      <Switch>
        <Route path="/edit" component={EditPage} />
        <Route path="/delete" component={DeletePage} />
      </Switch>
    </>
  );
};
