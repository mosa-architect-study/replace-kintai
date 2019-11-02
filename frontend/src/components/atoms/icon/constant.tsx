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

export interface IconProps {
  size: IconSize;
}

export interface IconListProps {
  name: IconList;
}

export const iconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  l: "30px",
  s: "40px"
};

export const IconListDict: { [P in IconList]: string } = {
  calendar: "../../../static/calendar.svg",
  file: "../../../static/file.svg",
  folder: "../../../static/folder.svg",
  lock: "../../../static/lock.svg",
  logout: "../../../static/logout.svg",
  pen: "../../../static/pen.svg",
  pencilThin: "../../../static/pencil-thin.svg",
  user: "../../../static/user.svg",
  xMark: "../../../static/x-mark.svg"
};
