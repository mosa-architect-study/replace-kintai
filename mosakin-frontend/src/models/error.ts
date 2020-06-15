// FIXME: 適切なものに変更してください
export const errorMessageDictionary = {
  DUPLICATED: "日付が重複しています。",
  INTERNAL_SEWRVER_ERROR: "サーバーエラーにより通信に失敗しました。",
  UNEXPECTED_ERROR: "不明なエラーです。",
  NOTIFICATION_FAILED: "処理には成功しましたが、Slackへの通知に失敗しました。",
};

export type ErrorMessageKey = keyof typeof errorMessageDictionary;

export interface ErrorObject {
  content: ErrorMessageKey;
}
