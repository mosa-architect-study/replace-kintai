import calendar from "../../../static/calendar.svg";
import file from "../../../static/file.svg";
import folder from "../../../static/folder.svg";
import lock from "../../../static/lock.svg";
import logout from "../../../static/logout.svg";
import pen from "../../../static/pen.svg";
import pencilThin from "../../../static/pencil-thin.svg";
import user from "../../../static/user.svg";
import xMark from "../../../static/x-mark.svg";

type IconSize = "l" | "s";
type IconList =
  | "calendar"
  | "file"
  | "folder"
  | "lock"
  | "logout"
  | "pen"
  | "pencilThin"
  | "user"
  | "xMark";

export interface IconSizeProps {
  size: IconSize;
}

export interface IconProps {
  size: IconSize;
  name: IconList;
}

export const iconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  s: "30px",
  l: "40px"
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
  xMark: xMark
};
