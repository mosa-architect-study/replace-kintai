export interface Error {
  statusCode: string;
}

// FIXME: 適切なものに変更してください
export const ErrorList = {
  400: "日付が重複しています",
  500: "サーバーエラーにより通信に失敗しました",
  unknown: "不明なエラーです"
};
