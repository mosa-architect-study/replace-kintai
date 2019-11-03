import React from "react";
import { mount } from "enzyme";
import { SumpleRouter } from "./react-router";
import { MemoryRouter } from "react-router-dom";

it("react-router", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/sumple2"]}>
      <SumpleRouter />
    </MemoryRouter>
  );
  expect(wrapper.find("Sumple2").text()).toBe("sumple2");
});
