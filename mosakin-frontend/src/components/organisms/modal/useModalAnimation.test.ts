import { useModalAnimation } from "./useModalAnimation";
import { renderHook, act } from "@testing-library/react-hooks";
import { useState } from "react";

const TIME = 100;

const wrapStubParent = (initial: boolean) => {
  const [isOpen, change] = useState(initial);
  const status = useModalAnimation(isOpen, TIME);
  return {
    status,
    change,
  };
};

test("閉じてる状態の時にisOpenがtrueになると開く", async () => {
  jest.useFakeTimers();
  const { result } = renderHook(() => wrapStubParent(false));
  act(() => {
    result.current.change(true);
  });
  expect(result.current.status).toBe("open");
  act(() => {
    result.current.change(false);
  });
  expect(result.current.status).toBe("transition");
  act(() => {
    jest.runAllTimers();
  });
  expect(result.current.status).toBe("close");
});
