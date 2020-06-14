import React from "react";
import { ToastItem } from "./";
import { useToasting } from "react-hooks-toasting";

import { storiesOf } from "@storybook/react";
import { Button } from "@/components/atoms/button";

storiesOf("molecules/Toast", module).add("PullDown", () => {
  const { dispatch, renderToast } = useToasting(ToastItem, {
    exitingMS: 1000,
    displayMS: 15000
  });

  return (
    <div>
      <Button
        onClick={() => {
          dispatch({
            type: "SUCCESS",
            message:
              "処理に成功しました。長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い文章"
          });
        }}
        backgroundColor="1"
        width="s"
        height="s"
        color="white"
      >
        SUCCESS
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: "ERROR",
            message: "処理に失敗しました。"
          });
        }}
        backgroundColor="2"
        width="s"
        height="s"
        color="red"
      >
        ERROR
      </Button>
      <div>{renderToast()}</div>
    </div>
  );
});
