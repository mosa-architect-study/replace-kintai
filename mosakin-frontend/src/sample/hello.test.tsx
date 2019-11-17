import * as React from "react";
import { Hello } from "./hello";
import { shallow } from "enzyme";

it("hello", () => {
  const result = shallow(<Hello />);
  expect(result.text()).toBe("Hello React");
});
