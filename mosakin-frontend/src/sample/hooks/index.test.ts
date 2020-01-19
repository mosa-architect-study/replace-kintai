import { useHoge } from ".";
import { renderHook, act } from "@testing-library/react-hooks";

test("sample test hooks", () => {
  const { result } = renderHook(() => useHoge(false));

  act(() => {
    result.current.toggle();
  });

  expect(result.current.flg).toBe(true);
});
