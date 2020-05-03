import { ErrorList } from "@/models/models/error";

export const convertStatusIntoMessage = (status: number) => {
  if (status === 400) {
    return ErrorList[400];
  } else if (status === 500) {
    return ErrorList[500];
  } else {
    return ErrorList.unknown;
  }
};
