export type ToastType = "ERROR" | "SUCCESS";

export interface ToastProps {
  message: string;
  type: ToastType;
}
