import calendar from "../../../static/calendar.svg";
import file from "../../../static/file.svg";
import folder from "../../../static/folder.svg";
import lock from "../../../static/lock.svg";
import logout from "../../../static/logout.svg";
import pen from "../../../static/pen.svg";
import pencilThin from "../../../static/pencil-thin.svg";
import user from "../../../static/user.svg";
import xMark from "../../../static/x-mark.svg";
import pageTitle from "../../../static/page-title.svg";

type IconSize = "s" | "l";
export type IconList =
  | "calendar"
  | "file"
  | "folder"
  | "lock"
  | "logout"
  | "pen"
  | "pencilThin"
  | "user"
  | "xMark"
  | "pageTitle";

export interface IconSizeProps {
  size: IconSize;
}

export interface IconProps {
  name: IconList;
}

export const pcIconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  s: "18px",
  l: "22px"
};

export const spIconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  s: "30px",
  l: "38px"
};

export const IconListDict: { [P in IconList]: string } = {
  calendar: calendar,
  file: file,
  folder: folder,
  lock: lock,
  logout: logout,
  pen: pen,
  pencilThin: pencilThin,
  user: user,
  xMark: xMark,
  pageTitle: pageTitle
};
