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
import mosakin from "../../../static/mosakin.png";

export type IconSize = "s" | "m" | "l";
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
  | "pageTitle"
  | "mosakin";

export interface IconSizeProps {
  width: IconSize;
  height: IconSize;
}

export interface IconProps {
  name: IconList;
  width: IconSize;
  height: IconSize;
}

export const PcIconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  s: "18px",
  m: "22px",
  l: "34px",
};

export const SpIconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  s: "22px",
  m: "28px",
  l: "40px",
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
  pageTitle: pageTitle,
  mosakin: mosakin,
};
