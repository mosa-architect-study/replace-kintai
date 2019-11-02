import { Caption } from ".";
import React from "react";

export default {
  title: "Caption"
};

export const h1 = (): JSX.Element => <Caption lv="h1">新規申請</Caption>;

export const h2 = (): JSX.Element => <Caption lv="h2">有給時間種別</Caption>;

export const h3 = (): JSX.Element => <Caption lv="h3">ホゲホゲ</Caption>;
